import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import {
  Bell,
  BarChart2,
  ClipboardList,
  FolderOpen,
  LayoutDashboard,
  LogOut,
  PlayCircle,
} from 'lucide-react'
import api from '../api/client'
import { useAuthStore } from '../store/auth.store'
import type { ApiResponse, Notification } from '../types'

const NAV_ITEMS = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/projects', icon: FolderOpen, label: 'Projects' },
  { to: '/test-cases', icon: ClipboardList, label: 'Test Cases' },
  { to: '/test-runs', icon: PlayCircle, label: 'Test Runs' },
  { to: '/reports', icon: BarChart2, label: 'Reports' },
]

interface NotificationsResponse {
  notifications: Notification[]
  unreadCount: number
}

export default function Layout() {
  const navigate = useNavigate()
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  const { data: notificationsData } = useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<NotificationsResponse>>(
        '/notifications',
      )
      return data.data
    },
    refetchInterval: 30000,
  })

  const unreadCount = notificationsData?.unreadCount ?? 0

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className="flex min-h-screen bg-gray-950">
      <aside className="flex w-64 flex-shrink-0 flex-col border-r border-gray-800 bg-gray-900">
        <div className="px-6 py-5">
          <span className="text-lg font-semibold text-indigo-400">
            QA Platform
          </span>
        </div>

        <nav className="flex-1 space-y-1 px-3">
          {NAV_ITEMS.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-gray-800 px-4 py-4">
          {user && (
            <div className="mb-3">
              <p className="truncate text-sm font-medium text-white">
                {user.name}
              </p>
              <p className="text-xs text-gray-500">{user.role}</p>
            </div>
          )}
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 flex-shrink-0 items-center justify-end border-b border-gray-800 bg-gray-900 px-6">
          <button
            type="button"
            aria-label="Notifications"
            className="relative rounded-full p-2 text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-semibold text-white">
                {unreadCount > 99 ? '99+' : unreadCount}
              </span>
            )}
          </button>
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-950">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
