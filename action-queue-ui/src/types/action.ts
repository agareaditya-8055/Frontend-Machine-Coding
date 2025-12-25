export type ActionStatus =
  | 'queued'
  | 'running'
  | 'completed'
  | 'failed'
  | 'cancelled';

export type Action = {
  id: string;
  label: string;
  status: ActionStatus;
  runInParallel: boolean;
  dependsOn?: string;
  retryCount: number;
  maxRetries: number;
  cancelled: boolean;
  execute: () => Promise<void>;
};
