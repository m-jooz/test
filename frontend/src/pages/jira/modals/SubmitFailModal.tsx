import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import api from '../../../api/client'
import type { ApiResponse, JiraMember, JiraTransition } from '../../../types'

interface SubmitFailModalProps {
  projectId: string
  taskId: string
  previousAssigneeId: string | null
  previousAssigneeName: string | null
  failedTestTitles: string[]
  initialComment: string
  isPending: boolean
  onClose: () => void
  onSubmit: (payload: {
    jiraAssigneeId?: string
    transitionId: string
    commentOverride: string
  }) => void
}

export default function SubmitFailModal({
  projectId,
  taskId,
  previousAssigneeId,
  previousAssigneeName,
  failedTestTitles,
  initialComment,
  isPending,
  onClose,
  onSubmit,
}: SubmitFailModalProps) {
  const { t } = useTranslation()
  const [assigneeMode, setAssigneeMode] = useState<'auto' | 'manual'>(
    previousAssigneeId ? 'auto' : 'manual',
  )
  const [manualAssigneeId, setManualAssigneeId] = useState('')
  const [transitionId, setTransitionId] = useState('')
  const [comment, setComment] = useState(initialComment)

  useEffect(() => {
    setComment(initialComment)
  }, [initialComment])

  const { data: members } = useQuery({
    queryKey: ['jira-members', projectId],
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<JiraMember[]>>(
        `/jira/${projectId}/members`,
      )
      return data.data
    },
  })

  const { data: transitionsData } = useQuery({
    queryKey: ['jira-task-transitions', projectId, taskId],
    queryFn: async () => {
      const { data } = await api.get<
        ApiResponse<{
          transitions: JiraTransition[]
          suggestedInProgressId: string | null
        }>
      >(`/jira/${projectId}/tasks/${taskId}/transitions`)
      return data.data
    },
  })

  useEffect(() => {
    if (transitionsData?.suggestedInProgressId && !transitionId) {
      setTransitionId(transitionsData.suggestedInProgressId)
    }
  }, [transitionsData, transitionId])

  const handleSubmit = () => {
    if (!transitionId) return
    const jiraAssigneeId =
      assigneeMode === 'auto'
        ? (previousAssigneeId ?? undefined)
        : manualAssigneeId || undefined
    onSubmit({ jiraAssigneeId, transitionId, commentOverride: comment })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-gray-800 p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">
            {t('jira.submitFailure')}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('common.close')}
            className="rounded-lg p-1 text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {failedTestTitles.length > 0 && (
          <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3">
            <p className="mb-1.5 text-xs font-semibold text-red-400">
              {t('jira.failedTestsSummary', { count: failedTestTitles.length })}
            </p>
            <ul className="space-y-0.5 text-xs text-red-300">
              {failedTestTitles.map((title) => (
                <li key={title}>❌ {title}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              {t('jira.reassignTo')}
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-gray-300">
                <input
                  type="radio"
                  checked={assigneeMode === 'auto'}
                  disabled={!previousAssigneeId}
                  onChange={() => setAssigneeMode('auto')}
                  className="h-4 w-4 border-gray-700 bg-gray-900 text-indigo-600 focus:ring-indigo-500"
                />
                {t('jira.autoAssignPrevious')}
                {previousAssigneeName ? `: ${previousAssigneeName}` : t('jira.autoAssignUnavailable')}
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-300">
                <input
                  type="radio"
                  checked={assigneeMode === 'manual'}
                  onChange={() => setAssigneeMode('manual')}
                  className="h-4 w-4 border-gray-700 bg-gray-900 text-indigo-600 focus:ring-indigo-500"
                />
                {t('jira.chooseMember')}
              </label>
            </div>
            {assigneeMode === 'manual' && (
              <div className="mt-2 max-h-40 space-y-1 overflow-y-auto rounded-lg border border-gray-700 bg-gray-900 p-2">
                {members?.length ? (
                  members.map((member) => (
                    <label
                      key={member.accountId}
                      className={`flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-sm ${
                        manualAssigneeId === member.accountId
                          ? 'bg-indigo-600 text-white'
                          : 'text-gray-300 hover:bg-gray-800'
                      }`}
                    >
                      <input
                        type="radio"
                        name="manual-assignee"
                        checked={manualAssigneeId === member.accountId}
                        onChange={() => setManualAssigneeId(member.accountId)}
                        className="sr-only"
                      />
                      {member.avatarUrl ? (
                        <img
                          src={member.avatarUrl}
                          alt=""
                          className="h-6 w-6 flex-shrink-0 rounded-full"
                        />
                      ) : (
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-700 text-[10px] font-semibold text-gray-300">
                          {member.displayName.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                      {member.displayName}
                    </label>
                  ))
                ) : (
                  <p className="px-2 py-1.5 text-xs text-gray-500">
                    {t('jira.selectMember')}
                  </p>
                )}
              </div>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">
              {t('jira.moveStatusTo')}
            </label>
            <select
              value={transitionId}
              onChange={(e) => setTransitionId(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            >
              <option value="">{t('jira.selectStatus')}</option>
              {transitionsData?.transitions.map((transition) => (
                <option key={transition.id} value={transition.id}>
                  {transition.to?.name ?? transition.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">
              {t('jira.commentPreview')}
            </label>
            <textarea
              rows={6}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full resize-none rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-xs text-gray-300 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isPending || !transitionId}
            className="w-full rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? t('common.submitting') : t('jira.submitAndNotify')}
          </button>
        </div>
      </div>
    </div>
  )
}
