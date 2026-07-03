import { useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { Copy, FileText } from 'lucide-react'
import toast from 'react-hot-toast'
import api from '../../../api/client'
import { QA_OVERALL_STATUS_BADGE } from '../../../lib/badges'
import type { ApiResponse, PaginatedResult, QaSubmissionSummary } from '../../../types'
import Pagination from '../../../components/Pagination'
import TableSkeleton from '../components/TableSkeleton'
import EmptyState from '../components/EmptyState'
import ErrorState from '../components/ErrorState'

interface ReportsTabProps {
  projectId: string
}

export default function ReportsTab({ projectId }: ReportsTabProps) {
  const { t } = useTranslation()
  const [page, setPage] = useState(1)

  const {
    data: result,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['reports-submissions', { projectId }, page],
    queryFn: async () => {
      const { data } = await api.get<
        ApiResponse<PaginatedResult<QaSubmissionSummary>>
      >('/reports/submissions', { params: { projectId, page, limit: 10 } })
      return data.data
    },
  })
  const submissions = result?.data

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

  return (
    <div>
      {isLoading && <TableSkeleton columns={7} />}

      {isError && <ErrorState onRetry={() => refetch()} />}

      {!isLoading && !isError && submissions && submissions.length === 0 && (
        <EmptyState icon={FileText} title={t('reports.noSubmissionsYet')} />
      )}

      {!isLoading && !isError && submissions && submissions.length > 0 && (
        <>
          <div className="overflow-hidden rounded-xl border border-gray-700">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-900 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-4 py-3">{t('reports.task')}</th>
                  <th className="px-4 py-3">{t('reports.tester')}</th>
                  <th className="px-4 py-3">{t('common.date')}</th>
                  <th className="px-4 py-3">{t('reports.tests')}</th>
                  <th className="px-4 py-3">{t('common.status')}</th>
                  <th className="px-4 py-3">{t('reports.shareLink')}</th>
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
                    <td className="px-4 py-3 text-gray-400">
                      {submission.passCount}/{submission.totalCount}
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
                        onClick={() => shareSubmission(submission.id)}
                        aria-label={t('reports.copyShareLink')}
                        className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        <Copy size={16} />
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
    </div>
  )
}
