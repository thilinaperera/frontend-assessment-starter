import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

interface CheckboxProps {
  checked: boolean;
  onCheckedChange?: (checked: boolean | "indeterminate") => void;
}

// @ToDo: Add variants and size props
const Checkbox = ({ checked, onCheckedChange }: CheckboxProps) => {
  return (
    <RadixCheckbox.Root
      className="flex size-[20px] appearance-none items-center justify-center rounded border border-solid border-blue-600 bg-blue-600 text-white hover:bg-blue-700 data-[state=unchecked]:border-gray-300 data-[state=unchecked]:bg-gray-50"
      checked={checked}
      onCheckedChange={(state) => onCheckedChange && onCheckedChange(state)}
    >
      <RadixCheckbox.Indicator>
        <Check className="size-[14px]" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
};

Checkbox.displayName = "Checkbox";

export { Checkbox };
