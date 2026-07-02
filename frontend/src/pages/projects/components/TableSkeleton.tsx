interface TableSkeletonProps {
  columns: number
  rows?: number
}

export default function TableSkeleton({
  columns,
  rows = 4,
}: TableSkeletonProps) {
  return (
    <div className="animate-pulse overflow-hidden rounded-xl border border-gray-700">
      <div className="grid gap-4 bg-gray-900 px-4 py-3" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
        {Array.from({ length: columns }).map((_, i) => (
          <div key={i} className="h-3 w-2/3 rounded bg-gray-700" />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, r) => (
        <div
          key={r}
          className="grid gap-4 border-t border-gray-700 bg-gray-800 px-4 py-4"
          style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: columns }).map((_, c) => (
            <div key={c} className="h-3 w-3/4 rounded bg-gray-700" />
          ))}
        </div>
      ))}
    </div>
  )
}
