import { Task } from "@/types";
import { PriorityBadge } from "./priority-badge";
import { Checkbox } from "./ui/checkbox";
import { Trash2 } from "lucide-react";
import { ConfirmationDialog } from "./confirmation-dialog";
import { useState } from "react";
import { useTasks } from "@/hooks/use-tasks";
import { cn } from "@/utils";

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const { removeTask, toggleTaskCompletion } = useTasks();

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    removeTask(task.id);
    setShowConfirmation(false);
  };

  const handleToggleCompletion = () => {
    toggleTaskCompletion(task.id);
  };

  return (
    <div
      className={cn(
        "flex flex-1 flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm",
        {
          "opacity-75": task.completed,
        },
      )}
    >
      <div className="mr-4 flex items-start">
        <div className="mt-1 flex items-start">
          <Checkbox
            checked={task.completed}
            onCheckedChange={handleToggleCompletion}
          />
        </div>
        <div className="flex flex-1 flex-col justify-start px-4">
          <div className="flex justify-between gap-2 text-gray-700">
            <span
              className={cn("font-bold", { "line-through": task.completed })}
            >
              {task.title}
            </span>
            <span>
              <PriorityBadge priority={task.priority} />
            </span>
          </div>

          {task.description && (
            <span className="mt-2 flex flex-1 text-left text-sm text-gray-600">
              {task.description}
            </span>
          )}
        </div>
        <div>
          <button
            onClick={handleDeleteClick}
            className="text-gray-500 hover:bg-gray-100 hover:text-red-600"
          >
            <Trash2 size="18px" />
          </button>
        </div>
      </div>
      {task.dueDate && (
        <span className="mt-2 flex self-end text-xs text-gray-500">
          Due {new Intl.DateTimeFormat().format(new Date(task.dueDate))}
        </span>
      )}
      <ConfirmationDialog
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleConfirmDelete}
        open={showConfirmation}
      />
    </div>
  );
};

TaskItem.displayName = "TaskItem";
