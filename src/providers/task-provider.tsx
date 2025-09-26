import { TaskContext } from "@/contexts/tasks-context";
import { useStorage } from "@/hooks/use-storage";
import { Task, TaskFormData } from "@/types";
import { PropsWithChildren, useEffect, useState } from "react";

export const TasksProvider = ({ children }: PropsWithChildren) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { getFromStorage, saveToStorage } = useStorage();

  useEffect(() => {
    const storedTasks = getFromStorage("tasks");
    storedTasks && setTasks(storedTasks);
  }, []);

  const addTask = (task: TaskFormData) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: task.title,
      priority: task.priority,
      dueDate: task.dueDate,
      description: task.description,
      completed: false,
      createdAt: new Date(),
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveToStorage("tasks", updatedTasks);
  };

  const removeTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveToStorage("tasks", updatedTasks);
  };

  const toggleTaskCompletion = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );
    setTasks(updatedTasks);
    saveToStorage("tasks", updatedTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        toggleTaskCompletion,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
