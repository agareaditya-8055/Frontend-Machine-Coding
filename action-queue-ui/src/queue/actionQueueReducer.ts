import type { Action } from "../types/action";
import type { QueueState } from "../types/queue";


type Event =
  | { type: 'ADD'; action: Action }
  | { type: 'START'; id: string }
  | { type: 'COMPLETE'; id: string }
  | { type: 'FAIL'; id: string }
  | { type: 'CANCEL'; id: string };

export function actionQueueReducer(
  state: QueueState,
  event: Event
): QueueState {
  switch (event.type) {
    case 'ADD':
      return {
        ...state,
        actions: [...state.actions, event.action],
      };

    case 'START':
      return {
        ...state,
        runningIds: new Set([...state.runningIds, event.id]),
        actions: state.actions.map(a =>
          a.id === event.id ? { ...a, status: 'running' } : a
        ),
      };

    case 'COMPLETE':
      return {
        ...state,
        runningIds: new Set(
          [...state.runningIds].filter(id => id !== event.id)
        ),
        actions: state.actions.map(a =>
          a.id === event.id ? { ...a, status: 'completed' } : a
        ),
      };

    case 'FAIL':
      return {
        ...state,
        runningIds: new Set(
          [...state.runningIds].filter(id => id !== event.id)
        ),
        actions: state.actions.map(a =>
          a.id === event.id
            ? { ...a, status: 'failed', retryCount: a.retryCount + 1 }
            : a
        ),
      };

    case 'CANCEL':
      return {
        ...state,
        actions: state.actions.map(a =>
          a.id === event.id
            ? { ...a, cancelled: true, status: 'cancelled' }
            : a
        ),
      };

    default:
      return state;
  }
}
