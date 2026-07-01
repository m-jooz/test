export interface ApiResponse<T> {
  success: boolean
  statusCode: number
  data: T
  timestamp: string
}

export interface User {
  id: string
  name: string
  email: string
  role: 'ADMIN' | 'LEAD' | 'TESTER' | 'VIEWER'
}

export interface Project {
  id: string
  name: string
  type: 'WEB' | 'ANDROID' | 'IOS'
  description: string
  jiraProjectKey: string
  createdAt: string
}

export interface JiraTask {
  id: string
  jiraKey: string
  title: string
  currentStatus: string
  currentAssignee: string
  jiraUrl: string
  jiraUpdatedAt: string
  unseen: boolean
}

export interface TestCase {
  id: string
  title: string
  steps: string
  expectedResult: string
  platform: 'WEB' | 'ANDROID' | 'IOS'
  type: 'MANUAL' | 'E2E' | 'API' | 'UNIT' | 'PERFORMANCE'
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
}

export interface TestRun {
  id: string
  status: 'PASS' | 'FAIL' | 'BLOCKED' | 'SKIPPED'
  actualResult: string
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
  isBug: boolean
  bugStatus: 'PENDING' | 'APPROVED' | 'REJECTED'
  executedAt: string
}

export interface Notification {
  id: string
  message: string
  isRead: boolean
  createdAt: string
}
