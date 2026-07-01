import { useAuthStore } from '../../store/auth.store'

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user)

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <h1 className="text-2xl font-semibold">Welcome to QA Platform</h1>
      {user && (
        <p className="mt-2 text-slate-400">
          Signed in as <span className="text-slate-200">{user.name}</span>
        </p>
      )}
    </div>
  )
}
