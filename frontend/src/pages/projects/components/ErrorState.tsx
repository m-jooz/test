import { AlertTriangle } from 'lucide-react'

interface ErrorStateProps {
  message?: string
  onRetry: () => void
}

export default function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-red-900/50 py-20 text-center">
      <AlertTriangle size={36} className="mb-4 text-red-500" />
      <p className="mb-4 text-gray-400">
        {message ?? 'Something went wrong while loading this data.'}
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
      >
        Retry
      </button>
    </div>
  )
}
