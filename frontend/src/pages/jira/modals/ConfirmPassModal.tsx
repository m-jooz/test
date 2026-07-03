import { useTranslation } from 'react-i18next'

interface ConfirmPassModalProps {
  testCount: number
  comment: string
  isPending: boolean
  onConfirm: () => void
  onCancel: () => void
}

export default function ConfirmPassModal({
  testCount,
  comment,
  isPending,
  onConfirm,
  onCancel,
}: ConfirmPassModalProps) {
  const { t } = useTranslation()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-gray-800 p-6 shadow-xl">
        <h2 className="mb-2 text-lg font-semibold text-white">
          {t('jira.allPassedTitle', { count: testCount })}
        </h2>
        <p className="mb-4 text-sm text-gray-400">
          {t('jira.allPassedMessage')}
        </p>
        <div className="mb-6">
          <label className="mb-1 block text-xs font-medium text-gray-500">
            {t('jira.commentPreview')}
          </label>
          <pre className="max-h-48 overflow-y-auto whitespace-pre-wrap rounded-lg border border-gray-700 bg-gray-900 p-3 text-xs text-gray-300">
            {comment}
          </pre>
        </div>
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-300 transition-colors hover:bg-gray-700"
          >
            {t('common.cancel')}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isPending}
            className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? t('common.pleaseWait') : t('jira.submitToJira')}
          </button>
        </div>
      </div>
    </div>
  )
}
