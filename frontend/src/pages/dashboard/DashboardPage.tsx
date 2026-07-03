import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { PlayCircle, Search } from 'lucide-react'
import api from '../../api/client'
import { formatRelativeTime } from '../../lib/formatRelativeTime'
import { useDebouncedValue } from '../../lib/useDebouncedValue'
import { QA_OVERALL_STATUS_BADGE } from '../../lib/badges'
import type {
  ApiResponse,
  PaginatedResult,
  Project,
  QaOverview,
} from '../../types'
import TableSkeleton from '../projects/components/TableSkeleton'
import EmptyState from '../projects/components/EmptyState'
import ErrorState from '../projects/components/ErrorState'

const LAST_PROJECT_KEY = 'qa-platform:last-dashboard-project'

export default function DashboardPage() {
  const navigate = useNavigate()
  const [projectId, setProjectId] = useState<string | null>(
    () => localStorage.getItem(LAST_PROJECT_KEY),
  )
  const [search, setSearch] = useState('')
  const [qaRequestedByName, setQaRequestedByName] = useState('')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const debouncedSearch = useDebouncedValue(search)

  useEffect(() => {
    document.title = 'Dashboard — QA Platform'
  }, [])

  useEffect(() => {
    if (projectId) localStorage.setItem(LAST_PROJECT_KEY, projectId)
  }, [projectId])

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

  useEffect(() => {
    if (!projectId && projects && projects.length > 0) {
      setProjectId(projects[0].id)
    }
  }, [projects, projectId])

  const {
    data: overview,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: [
      'qa-overview',
      projectId,
      debouncedSearch,
      qaRequestedByName,
      dateFrom,
      dateTo,
    ],
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<QaOverview>>(
        `/jira/${projectId}/qa-overview`,
        {
          params: {
            search: debouncedSearch || undefined,
            qaRequestedByName: qaRequestedByName || undefined,
            dateFrom: dateFrom || undefined,
            dateTo: dateTo || undefined,
          },
        },
      )
      return data.data
    },
    enabled: Boolean(projectId),
  })

  const requesterOptions = useMemo(() => {
    const names = new Set<string>()
    overview?.readyForTesting.forEach((task) => {
      if (task.qaRequestedByName) names.add(task.qaRequestedByName)
    })
    return Array.from(names)
  }, [overview])

  return (
    <div className="px-8 py-8">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-400">
            What's ready to test, right now
          </p>
        </div>
        <select
          value={projectId ?? ''}
          onChange={(e) => setProjectId(e.target.value || null)}
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

      {!projectId && (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-700 py-24 text-center">
          <p className="text-gray-400">Select a project to get started</p>
        </div>
      )}

      {projectId && (
        <>
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search
                size={16}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by title or key…"
                className="w-56 rounded-lg border border-gray-700 bg-gray-900 py-2 pl-9 pr-3 text-sm text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <select
              value={qaRequestedByName}
              onChange={(e) => setQaRequestedByName(e.target.value)}
              className="rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            >
              <option value="">Sent by anyone</option>
              {requesterOptions.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-500">to</span>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {isLoading && <TableSkeleton columns={4} />}
          {isError && <ErrorState onRetry={() => refetch()} />}

          {!isLoading && !isError && overview && (
            <>
              <section className="mb-10">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Tasks Ready for Testing
                </h2>
                {overview.readyForTesting.length === 0 ? (
                  <EmptyState
                    icon={PlayCircle}
                    title="No tasks are currently in Testing status"
                  />
                ) : (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {overview.readyForTesting.map((task) => (
                      <div
                        key={task.id}
                        className="flex flex-col justify-between rounded-xl border border-gray-700 bg-gray-800 p-4"
                      >
                        <div>
                          <div className="mb-2 flex items-center gap-2">
                            <span className="inline-flex rounded-full bg-indigo-500/10 px-2 py-0.5 text-xs font-medium text-indigo-400 border border-indigo-500/30">
                              {task.jiraKey}
                            </span>
                            <span className="text-xs text-gray-500">
                              {task.testCasesCount} test case
                              {task.testCasesCount === 1 ? '' : 's'}
                            </span>
                          </div>
                          <p className="mb-3 text-sm font-medium text-white">
                            {task.title}
                          </p>
                          <div className="mb-1 text-xs text-gray-400">
                            Sent by{' '}
                            <span className="text-gray-300">
                              {task.qaRequestedByName ?? 'Unknown'}
                            </span>{' '}
                            · {formatRelativeTime(task.sentToQaAt)}
                          </div>
                          <div className="text-xs text-gray-500">
                            Assignee: {task.currentAssignee ?? 'Unassigned'}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            navigate(`/jira/${projectId}/tasks/${task.id}/test`)
                          }
                          className="mt-4 w-full rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
                        >
                          Start Testing
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              <section className="mb-10">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  In Progress
                </h2>
                {overview.inProgress.length === 0 ? (
                  <EmptyState
                    icon={PlayCircle}
                    title="No tasks currently being tested"
                  />
                ) : (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {overview.inProgress.map(({ task, testCasesCount, completedCount }) => (
                      <div
                        key={task.id}
                        onClick={() =>
                          navigate(`/jira/${projectId}/tasks/${task.id}/test`)
                        }
                        className="cursor-pointer rounded-xl border border-gray-700 bg-gray-800 p-4 hover:bg-gray-750"
                      >
                        <div className="mb-2 flex items-center gap-2">
                          <span className="inline-flex rounded-full bg-indigo-500/10 px-2 py-0.5 text-xs font-medium text-indigo-400 border border-indigo-500/30">
                            {task.jiraKey}
                          </span>
                        </div>
                        <p className="mb-3 text-sm font-medium text-white">
                          {task.title}
                        </p>
                        <p className="text-xs text-gray-400">
                          {completedCount}/{testCasesCount} test cases completed
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              <section>
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Recently Completed
                </h2>
                {overview.recentlyCompleted.length === 0 ? (
                  <EmptyState
                    icon={PlayCircle}
                    title="No QA submissions yet"
                  />
                ) : (
                  <div className="overflow-hidden rounded-xl border border-gray-700">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-900 text-xs uppercase text-gray-500">
                        <tr>
                          <th className="px-4 py-3">Task</th>
                          <th className="px-4 py-3">Result</th>
                          <th className="px-4 py-3">Submitted By</th>
                          <th className="px-4 py-3">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-700 bg-gray-800">
                        {overview.recentlyCompleted.map((submission) => (
                          <tr key={submission.id} className="hover:bg-gray-750">
                            <td className="px-4 py-3 text-white">
                              {submission.jiraTask.jiraKey} —{' '}
                              {submission.jiraTask.title}
                            </td>
                            <td className="px-4 py-3">
                              <span
                                className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${QA_OVERALL_STATUS_BADGE[submission.overallStatus]}`}
                              >
                                {submission.overallStatus} ({submission.passCount}/
                                {submission.totalCount})
                              </span>
                            </td>
                            <td className="px-4 py-3 text-gray-400">
                              {submission.user.name}
                            </td>
                            <td className="px-4 py-3 text-gray-400">
                              {formatRelativeTime(submission.submittedAt)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            </>
          )}
        </>
      )}
    </div>
  )
}
