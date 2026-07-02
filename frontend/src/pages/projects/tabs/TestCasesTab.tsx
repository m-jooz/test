import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { ClipboardList, Plus } from 'lucide-react'
import api from '../../../api/client'
import { PLATFORM_BADGE, PRIORITY_BADGE } from '../../../lib/badges'
import type { ApiResponse, TestCase } from '../../../types'
import TableSkeleton from '../components/TableSkeleton'
import EmptyState from '../components/EmptyState'
import ErrorState from '../components/ErrorState'
import NewTestCaseModal from '../modals/NewTestCaseModal'
import RunTestModal from '../modals/RunTestModal'

interface TestCasesTabProps {
  projectId: string
}

export default function TestCasesTab({ projectId }: TestCasesTabProps) {
  const navigate = useNavigate()
  const [isNewModalOpen, setIsNewModalOpen] = useState(false)
  const [runTestCaseId, setRunTestCaseId] = useState<string | null>(null)

  const {
    data: testCases,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['test-cases', projectId],
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<TestCase[]>>('/test-cases', {
        params: { projectId },
      })
      return data.data
    },
  })

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <button
          type="button"
          onClick={() => setIsNewModalOpen(true)}
          className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
        >
          <Plus size={18} />
          New Test Case
        </button>
      </div>

      {isLoading && <TableSkeleton columns={6} />}

      {isError && <ErrorState onRetry={() => refetch()} />}

      {!isLoading && !isError && testCases && testCases.length === 0 && (
        <EmptyState
          icon={ClipboardList}
          title="No test cases yet"
          action={
            <button
              type="button"
              onClick={() => setIsNewModalOpen(true)}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
            >
              Create your first test case
            </button>
          }
        />
      )}

      {!isLoading && !isError && testCases && testCases.length > 0 && (
        <div className="overflow-hidden rounded-xl border border-gray-700">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-900 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Platform</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Priority</th>
                <th className="px-4 py-3">Jira Task</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700 bg-gray-800">
              {testCases.map((testCase) => (
                <tr key={testCase.id} className="hover:bg-gray-750">
                  <td className="px-4 py-3 text-white">{testCase.title}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${PLATFORM_BADGE[testCase.platform]}`}
                    >
                      {testCase.platform}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-400">{testCase.type}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${PRIORITY_BADGE[testCase.priority]}`}
                    >
                      {testCase.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-400">
                    {testCase.jiraTask?.jiraKey ?? '—'}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setRunTestCaseId(testCase.id)}
                        className="rounded-lg bg-green-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-green-500"
                      >
                        Run
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          navigate(`/test-cases/${testCase.id}`)
                        }
                        className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-500"
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isNewModalOpen && (
        <NewTestCaseModal
          projectId={projectId}
          onClose={() => setIsNewModalOpen(false)}
        />
      )}

      {runTestCaseId && (
        <RunTestModal
          testCaseId={runTestCaseId}
          onClose={() => setRunTestCaseId(null)}
        />
      )}
    </div>
  )
}
