import type { LucideIcon } from 'lucide-react'

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  action?: React.ReactNode
}

export default function EmptyState({
  icon: Icon,
  title,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-700 py-20 text-center">
      <Icon size={36} className="mb-4 text-gray-600" />
      <p className="mb-4 text-gray-400">{title}</p>
      {action}
    </div>
  )
}
