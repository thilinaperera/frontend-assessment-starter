import { TasksProvider } from "@/providers/task-provider";
import { CreateTask } from "./create-task";
import { TaskList } from "./task-list";
import { TaskProgress } from "./task-progress";

export const TaskDashboard = () => {
  return (
    <TasksProvider>
      <div className="m-auto flex max-w-xl flex-col gap-8 rounded-lg bg-gray-100 p-6">
        <TaskProgress />
        <CreateTask />
        <TaskList />
      </div>
    </TasksProvider>
  );
};
