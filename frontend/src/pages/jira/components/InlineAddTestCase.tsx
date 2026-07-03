import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'
import { Plus, X } from 'lucide-react'
import api from '../../../api/client'
import { invalidateQaData } from '../../../lib/invalidateQaData'
import type { ApiResponse, TestCase } from '../../../types'

const TYPE_OPTIONS: { value: TestCase['type']; labelKey: string }[] = [
  { value: 'MANUAL', labelKey: 'testCases.methods.manual' },
  { value: 'E2E', labelKey: 'testCases.methods.e2e' },
  { value: 'API', labelKey: 'testCases.methods.api' },
  { value: 'UNIT', labelKey: 'testCases.methods.unit' },
  { value: 'PERFORMANCE', labelKey: 'testCases.methods.performance' },
]

interface InlineAddTestCaseProps {
  projectId: string
  jiraTaskId: string
  platform: TestCase['platform']
  nextSequence: number
}

export default function InlineAddTestCase({
  projectId,
  jiraTaskId,
  platform,
  nextSequence,
}: InlineAddTestCaseProps) {
  const { t } = useTranslation()
  const queryClient = useQueryClient()
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [type, setType] = useState<TestCase['type']>('MANUAL')
  const [steps, setSteps] = useState('')
  const [expectedResult, setExpectedResult] = useState('')

  const reset = () => {
    setTitle('')
    setType('MANUAL')
    setSteps('')
    setExpectedResult('')
  }

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      api.post<ApiResponse<TestCase>>('/test-cases', {
        projectId,
        jiraTaskId,
        title,
        type,
        steps,
        expectedResult,
        platform,
        priority: 'MEDIUM',
      }),
    onSuccess: () => {
      invalidateQaData(queryClient)
      toast.success(t('testCases.testCaseCreated'))
      reset()
      setIsOpen(false)
    },
    onError: (error: any) => {
      const message =
        error.response?.data?.message ?? t('testCases.createFailed')
      toast.error(Array.isArray(message) ? message[0] : message)
    },
  })

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-gray-700 px-3 py-2.5 text-sm font-semibold text-gray-300 hover:border-indigo-500 hover:text-white"
      >
        <Plus size={16} />
        {t('jira.addNewTestCase')}
      </button>
    )
  }

  return (
    <div className="mt-4 rounded-xl border border-gray-700 bg-gray-900 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">
          {t('jira.addNewTestCase')}
        </h3>
        <button
          type="button"
          onClick={() => {
            reset()
            setIsOpen(false)
          }}
          aria-label={t('common.close')}
          className="rounded-lg p-1 text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          <X size={16} />
        </button>
      </div>

      <p className="mb-3 text-xs text-gray-500">
        {t('jira.nextIdPreview', {
          id: `TC-${String(nextSequence).padStart(3, '0')}`,
        })}
      </p>

      <div className="space-y-3">
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-400">
            {t('testCases.testCaseTitle')}
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-gray-400">
            {t('testCases.testMethod')}
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as TestCase['type'])}
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          >
            {TYPE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {t(option.labelKey)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-gray-400">
            {t('testCases.steps')}
          </label>
          <textarea
            rows={3}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full resize-none rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-gray-400">
            {t('testCases.expectedResult')}
          </label>
          <textarea
            rows={2}
            value={expectedResult}
            onChange={(e) => setExpectedResult(e.target.value)}
            className="w-full resize-none rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <button
          type="button"
          disabled={isPending || !title.trim() || !steps.trim() || !expectedResult.trim()}
          onClick={() => mutate()}
          className="w-full rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? t('common.saving') : t('common.save')}
        </button>
      </div>
    </div>
  )
}
