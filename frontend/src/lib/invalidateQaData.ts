import type { QueryClient } from '@tanstack/react-query'

const SHARED_QUERY_KEYS = [
  'projects',
  'jira-tasks',
  'jira-task',
  'test-cases',
  'test-runs',
  'qa-overview',
  'jira-members',
  'jira-task-transitions',
  'reports-submissions',
  'reports-submission-stats',
]

/**
 * Invalidates every query key shared across pages, so a change made in one
 * place (e.g. submitting QA results) is reflected everywhere else without
 * requiring a manual page refresh.
 */
export function invalidateQaData(queryClient: QueryClient) {
  return Promise.all(
    SHARED_QUERY_KEYS.map((key) => queryClient.invalidateQueries({ queryKey: [key] })),
  )
}
