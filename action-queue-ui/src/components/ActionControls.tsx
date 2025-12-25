import { useActionQueue } from '../hooks/useActionQueue';
import { generateId } from '../utils/id';
import { sleep } from '../utils/sleep';

export function ActionControls() {
  const { addAction, tick } = useActionQueue();

  const addSerialAction = () => {
    addAction({
      id: generateId(),
      label: 'Sync Orders',
      status: 'queued',
      retryCount: 0,
      maxRetries: 2,
      cancelled: false,
      runInParallel: false,
      execute: () => sleep(1500),
    });
  };

  const addParallelAction = () => {
    addAction({
      id: generateId(),
      label: 'Refresh Cache',
      status: 'queued',
      retryCount: 0,
      maxRetries: 1,
      cancelled: false,
      runInParallel: true,
      execute: () => sleep(800),
    });
  };

  return (
    <div className="sticky top-4 bg-white border rounded-lg shadow-sm p-4 flex flex-wrap gap-3">
      <button
        onClick={addSerialAction}
        className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 transition"
      >
        Add Serial Action
      </button>

      <button
        onClick={addParallelAction}
        className="px-4 py-2 rounded-md text-sm font-medium bg-gray-800 text-white hover:bg-gray-700 transition"
      >
        Add Parallel Action
      </button>

      <button
        onClick={tick}
        className="px-4 py-2 rounded-md text-sm font-medium bg-green-600 text-white hover:bg-green-500 transition"
      >
        Run Queue
      </button>
    </div>
  );
}
