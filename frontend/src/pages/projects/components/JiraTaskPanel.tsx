import { ExternalLink, X } from 'lucide-react'
import { jiraStatusBadgeClass } from '../../../lib/badges'
import { formatRelativeTime } from '../../../lib/formatRelativeTime'
import type { JiraTask } from '../../../types'

interface JiraTaskPanelProps {
  task: JiraTask
  onClose: () => void
}

export default function JiraTaskPanel({ task, onClose }: JiraTaskPanelProps) {
  return (
    <div className="fixed inset-0 z-40 flex justify-end">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative flex h-full w-full max-w-md flex-col border-l border-gray-700 bg-gray-800 p-6 shadow-2xl">
        <div className="mb-6 flex items-start justify-between">
          <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-2 py-0.5 text-xs font-medium text-indigo-400 border border-indigo-500/30">
            {task.jiraKey}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-1 text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <h2 className="mb-6 text-lg font-semibold text-white">
          {task.title}
        </h2>

        <dl className="space-y-4 text-sm">
          <div>
            <dt className="mb-1 text-gray-500">Status</dt>
            <dd>
              <span
                className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${jiraStatusBadgeClass(task.currentStatus)}`}
              >
                {task.currentStatus ?? 'Unknown'}
              </span>
            </dd>
          </div>

          <div>
            <dt className="mb-1 text-gray-500">Assignee</dt>
            <dd className="text-gray-300">
              {task.currentAssignee ?? 'Unassigned'}
            </dd>
          </div>

          <div>
            <dt className="mb-1 text-gray-500">Last Updated</dt>
            <dd className="text-gray-300">
              {formatRelativeTime(task.jiraUpdatedAt)}
            </dd>
          </div>

          {task.jiraUrl && (
            <div>
              <dt className="mb-1 text-gray-500">Jira Link</dt>
              <dd>
                <a
                  href={task.jiraUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300"
                >
                  Open in Jira
                  <ExternalLink size={14} />
                </a>
              </dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  )
}
