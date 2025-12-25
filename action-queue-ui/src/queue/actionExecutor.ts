import type { Action } from "../types/action";

export async function executeAction(action: Action) {
  if (action.cancelled) return;
  await action.execute();
}
