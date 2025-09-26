import { useTasks } from "@/hooks/use-tasks";
import { TaskItem } from "./task-item";
import { Task } from "@/types";
import { AnimatePresence, motion } from "framer-motion";

export const TaskList = () => {
  const { tasks } = useTasks();
  return (
    <div className="flex flex-col gap-4">
      <AnimatePresence>
        {tasks.map((task: Task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TaskItem task={task} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
