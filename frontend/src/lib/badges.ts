export const PLATFORM_BADGE: Record<'WEB' | 'ANDROID' | 'IOS', string> = {
  WEB: 'bg-blue-500/10 text-blue-400 border border-blue-500/30',
  ANDROID: 'bg-green-500/10 text-green-400 border border-green-500/30',
  IOS: 'bg-purple-500/10 text-purple-400 border border-purple-500/30',
}

export const PRIORITY_BADGE: Record<
  'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL',
  string
> = {
  CRITICAL: 'bg-red-500/10 text-red-400 border border-red-500/30',
  HIGH: 'bg-orange-500/10 text-orange-400 border border-orange-500/30',
  MEDIUM: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30',
  LOW: 'bg-blue-500/10 text-blue-400 border border-blue-500/30',
}

export const TEST_RUN_STATUS_BADGE: Record<
  'PASS' | 'FAIL' | 'BLOCKED' | 'SKIPPED',
  string
> = {
  PASS: 'bg-green-500/10 text-green-400 border border-green-500/30',
  FAIL: 'bg-red-500/10 text-red-400 border border-red-500/30',
  BLOCKED: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30',
  SKIPPED: 'bg-gray-500/10 text-gray-400 border border-gray-500/30',
}

export function jiraStatusBadgeClass(status: string | null): string {
  const normalized = (status ?? '').toLowerCase()
  if (normalized.includes('done') || normalized.includes('closed')) {
    return 'bg-green-500/10 text-green-400 border border-green-500/30'
  }
  if (normalized.includes('progress') || normalized.includes('review')) {
    return 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
  }
  if (!status) {
    return 'bg-gray-500/10 text-gray-400 border border-gray-500/30'
  }
  return 'bg-gray-500/10 text-gray-300 border border-gray-500/30'
}
