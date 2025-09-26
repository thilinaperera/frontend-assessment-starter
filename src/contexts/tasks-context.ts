import { Task, TaskFormData } from "@/types";
import { createContext } from "react";

interface TasksContextType {
  tasks: Task[];
  addTask: (task: TaskFormData) => void;
  removeTask: (id: string) => void;
  toggleTaskCompletion: (id: string) => void;
}
export const TaskContext = createContext<TasksContextType | undefined>(
  undefined,
);
