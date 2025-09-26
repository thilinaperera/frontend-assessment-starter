import { cn } from "@/utils";

interface PriorityBadgeProps {
  priority: "low" | "medium" | "high";
}

export const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-block rounded-full px-2 py-1 text-xs font-semibold capitalize text-gray-800",
        {
          "bg-red-300 text-red-800": priority === "high",
          "bg-yellow-300 text-yellow-800": priority === "medium",
          "bg-green-300 text-green-800": priority === "low",
        },
      )}
    >
      {priority}
    </div>
  );
};
