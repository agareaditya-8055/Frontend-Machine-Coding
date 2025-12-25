import React, { createContext, useReducer, useCallback } from 'react';
import { actionQueueReducer } from './actionQueueReducer';
import { executeAction } from './actionExecutor';
import { getNextRunnableActions } from './queueController';
import type { QueueState } from '../types/queue';
import type { Action } from '../types/action';

type ContextType = {
  state: QueueState;
  addAction: (action: Action) => void;
  cancelAction: (id: string) => void;
  tick: () => void;
};

export const ActionQueueContext = createContext<ContextType | null>(null);

const initialState: QueueState = {
  actions: [],
  runningIds: new Set(),
};

export const ActionQueueProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(actionQueueReducer, initialState);

  const addAction = useCallback((action: Action) => {
    dispatch({ type: 'ADD', action });
  }, []);

  const cancelAction = useCallback((id: string) => {
    dispatch({ type: 'CANCEL', id });
  }, []);

  const tick = useCallback(async () => {
    const runnable = getNextRunnableActions(state);

    for (const action of runnable) {
      dispatch({ type: 'START', id: action.id });

      executeAction(action)
        .then(() => dispatch({ type: 'COMPLETE', id: action.id }))
        .catch(() => dispatch({ type: 'FAIL', id: action.id }));
    }
  }, [state]);

  return (
    <ActionQueueContext.Provider
      value={{ state, addAction, cancelAction, tick }}
    >
      {children}
    </ActionQueueContext.Provider>
  );
};
