import { useTasks } from "@/hooks/use-tasks";

export const TaskProgress = () => {
  const { tasks } = useTasks();

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="flex justify-between">
      <h3 className="font-bold">Tasks</h3>
      <div className="font-normal">
        {`${completedTasks}/${totalTasks}`} completed
      </div>
    </div>
  );
};
