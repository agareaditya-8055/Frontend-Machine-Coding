import { ActionControls } from "./components/ActionControls";
import { ActionList } from "./components/ActionList";
import { ActionQueueProvider } from "./queue/ActionQueueProvider";


export default function App() {
  return (
    <ActionQueueProvider>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <header>
            <h1 className="text-2xl font-semibold text-gray-900">
              Action Orchestration Console
            </h1>
            <p className="text-sm text-gray-500">
              Manage and execute client-side operations safely
            </p>
          </header>

          <ActionControls />
          <ActionList />
        </div>
      </div>
    </ActionQueueProvider>
  );
}
