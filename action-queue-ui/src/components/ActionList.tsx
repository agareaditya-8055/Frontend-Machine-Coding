import { useActionQueue } from '../hooks/useActionQueue';
import { ActionRow } from './ActionRow';

export function ActionList() {
  const { state } = useActionQueue();

  if (state.actions.length === 0) {
    return (
      <div className="bg-white border rounded-lg p-6 text-center text-gray-500">
        No actions queued yet
      </div>
    );
  }

  return (
    <div className="bg-white border rounded-lg divide-y">
      {state.actions.map(action => (
        <ActionRow key={action.id} action={action} />
      ))}
    </div>
  );
}
