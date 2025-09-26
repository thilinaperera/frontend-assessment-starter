import { TaskContext } from "@/contexts/tasks-context";
import { useContext } from "react";

export const useTasks = () => {
  const tasksContextValue = useContext(TaskContext);
  if (!tasksContextValue) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  const tasks = tasksContextValue.tasks.sort((a, b) => {
    const createdAtA = new Date(a.createdAt).getTime();
    const createdAtB = new Date(b.createdAt).getTime();
    return createdAtB - createdAtA; // Newest first
  });

  return {
    tasks,
    addTask: tasksContextValue.addTask,
    removeTask: tasksContextValue.removeTask,
    toggleTaskCompletion: tasksContextValue.toggleTaskCompletion,
  };
};
