import { cn } from "@/utils";
import { forwardRef } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  items: { label: string; value: string }[];
  value?: string;
  placeholder?: string;
  isInvalid?: boolean;
}

// @ToDo: Add variants and size props, This is a basic component without Radix Select due to the Radix component need more tweaks to work and time constraints
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ placeholder, items, isInvalid, ...props }, ref) => {
    return (
      <select
        className={cn(
          "flex h-10 flex-1 items-center justify-center rounded-md border border-gray-300 bg-gray-50 p-2.5 font-medium transition-colors focus:border-blue-500 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50",
          {
            "border-red-500 bg-red-50 focus:border-red-500 focus-visible:ring-red-500":
              isInvalid,
          },
        )}
        ref={ref}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {items?.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    );
  },
);

Select.displayName = "Select";

export { Select };
