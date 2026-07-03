import type { User } from '../types'

/** ADMIN/LEAD manage projects day-to-day; TESTER/VIEWER work from the task-focused dashboard. */
export function getLandingPath(role: User['role']): string {
  return role === 'ADMIN' || role === 'LEAD' ? '/projects' : '/dashboard'
}
