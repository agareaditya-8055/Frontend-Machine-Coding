import { useContext } from 'react';
import { ActionQueueContext } from '../queue/ActionQueueProvider';

export function useActionQueue() {
  const ctx = useContext(ActionQueueContext);
  if (!ctx) throw new Error('Outside provider');
  return ctx;
}
