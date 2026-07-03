import { useEffect, useState } from 'react'
import { useQueries, useQuery } from '@tanstack/react-query'
import { PlayCircle } from 'lucide-react'
import api from '../../api/client'
import { TEST_RUN_STATUS_BADGE } from '../../lib/badges'
import type {
  ApiResponse,
  PaginatedResult,
  Project,
  TestCase,
  TestRun,
} from '../../types'
import TableSkeleton from '../projects/components/TableSkeleton'
import EmptyState from '../projects/components/EmptyState'
import ErrorState from '../projects/components/ErrorState'

export default function TestRunsPage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  )

  useEffect(() => {
    document.title = 'Test Runs — QA Platform'
  }, [])

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

  const {
    data: testCases,
    isLoading: isLoadingTestCases,
    isError: isErrorTestCases,
    refetch: refetchTestCases,
  } = useQuery({
    queryKey: ['test-cases', selectedProjectId, 'all'],
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<PaginatedResult<TestCase>>>(
        '/test-cases',
        { params: { projectId: selectedProjectId, limit: 100 } },
      )
      return data.data.data
    },
    enabled: Boolean(selectedProjectId),
  })

  const testRunQueries = useQueries({
    queries: (testCases ?? []).map((testCase) => ({
      queryKey: ['test-runs', testCase.id, 'all'],
      queryFn: async () => {
        const { data } = await api.get<ApiResponse<PaginatedResult<TestRun>>>(
          '/test-runs',
          { params: { testCaseId: testCase.id, limit: 100 } },
        )
        return data.data.data
      },
      enabled: Boolean(testCases),
    })),
  })

  const isLoading =
    Boolean(selectedProjectId) &&
    (isLoadingTestCases || testRunQueries.some((q) => q.isLoading))
  const isError = isErrorTestCases || testRunQueries.some((q) => q.isError)

  const allRuns = testRunQueries
    .flatMap((q) => q.data ?? [])
    .sort(
      (a, b) =>
        new Date(b.executedAt).getTime() - new Date(a.executedAt).getTime(),
    )

  return (
    <div className="px-8 py-8">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Test Runs</h1>
          <p className="mt-1 text-sm text-gray-400">
            Select a project to view its test run history
          </p>
        </div>
        <select
          value={selectedProjectId ?? ''}
          onChange={(e) => setSelectedProjectId(e.target.value || null)}
          className="rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        >
          <option value="">Select a project</option>
          {projects?.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
      </div>

      {!selectedProjectId && (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-700 py-24 text-center">
          <p className="text-gray-400">
            Select a project to view its test runs
          </p>
        </div>
      )}

      {selectedProjectId && isLoading && <TableSkeleton columns={6} />}

      {selectedProjectId && !isLoading && isError && (
        <ErrorState
          onRetry={() => {
            refetchTestCases()
            testRunQueries.forEach((q) => q.refetch())
          }}
        />
      )}

      {selectedProjectId && !isLoading && !isError && allRuns.length === 0 && (
        <EmptyState
          icon={PlayCircle}
          title="No test runs yet for this project."
        />
      )}

      {selectedProjectId && !isLoading && !isError && allRuns.length > 0 && (
        <div className="overflow-hidden rounded-xl border border-gray-700">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-900 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-4 py-3">Test Case</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Severity</th>
                <th className="px-4 py-3">Executed By</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700 bg-gray-800">
              {allRuns.map((run) => (
                <tr key={run.id} className="hover:bg-gray-750">
                  <td className="px-4 py-3 text-white">
                    {run.testCase.title}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${TEST_RUN_STATUS_BADGE[run.status]}`}
                    >
                      {run.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-400">
                    {run.severity ?? '-'}
                  </td>
                  <td className="px-4 py-3 text-gray-400">
                    {run.executor.name}
                  </td>
                  <td className="px-4 py-3 text-gray-400">
                    {new Date(run.executedAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
