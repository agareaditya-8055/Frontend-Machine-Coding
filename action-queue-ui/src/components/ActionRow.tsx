
import { useActionQueue } from '../hooks/useActionQueue';
import type { Action } from '../types/action';

const statusClassMap: Record<Action['status'], string> = {
  queued: 'bg-gray-100 text-gray-700',
  running: 'bg-blue-100 text-blue-700 animate-pulse',
  completed: 'bg-green-100 text-green-700',
  failed: 'bg-red-100 text-red-700',
  cancelled: 'bg-gray-200 text-gray-500',
};

export function ActionRow({ action }: { action: Action }) {
  const { cancelAction } = useActionQueue();

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex flex-col">
        <span className="font-medium text-gray-900">
          {action.label}
        </span>

        <span className="text-xs text-gray-500">
          Retries {action.retryCount}/{action.maxRetries} •{' '}
          {action.runInParallel ? 'Parallel' : 'Serial'}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span
          className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusClassMap[action.status]}`}
        >
          {action.status}
        </span>

        {action.status === 'queued' && (
          <button
            onClick={() => cancelAction(action.id)}
            className="text-xs font-medium text-red-600 hover:text-red-500 transition"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
