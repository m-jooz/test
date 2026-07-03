import { X } from 'lucide-react'

interface SlideOverProps {
  title: string
  onClose: () => void
  children: React.ReactNode
}

export default function SlideOver({ title, onClose, children }: SlideOverProps) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative flex h-full w-full max-w-lg flex-col overflow-y-auto border-s border-gray-700 bg-gray-900 shadow-xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-800 bg-gray-900 px-6 py-4">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-1 text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 px-6 py-5">{children}</div>
      </div>
    </div>
  )
}
