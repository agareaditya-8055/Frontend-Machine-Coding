import type { Action } from "../types/action";
import type { QueueState } from "../types/queue";

export function getNextRunnableActions(state: QueueState): Action[] {
  return state.actions.filter(action => {
    if (action.status !== 'queued') return false;
    if (action.cancelled) return false;

    if (action.dependsOn) {
      const dep = state.actions.find(a => a.id === action.dependsOn);
      if (!dep || dep.status !== 'completed') return false;
    }

    if (!action.runInParallel && state.runningIds.size > 0) {
      return false;
    }

    return true;
  });
}
