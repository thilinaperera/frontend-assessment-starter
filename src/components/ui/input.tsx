import { cn } from "@/utils";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean;
}

// @ToDo: Add variants and size props, This is a basic component.
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isInvalid, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 rounded-md border border-gray-300 bg-gray-50 p-2.5 font-medium transition-colors focus:border-blue-500 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
          {
            "border-red-500 bg-red-50 focus:border-red-500 focus-visible:ring-red-500":
              isInvalid,
          },
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
