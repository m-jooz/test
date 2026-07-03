import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { ExternalLink, PlayCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import api from '../../api/client'
import { jiraStatusBadgeClass } from '../../lib/badges'
import { invalidateQaData } from '../../lib/invalidateQaData'
import type {
  ApiResponse,
  JiraTask,
  PaginatedResult,
  Project,
  QaSubmission,
  TestCase,
  TestRun,
} from '../../types'
import TableSkeleton from '../projects/components/TableSkeleton'
import ErrorState from '../projects/components/ErrorState'
import SubmitFailModal from './modals/SubmitFailModal'
import ConfirmPassModal from './modals/ConfirmPassModal'
import InlineAddTestCase from './components/InlineAddTestCase'

type DraftStatus = 'PASS' | 'FAIL' | 'BLOCKED' | 'SKIPPED'

interface DraftResult {
  status?: DraftStatus
  actualResult: string
  notes: string
}

const STATUS_OPTIONS: {
  value: DraftStatus
  labelKey: string
  emoji: string
  activeClassName: string
}[] = [
  {
    value: 'PASS',
    labelKey: 'status.pass',
    emoji: '✅',
    activeClassName: 'bg-green-600 text-white border-green-600',
  },
  {
    value: 'FAIL',
    labelKey: 'status.fail',
    emoji: '❌',
    activeClassName: 'bg-red-600 text-white border-red-600',
  },
  {
    value: 'BLOCKED',
    labelKey: 'status.blocked',
    emoji: '⚠',
    activeClassName: 'bg-yellow-600 text-white border-yellow-600',
  },
  {
    value: 'SKIPPED',
    labelKey: 'status.skipped',
    emoji: '⏭',
    activeClassName: 'bg-gray-600 text-white border-gray-600',
  },
]

const TYPE_LABEL_KEY: Record<TestCase['type'], string> = {
  MANUAL: 'testCases.methods.manual',
  E2E: 'testCases.methods.e2e',
  API: 'testCases.methods.api',
  UNIT: 'testCases.methods.unit',
  PERFORMANCE: 'testCases.methods.performance',
}

function requiresActualResult(status?: DraftStatus) {
  return status === 'FAIL' || status === 'BLOCKED'
}

export default function TaskTestingPage() {
  const { projectId, taskId } = useParams<{
    projectId: string
    taskId: string
  }>()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { t } = useTranslation()

  const [drafts, setDrafts] = useState<Record<string, DraftResult>>({})
  const [preparedRunIds, setPreparedRunIds] = useState<string[] | null>(null)
  const [previewComment, setPreviewComment] = useState('')
  const [showConfirmPass, setShowConfirmPass] = useState(false)
  const [showFailModal, setShowFailModal] = useState(false)
  const [submissionResult, setSubmissionResult] = useState<QaSubmission | null>(
    null,
  )

  const {
    data: task,
    isLoading: isLoadingTask,
    isError: isErrorTask,
    refetch: refetchTask,
  } = useQuery({
    queryKey: ['jira-task', projectId, taskId],
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<JiraTask>>(
        `/jira/${projectId}/tasks/${taskId}`,
      )
      return data.data
    },
    enabled: Boolean(projectId && taskId),
  })

  const { data: project } = useQuery({
    queryKey: ['project', projectId],
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<Project>>(
        `/projects/${projectId}`,
      )
      return data.data
    },
    enabled: Boolean(projectId),
  })

  const {
    data: testCases,
    isLoading: isLoadingTestCases,
    isError: isErrorTestCases,
    refetch: refetchTestCases,
  } = useQuery({
    queryKey: ['test-cases', 'jira-task', taskId],
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<PaginatedResult<TestCase>>>(
        '/test-cases',
        { params: { jiraTaskId: taskId, limit: 100 } },
      )
      return data.data.data
    },
    enabled: Boolean(taskId),
  })

  const isLoading = isLoadingTask || isLoadingTestCases
  const isError = isErrorTask || isErrorTestCases

  const getDraft = (testCaseId: string): DraftResult =>
    drafts[testCaseId] ?? { actualResult: '', notes: '' }

  const updateDraft = (testCaseId: string, patch: Partial<DraftResult>) => {
    setDrafts((prev) => ({
      ...prev,
      [testCaseId]: { ...getDraft(testCaseId), ...patch },
    }))
    setPreparedRunIds(null)
  }

  const rows = testCases ?? []
  const isRowComplete = (testCase: TestCase) => {
    const draft = getDraft(testCase.id)
    if (!draft.status) return false
    if (requiresActualResult(draft.status) && !draft.actualResult.trim()) {
      return false
    }
    return true
  }

  const completedCount = rows.filter(isRowComplete).length
  const allComplete = rows.length > 0 && completedCount === rows.length
  const anyFail = rows.some((tc) => getDraft(tc.id).status === 'FAIL')
  const progressPct = rows.length
    ? Math.round((completedCount / rows.length) * 100)
    : 0
  const overallStatus: 'PASS' | 'FAIL' = anyFail ? 'FAIL' : 'PASS'

  const prepareMutation = useMutation({
    mutationFn: async () => {
      const createdRuns = await Promise.all(
        rows.map(async (testCase) => {
          const draft = getDraft(testCase.id)
          const { data } = await api.post<ApiResponse<TestRun>>(
            '/test-runs',
            {
              testCaseId: testCase.id,
              status: draft.status,
              actualResult: draft.actualResult || undefined,
              notes: draft.notes || undefined,
            },
          )
          return data.data
        }),
      )
      const testRunIds = createdRuns.map((run) => run.id)

      const { data } = await api.post<
        ApiResponse<{ comment: string; passCount: number; failCount: number; totalCount: number }>
      >(`/jira/${projectId}/tasks/${taskId}/submit/preview`, {
        overallStatus,
        testRunIds,
      })

      return { testRunIds, comment: data.data.comment }
    },
    onSuccess: ({ testRunIds, comment }) => {
      setPreparedRunIds(testRunIds)
      setPreviewComment(comment)
      if (anyFail) {
        setShowFailModal(true)
      } else {
        setShowConfirmPass(true)
      }
    },
    onError: (error: any) => {
      const message =
        error.response?.data?.message ?? t('jira.submissionFailed')
      toast.error(Array.isArray(message) ? message[0] : message)
    },
  })

  const handleOpenSubmit = () => {
    if (preparedRunIds) {
      if (anyFail) setShowFailModal(true)
      else setShowConfirmPass(true)
      return
    }
    prepareMutation.mutate()
  }

  const submitMutation = useMutation({
    mutationFn: async (payload: {
      jiraAssigneeId?: string
      transitionId?: string
      commentOverride?: string
    }) => {
      const { data } = await api.post<ApiResponse<QaSubmission>>(
        `/jira/${projectId}/tasks/${taskId}/submit`,
        {
          overallStatus,
          testRunIds: preparedRunIds ?? [],
          jiraAssigneeId: payload.jiraAssigneeId,
          transitionId: payload.transitionId,
          commentOverride: payload.commentOverride,
        },
      )
      return data.data
    },
    onSuccess: (submission) => {
      invalidateQaData(queryClient)
      setSubmissionResult(submission)
      setShowConfirmPass(false)
      setShowFailModal(false)
      toast.success(t('jira.submissionSuccess'))
    },
    onError: (error: any) => {
      const message =
        error.response?.data?.message ?? t('jira.submissionFailed')
      toast.error(Array.isArray(message) ? message[0] : message)
    },
  })

  if (submissionResult) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-8 py-8">
        <div className="w-full max-w-md rounded-2xl border border-gray-700 bg-gray-800 p-8 text-center">
          <h1 className="mb-2 text-xl font-semibold text-white">
            {submissionResult.overallStatus === 'PASS'
              ? `✅ ${t('jira.qaApprovedTitle')}`
              : `❌ ${t('jira.qaFailedTitle')}`}
          </h1>
          <p className="mb-6 text-sm text-gray-400">
            {t('jira.passCountLine', {
              passCount: submissionResult.passCount,
              totalCount: submissionResult.totalCount,
            })}
            {submissionResult.labelAdded &&
              t('jira.labelAddedSuffix', { label: submissionResult.labelAdded })}
            {submissionResult.jiraStatusAfter &&
              t('jira.jiraStatusSuffix', {
                status: submissionResult.jiraStatusAfter,
              })}
          </p>
          <button
            type="button"
            onClick={() => navigate('/dashboard')}
            className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            {t('jira.backToDashboard')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col px-8 py-8 pb-32">
      {isLoading && <TableSkeleton columns={5} />}
      {isError && (
        <ErrorState
          onRetry={() => {
            refetchTask()
            refetchTestCases()
          }}
        />
      )}

      {!isLoading && !isError && task && (
        <>
          <div className="mb-6 rounded-xl border border-gray-700 bg-gray-800 p-5">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex rounded-full bg-indigo-500/10 px-2 py-0.5 text-xs font-medium text-indigo-400 border border-indigo-500/30">
                {task.jiraKey}
              </span>
              <h1 className="text-lg font-semibold text-white">{task.title}</h1>
              <span
                className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${jiraStatusBadgeClass(task.currentStatus)}`}
              >
                {task.currentStatus ?? t('common.unknown')}
              </span>
              {task.jiraUrl && (
                <a
                  href={task.jiraUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t('jira.viewInJira')}
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
            {rows.length > 0 && (
              <div className="mt-3 flex items-center gap-3">
                <div className="h-1.5 w-48 overflow-hidden rounded-full bg-gray-700">
                  <div
                    className="h-full rounded-full bg-green-500 transition-all"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
                <span className="text-xs text-gray-400">
                  {t('jira.completedCount', {
                    completed: completedCount,
                    total: rows.length,
                  })}
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="lg:w-[30%]">
              <div className="sticky top-4 rounded-xl border border-gray-700 bg-gray-800 p-5">
                {task.description && (
                  <p className="mb-4 whitespace-pre-wrap text-sm text-gray-400">
                    {task.description}
                  </p>
                )}
                {task.priority && (
                  <span className="mb-3 inline-flex rounded-full bg-orange-500/10 px-2 py-0.5 text-xs font-medium text-orange-400 border border-orange-500/30">
                    {task.priority}
                  </span>
                )}
                <div className="space-y-1 text-sm text-gray-400">
                  <p>
                    {t('jira.assignee')}: {task.currentAssignee ?? t('common.unassigned')}
                  </p>
                  <p>
                    {t('jira.reporter')}: {task.currentReporter ?? t('common.unassigned')}
                  </p>
                  {task.qaRequestedByName && (
                    <p>
                      {t('jira.sentToQaBy')}: {task.qaRequestedByName}
                    </p>
                  )}
                </div>

                {taskId && projectId && (
                  <InlineAddTestCase
                    projectId={projectId}
                    jiraTaskId={taskId}
                    platform={project?.type ?? 'WEB'}
                    nextSequence={rows.length + 1}
                  />
                )}
              </div>
            </div>

            <div className="lg:w-[70%]">
              {rows.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-700 py-20 text-center">
                  <PlayCircle size={36} className="mb-4 text-gray-600" />
                  <p className="text-gray-400">{t('jira.noTestCasesLinked')}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {rows.map((testCase, index) => {
                    const draft = getDraft(testCase.id)
                    const needsActual = requiresActualResult(draft.status)
                    return (
                      <div
                        key={testCase.id}
                        className="rounded-xl border border-gray-700 bg-gray-800 p-4"
                      >
                        <div className="mb-2 flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex flex-shrink-0 rounded-full bg-gray-700 px-2 py-0.5 text-xs font-mono font-semibold text-gray-300">
                              {`TC-${String(index + 1).padStart(3, '0')}`}
                            </span>
                            <p className="text-sm font-medium text-white">
                              {testCase.title}
                            </p>
                          </div>
                          <span className="inline-flex flex-shrink-0 rounded-full bg-indigo-500/10 px-2 py-0.5 text-xs font-medium text-indigo-400 border border-indigo-500/30">
                            {t(TYPE_LABEL_KEY[testCase.type])}
                          </span>
                        </div>
                        <details className="mb-2 text-xs text-gray-400">
                          <summary className="cursor-pointer text-gray-500 hover:text-gray-300">
                            {t('jira.steps')}
                          </summary>
                          <p className="mt-1 whitespace-pre-wrap">
                            {testCase.steps}
                          </p>
                        </details>
                        <p className="mb-3 text-xs text-gray-500">
                          {t('jira.expectedPrefix', { expected: testCase.expectedResult })}
                        </p>

                        <div className="mb-3 grid grid-cols-4 gap-2">
                          {STATUS_OPTIONS.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() =>
                                updateDraft(testCase.id, { status: option.value })
                              }
                              className={`rounded-lg border px-2 py-3 text-sm font-semibold transition-colors ${
                                draft.status === option.value
                                  ? option.activeClassName
                                  : 'border-gray-700 bg-gray-900 text-gray-500 hover:text-gray-300'
                              }`}
                            >
                              <span className="block text-base">{option.emoji}</span>
                              {t(option.labelKey)}
                            </button>
                          ))}
                        </div>

                        {draft.status && !needsActual && draft.actualResult && (
                          <p className="mb-2 text-xs text-gray-500">
                            {t('testCases.actualResult')}: {draft.actualResult}
                          </p>
                        )}

                        <div className="mb-2">
                          <label className="mb-1 block text-xs font-medium text-gray-400">
                            {t('testCases.actualResult')}
                            {needsActual && (
                              <span className="text-red-400"> *</span>
                            )}
                          </label>
                          <textarea
                            rows={2}
                            value={draft.actualResult}
                            onChange={(e) =>
                              updateDraft(testCase.id, {
                                actualResult: e.target.value,
                              })
                            }
                            className="w-full resize-none rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                          />
                        </div>

                        <div>
                          <label className="mb-1 block text-xs font-medium text-gray-400">
                            {t('testCases.notes')}
                          </label>
                          <textarea
                            rows={1}
                            value={draft.notes}
                            onChange={(e) =>
                              updateDraft(testCase.id, { notes: e.target.value })
                            }
                            placeholder={t('common.optional')}
                            className="w-full resize-none rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {!isLoading && !isError && task && rows.length > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-gray-700 bg-gray-900 px-8 py-4">
          <div className="mx-auto flex max-w-6xl items-center gap-6">
            <div className="flex-1">
              <p className="mb-1.5 text-sm text-gray-400">
                {t('jira.completedCount', {
                  completed: completedCount,
                  total: rows.length,
                })}
              </p>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
                <div
                  className={`h-full rounded-full transition-all ${allComplete ? (anyFail ? 'bg-red-500' : 'bg-green-500') : 'bg-indigo-500'}`}
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
            <button
              type="button"
              disabled={!allComplete || prepareMutation.isPending}
              onClick={handleOpenSubmit}
              className={`flex-shrink-0 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                allComplete && anyFail
                  ? 'bg-red-600 hover:bg-red-500'
                  : 'bg-green-600 hover:bg-green-500'
              }`}
            >
              {prepareMutation.isPending
                ? t('common.pleaseWait')
                : t('jira.submitQaResult')}
            </button>
          </div>
        </div>
      )}

      {showConfirmPass && (
        <ConfirmPassModal
          testCount={rows.length}
          comment={previewComment}
          isPending={submitMutation.isPending}
          onConfirm={() => submitMutation.mutate({})}
          onCancel={() => setShowConfirmPass(false)}
        />
      )}

      {showFailModal && projectId && taskId && (
        <SubmitFailModal
          projectId={projectId}
          taskId={taskId}
          previousAssigneeId={task?.previousAssigneeId ?? null}
          previousAssigneeName={task?.previousAssigneeName ?? null}
          failedTestTitles={rows
            .filter((tc) => getDraft(tc.id).status === 'FAIL')
            .map((tc) => tc.title)}
          initialComment={previewComment}
          isPending={submitMutation.isPending}
          onClose={() => setShowFailModal(false)}
          onSubmit={({ jiraAssigneeId, transitionId, commentOverride }) =>
            submitMutation.mutate({
              jiraAssigneeId,
              transitionId,
              commentOverride,
            })
          }
        />
      )}
    </div>
  )
}
