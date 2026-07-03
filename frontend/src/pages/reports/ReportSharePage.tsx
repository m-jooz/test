import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { Printer } from 'lucide-react'
import api from '../../api/client'
import { QA_OVERALL_STATUS_BADGE, TEST_RUN_STATUS_BADGE } from '../../lib/badges'
import type { ApiResponse, QaSubmissionDetail } from '../../types'

export default function ReportSharePage() {
  const { t } = useTranslation()
  const { token } = useParams<{ token: string }>()

  useEffect(() => {
    document.title = t('reports.sharedReportTitle')
  }, [t])

  const { data: submission, isLoading, isError } = useQuery({
    queryKey: ['report-share', token],
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<QaSubmissionDetail>>(
        `/reports/submissions/share/${token}`,
      )
      return data.data
    },
    enabled: Boolean(token),
    retry: false,
  })

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950 text-gray-400">
        {t('reports.loadingReport')}
      </div>
    )
  }

  if (isError || !submission) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-950 text-center text-gray-400">
        <p className="mb-2 text-lg text-white">{t('reports.reportNotFound')}</p>
        <p className="text-sm">{t('reports.shareLinkInvalid')}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-10 text-white print:bg-white print:text-black">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">
              {submission.jiraTask.jiraKey} — {submission.jiraTask.title}
            </h1>
            <p className="mt-1 text-sm text-gray-400 print:text-gray-600">
              {t('reports.submittedByOn', {
                name: submission.user.name,
                date: new Date(submission.submittedAt).toLocaleString(),
              })}
            </p>
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="flex flex-shrink-0 items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 print:hidden"
          >
            <Printer size={16} />
            {t('reports.printExport')}
          </button>
        </div>

        <div className="mb-8 flex items-center gap-3">
          <span
            className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${QA_OVERALL_STATUS_BADGE[submission.overallStatus]}`}
          >
            {submission.overallStatus === 'PASS'
              ? `✅ ${t('status.approved')}`
              : `❌ ${t('reports.returned')}`}
          </span>
          <span className="text-sm text-gray-400 print:text-gray-600">
            {t('jira.passCountLine', {
              passCount: submission.passCount,
              totalCount: submission.totalCount,
            })}
          </span>
        </div>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold">{t('reports.testResults')}</h2>
          <div className="space-y-2">
            {submission.testRuns.map((run) => (
              <div
                key={run.id}
                className="rounded-lg border border-gray-700 bg-gray-800 p-3 print:border-gray-300 print:bg-white"
              >
                <div className="mb-1 flex items-center justify-between gap-2">
                  <p className="text-sm">{run.testCase.title}</p>
                  <span
                    className={`inline-flex flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${TEST_RUN_STATUS_BADGE[run.status]}`}
                  >
                    {t(`status.${run.status.toLowerCase()}`)}
                  </span>
                </div>
                {run.actualResult && (
                  <p className="text-xs text-gray-400 print:text-gray-600">
                    {run.actualResult}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold">{t('reports.jiraCommentSent')}</h2>
          <pre className="whitespace-pre-wrap rounded-xl border border-gray-700 bg-gray-800 p-4 text-xs text-gray-300 print:border-gray-300 print:bg-white print:text-gray-700">
            {submission.jiraComment}
          </pre>
        </section>

        <footer className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-600 print:border-gray-300">
          {t('reports.poweredByFooter')}
        </footer>
      </div>
    </div>
  )
}
