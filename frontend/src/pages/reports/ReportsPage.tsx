import { useEffect, useMemo, useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Copy, FileText, Search } from 'lucide-react'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import api from '../../api/client'
import { useDebouncedValue } from '../../lib/useDebouncedValue'
import { QA_OVERALL_STATUS_BADGE, TEST_RUN_STATUS_BADGE } from '../../lib/badges'
import type {
  ApiResponse,
  PaginatedResult,
  Project,
  QaSubmissionDetail,
  QaSubmissionStats,
  QaSubmissionSummary,
} from '../../types'
import TableSkeleton from '../projects/components/TableSkeleton'
import EmptyState from '../projects/components/EmptyState'
import ErrorState from '../projects/components/ErrorState'
import Pagination from '../../components/Pagination'
import SlideOver from '../../components/SlideOver'

export default function ReportsPage() {
  const { t } = useTranslation()
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  )
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [status, setStatus] = useState('')
  const [testerId, setTesterId] = useState('')
  const [taskSearch, setTaskSearch] = useState('')
  const debouncedTaskSearch = useDebouncedValue(taskSearch)
  const [page, setPage] = useState(1)
  const [detailId, setDetailId] = useState<string | null>(null)

  useEffect(() => {
    document.title = `${t('reports.title')} — QA Platform`
  }, [t])

  useEffect(() => {
    setPage(1)
  }, [selectedProjectId, dateFrom, dateTo, status, testerId, debouncedTaskSearch])

  const { data: projects } = useQuery({
    queryKey: ['projects', 'all'],
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<PaginatedResult<Project>>>(
        '/projects',
        { params: { limit: 100 } },
      )
      return data.data.data
    },
  })

  const filters = {
    projectId: selectedProjectId ?? undefined,
    dateFrom: dateFrom || undefined,
    dateTo: dateTo || undefined,
    status: status || undefined,
    testerId: testerId || undefined,
    taskSearch: debouncedTaskSearch || undefined,
  }

  const {
    data: result,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['reports-submissions', filters, page],
    queryFn: async () => {
      const { data } = await api.get<
        ApiResponse<PaginatedResult<QaSubmissionSummary>>
      >('/reports/submissions', { params: { ...filters, page, limit: 20 } })
      return data.data
    },
    enabled: Boolean(selectedProjectId),
  })
  const submissions = result?.data

  const { data: stats } = useQuery({
    queryKey: ['reports-submission-stats', filters],
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<QaSubmissionStats>>(
        '/reports/submissions/stats',
        { params: filters },
      )
      return data.data
    },
    enabled: Boolean(selectedProjectId),
  })

  const testerOptions = useMemo(() => {
    const map = new Map<string, string>()
    submissions?.forEach((s) => map.set(s.submittedBy, s.user.name))
    return Array.from(map.entries())
  }, [submissions])

  const { mutate: shareSubmission } = useMutation({
    mutationFn: (id: string) =>
      api.post<ApiResponse<{ shareToken: string }>>(
        `/reports/submissions/${id}/share`,
      ),
    onSuccess: async (response) => {
      const url = `${window.location.origin}/reports/share/${response.data.data.shareToken}`
      await navigator.clipboard.writeText(url)
      toast.success(t('common.copied'))
    },
  })

  const { data: detail } = useQuery({
    queryKey: ['reports-submission-detail', detailId],
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<QaSubmissionDetail>>(
        `/reports/submissions/${detailId}`,
      )
      return data.data
    },
    enabled: Boolean(detailId),
  })

  return (
    <div className="px-8 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-white">{t('reports.title')}</h1>
        <p className="mt-1 text-sm text-gray-400">{t('reports.subtitle')}</p>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-2">
        <select
          value={selectedProjectId ?? ''}
          onChange={(e) => setSelectedProjectId(e.target.value || null)}
          className="rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        >
          <option value="">{t('common.selectAProject')}</option>
          {projects?.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
          className="rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        />
        <span className="text-sm text-gray-500">{t('common.to')}</span>
        <input
          type="date"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
          className="rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        >
          <option value="">{t('reports.allStatuses')}</option>
          <option value="PASS">{t('status.pass')}</option>
          <option value="FAIL">{t('status.fail')}</option>
        </select>
        <select
          value={testerId}
          onChange={(e) => setTesterId(e.target.value)}
          className="rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        >
          <option value="">{t('reports.allTesters')}</option>
          {testerOptions.map(([id, name]) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
        <div className="relative">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            value={taskSearch}
            onChange={(e) => setTaskSearch(e.target.value)}
            placeholder={t('reports.taskSearchPlaceholder')}
            className="w-48 rounded-lg border border-gray-700 bg-gray-900 py-2 pl-9 pr-3 text-sm text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
      </div>

      {!selectedProjectId && (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-700 py-24 text-center">
          <p className="text-gray-400">{t('reports.selectProjectPrompt')}</p>
        </div>
      )}

      {selectedProjectId && stats && (
        <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-5">
          <StatCard label={t('reports.totalTasksTested')} value={stats.totalTasksTested} />
          <StatCard label={t('reports.totalPass')} value={stats.totalPass} valueClassName="text-green-500" />
          <StatCard label={t('reports.totalFail')} value={stats.totalFail} valueClassName="text-red-500" />
          <StatCard label={t('reports.passRate')} value={`${stats.passRatePct}%`} />
          <StatCard label={t('reports.avgTestsPerTask')} value={stats.avgTestsPerTask} />
        </div>
      )}

      {selectedProjectId && isLoading && <TableSkeleton columns={8} />}

      {selectedProjectId && isError && <ErrorState onRetry={() => refetch()} />}

      {selectedProjectId && !isLoading && !isError && submissions && submissions.length === 0 && (
        <EmptyState icon={FileText} title={t('reports.noSubmissionsYet')} />
      )}

      {selectedProjectId && !isLoading && !isError && submissions && submissions.length > 0 && (
        <>
          <div className="overflow-hidden rounded-xl border border-gray-700">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-900 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-4 py-3">{t('reports.task')}</th>
                  <th className="px-4 py-3">{t('reports.tester')}</th>
                  <th className="px-4 py-3">{t('common.date')}</th>
                  <th className="px-4 py-3">{t('reports.tests')}</th>
                  <th className="px-4 py-3">{t('status.pass')}</th>
                  <th className="px-4 py-3">{t('status.fail')}</th>
                  <th className="px-4 py-3">{t('common.status')}</th>
                  <th className="px-4 py-3">{t('common.actions')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700 bg-gray-800">
                {submissions.map((submission) => (
                  <tr key={submission.id} className="hover:bg-gray-750">
                    <td className="px-4 py-3 text-white">
                      {submission.jiraTask.jiraKey} — {submission.jiraTask.title}
                    </td>
                    <td className="px-4 py-3 text-gray-400">{submission.user.name}</td>
                    <td className="px-4 py-3 text-gray-400">
                      {new Date(submission.submittedAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-gray-400">{submission.totalCount}</td>
                    <td className="px-4 py-3 font-semibold text-green-500">
                      {submission.passCount}
                    </td>
                    <td className="px-4 py-3 font-semibold text-red-500">
                      {submission.failCount}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${QA_OVERALL_STATUS_BADGE[submission.overallStatus]}`}
                      >
                        {submission.overallStatus === 'PASS'
                          ? `✅ ${t('status.approved')}`
                          : `❌ ${t('reports.returned')}`}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        onClick={() => setDetailId(submission.id)}
                        className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-500"
                      >
                        {t('reports.viewReport')}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            page={result!.page}
            totalPages={result!.totalPages}
            onPageChange={setPage}
          />
        </>
      )}

      {detailId && (
        <SlideOver title={t('reports.reportDetail')} onClose={() => setDetailId(null)}>
          {!detail ? (
            <TableSkeleton columns={2} />
          ) : (
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-white">
                  {detail.jiraTask.jiraKey} — {detail.jiraTask.title}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  {t('reports.submittedByOn', {
                    name: detail.user.name,
                    date: new Date(detail.submittedAt).toLocaleString(),
                  })}
                </p>
                <span
                  className={`mt-2 inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${QA_OVERALL_STATUS_BADGE[detail.overallStatus]}`}
                >
                  {detail.overallStatus === 'PASS'
                    ? `✅ ${t('status.approved')}`
                    : `❌ ${t('reports.returned')}`}
                </span>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold text-white">
                  {t('reports.testResults')}
                </h3>
                <div className="space-y-2">
                  {detail.testRuns.map((run) => (
                    <div
                      key={run.id}
                      className="rounded-lg border border-gray-700 bg-gray-800 p-3"
                    >
                      <div className="mb-1 flex items-center justify-between gap-2">
                        <p className="text-sm text-white">{run.testCase.title}</p>
                        <span
                          className={`inline-flex flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${TEST_RUN_STATUS_BADGE[run.status]}`}
                        >
                          {t(`status.${run.status.toLowerCase()}`)}
                        </span>
                      </div>
                      {run.actualResult && (
                        <p className="text-xs text-gray-400">{run.actualResult}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold text-white">
                  {t('reports.jiraCommentSent')}
                </h3>
                <pre className="max-h-64 overflow-y-auto whitespace-pre-wrap rounded-lg border border-gray-700 bg-gray-900 p-3 text-xs text-gray-300">
                  {detail.jiraComment}
                </pre>
              </div>

              <button
                type="button"
                onClick={() => shareSubmission(detail.id)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
              >
                <Copy size={16} />
                {t('reports.shareReport')}
              </button>
            </div>
          )}
        </SlideOver>
      )}
    </div>
  )
}

function StatCard({
  label,
  value,
  valueClassName,
}: {
  label: string
  value: string | number
  valueClassName?: string
}) {
  return (
    <div className="rounded-xl border border-gray-700 bg-gray-800 p-4">
      <p className={`text-xl font-semibold ${valueClassName ?? 'text-white'}`}>
        {value}
      </p>
      <p className="mt-1 text-xs text-gray-500">{label}</p>
    </div>
  )
}
