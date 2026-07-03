import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQueries, useQuery, useQueryClient } from '@tanstack/react-query'
import { ExternalLink, PlayCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import api from '../../api/client'
import { jiraStatusBadgeClass, TEST_RUN_STATUS_BADGE } from '../../lib/badges'
import type {
  ApiResponse,
  JiraTask,
  PaginatedResult,
  QaSubmission,
  TestCase,
  TestRun,
} from '../../types'
import ConfirmDialog from '../../components/ConfirmDialog'
import TableSkeleton from '../projects/components/TableSkeleton'
import ErrorState from '../projects/components/ErrorState'
import RunTestModal from '../projects/modals/RunTestModal'
import SubmitFailModal from './modals/SubmitFailModal'

export default function TaskTestingPage() {
  const { projectId, taskId } = useParams<{
    projectId: string
    taskId: string
  }>()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const [runTestCaseId, setRunTestCaseId] = useState<string | null>(null)
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

  const latestRunQueries = useQueries({
    queries: (testCases ?? []).map((testCase) => ({
      queryKey: ['test-runs', testCase.id, 'latest'],
      queryFn: async () => {
        const { data } = await api.get<ApiResponse<PaginatedResult<TestRun>>>(
          '/test-runs',
          { params: { testCaseId: testCase.id, limit: 1 } },
        )
        return data.data.data[0] ?? null
      },
      enabled: Boolean(testCases),
    })),
  })

  const isLoading = isLoadingTask || isLoadingTestCases
  const isError = isErrorTask || isErrorTestCases

  const rows = (testCases ?? []).map((testCase, index) => ({
    testCase,
    latestRun: latestRunQueries[index]?.data ?? null,
  }))

  const allHaveRun =
    rows.length > 0 && rows.every((row) => row.latestRun !== null)
  const anyFail = rows.some((row) => row.latestRun?.status === 'FAIL')
  const completedCount = rows.filter((row) => row.latestRun !== null).length

  const submitMutation = useMutation({
    mutationFn: async (payload: {
      overallStatus: 'PASS' | 'FAIL'
      jiraAssigneeId?: string
      transitionId?: string
    }) => {
      const { data } = await api.post<ApiResponse<QaSubmission>>(
        `/jira/${projectId}/tasks/${taskId}/submit`,
        {
          overallStatus: payload.overallStatus,
          testRunIds: rows.map((row) => row.latestRun!.id),
          jiraAssigneeId: payload.jiraAssigneeId,
          transitionId: payload.transitionId,
        },
      )
      return data.data
    },
    onSuccess: (submission) => {
      queryClient.invalidateQueries({ queryKey: ['qa-overview'] })
      queryClient.invalidateQueries({ queryKey: ['jira-tasks'] })
      setSubmissionResult(submission)
      setShowConfirmPass(false)
      setShowFailModal(false)
      toast.success('QA result submitted to Jira')
    },
    onError: (error: any) => {
      const message =
        error.response?.data?.message ?? 'Failed to submit QA result'
      toast.error(Array.isArray(message) ? message[0] : message)
    },
  })

  if (submissionResult) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-8 py-8">
        <div className="w-full max-w-md rounded-2xl border border-gray-700 bg-gray-800 p-8 text-center">
          <h1 className="mb-2 text-xl font-semibold text-white">
            {submissionResult.overallStatus === 'PASS'
              ? '✅ QA Approved'
              : '❌ QA Failed — Returned for fixes'}
          </h1>
          <p className="mb-6 text-sm text-gray-400">
            {submissionResult.passCount}/{submissionResult.totalCount} test
            cases passed
            {submissionResult.labelAdded &&
              ` · Label "${submissionResult.labelAdded}" added`}
            {submissionResult.jiraStatusAfter &&
              ` · Jira status: ${submissionResult.jiraStatusAfter}`}
          </p>
          <button
            type="button"
            onClick={() => navigate('/dashboard')}
            className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col px-8 py-8 pb-28">
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
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="lg:w-2/5">
            <div className="rounded-xl border border-gray-700 bg-gray-800 p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex rounded-full bg-indigo-500/10 px-2 py-0.5 text-xs font-medium text-indigo-400 border border-indigo-500/30">
                  {task.jiraKey}
                </span>
                <span
                  className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${jiraStatusBadgeClass(task.currentStatus)}`}
                >
                  {task.currentStatus ?? 'Unknown'}
                </span>
              </div>
              <h1 className="mb-3 text-lg font-semibold text-white">
                {task.title}
              </h1>
              {task.description && (
                <p className="mb-4 whitespace-pre-wrap text-sm text-gray-400">
                  {task.description}
                </p>
              )}
              <div className="space-y-1 text-sm text-gray-400">
                <p>Assignee: {task.currentAssignee ?? 'Unassigned'}</p>
                {task.qaRequestedByName && (
                  <p>Sent to QA by: {task.qaRequestedByName}</p>
                )}
              </div>
              {task.jiraUrl && (
                <a
                  href={task.jiraUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300"
                >
                  View in Jira <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>

          <div className="lg:w-3/5">
            {rows.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-700 py-20 text-center">
                <PlayCircle size={36} className="mb-4 text-gray-600" />
                <p className="text-gray-400">
                  No test cases linked to this task yet.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {rows.map(({ testCase, latestRun }) => (
                  <div
                    key={testCase.id}
                    className="rounded-xl border border-gray-700 bg-gray-800 p-4"
                  >
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <p className="text-sm font-medium text-white">
                        {testCase.title}
                      </p>
                      {latestRun ? (
                        <span
                          className={`inline-flex flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${TEST_RUN_STATUS_BADGE[latestRun.status]}`}
                        >
                          {latestRun.status}
                        </span>
                      ) : (
                        <span className="inline-flex flex-shrink-0 rounded-full bg-gray-500/10 px-2 py-0.5 text-xs font-medium text-gray-400 border border-gray-500/30">
                          NOT RUN
                        </span>
                      )}
                    </div>
                    <details className="mb-2 text-xs text-gray-400">
                      <summary className="cursor-pointer text-gray-500 hover:text-gray-300">
                        Steps
                      </summary>
                      <p className="mt-1 whitespace-pre-wrap">
                        {testCase.steps}
                      </p>
                    </details>
                    <p className="mb-2 text-xs text-gray-500">
                      Expected: {testCase.expectedResult}
                    </p>
                    {latestRun?.actualResult && (
                      <p className="mb-2 text-xs text-gray-400">
                        Actual: {latestRun.actualResult}
                      </p>
                    )}
                    <button
                      type="button"
                      onClick={() => setRunTestCaseId(testCase.id)}
                      className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-500"
                    >
                      {latestRun ? 'Run Again' : 'Run'}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {!isLoading && !isError && task && rows.length > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-gray-700 bg-gray-900 px-8 py-4">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <p className="text-sm text-gray-400">
              {completedCount} of {rows.length} test cases completed
            </p>
            <button
              type="button"
              disabled={!allHaveRun}
              onClick={() =>
                anyFail ? setShowFailModal(true) : setShowConfirmPass(true)
              }
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit QA Result
            </button>
          </div>
        </div>
      )}

      {runTestCaseId && (
        <RunTestModal
          testCaseId={runTestCaseId}
          onClose={() => setRunTestCaseId(null)}
        />
      )}

      {showConfirmPass && (
        <ConfirmDialog
          title="All passed!"
          message="Submit to Jira? This will add a comment, apply the QA-Approved label, and move the task forward."
          confirmLabel="Submit to Jira"
          isDanger={false}
          isPending={submitMutation.isPending}
          onConfirm={() => submitMutation.mutate({ overallStatus: 'PASS' })}
          onCancel={() => setShowConfirmPass(false)}
        />
      )}

      {showFailModal && projectId && taskId && (
        <SubmitFailModal
          projectId={projectId}
          taskId={taskId}
          previousAssigneeId={task?.previousAssigneeId ?? null}
          previousAssigneeName={task?.previousAssigneeName ?? null}
          isPending={submitMutation.isPending}
          onClose={() => setShowFailModal(false)}
          onSubmit={({ jiraAssigneeId, transitionId }) =>
            submitMutation.mutate({
              overallStatus: 'FAIL',
              jiraAssigneeId,
              transitionId,
            })
          }
        />
      )}
    </div>
  )
}
