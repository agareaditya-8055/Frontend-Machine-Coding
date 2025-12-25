import type { Action } from "./action";

export type QueueState = {
  actions: Action[];
  runningIds: Set<string>;
};
