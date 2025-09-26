export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  dueDate?: Date;
  createdAt: Date;
}

export type TaskFormData = Omit<Task, "id" | "createdAt" | "completed">;

export type PriorityLevel = Task["priority"];
