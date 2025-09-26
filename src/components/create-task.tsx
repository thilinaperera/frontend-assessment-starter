import { useTasks } from "@/hooks/use-tasks";
import { Input } from "./ui/input";
import { Select } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { ChangeEvent, FormEvent, useMemo, useRef, useState } from "react";
import { TaskFormData } from "@/types";
import { Button } from "./ui/button";

export const CreateTask = () => {
  const { addTask } = useTasks();
  const formRef = useRef<HTMLFormElement>(null);

  const [inputValues, setInputValues] = useState<Partial<TaskFormData>>({
    title: "",
    priority: undefined,
    dueDate: undefined,
    description: "",
  });

  const [errors, setErrors] = useState<
    Record<keyof typeof inputValues, boolean>
  >({
    title: false,
    priority: false,
    dueDate: false,
    description: false,
  });

  const onInputChange = (
    value: string,
    fieldName: keyof typeof inputValues,
  ) => {
    setInputValues({
      ...inputValues,
      [fieldName]: value,
    });
  };

  const validators = useMemo(() => {
    return {
      title: () => !!inputValues.title,
      priority: () => !!inputValues.priority,
      dueDate: () => {
        // should be a future date
        if (!inputValues.dueDate) return false;
        const dueDate = new Date(inputValues.dueDate);
        const now = new Date();
        return dueDate > now;
      },
      description: () => true, // optional
    };
  }, [inputValues]);

  const validate = () => {
    let hasError = false;
    const errorValues = {} as Record<keyof typeof errors, boolean>;
    Object.keys(inputValues).forEach((key) => {
      const isValid = validators[key as keyof typeof validators]();
      if (!isValid) hasError = true;
      errorValues[key as keyof typeof errors] = !isValid;
    });
    setErrors(errorValues);
    return !hasError;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      addTask(inputValues as TaskFormData);
      formRef.current?.reset();
      setInputValues({
        title: "",
        priority: undefined,
        dueDate: undefined,
        description: "",
      });
      setErrors({
        title: false,
        priority: false,
        dueDate: false,
        description: false,
      });
    }
  };

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <Input
          isInvalid={errors.title}
          name="title"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onInputChange(e.target.value, "title")
          }
          placeholder="Title"
          aria-label="Task Title"
        />
        <div className="flex w-full flex-col gap-4 sm:flex-row">
          <Select
            isInvalid={errors.priority}
            items={[
              { label: "Low", value: "low" },
              { label: "Medium", value: "medium" },
              { label: "High", value: "high" },
            ]}
            placeholder="Priority"
            aria-label="Priority"
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              onInputChange(e.currentTarget.value, "priority")
            }
          />
          <Input
            isInvalid={errors.dueDate}
            type="date"
            aria-label="Due Date"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onInputChange(e.target.value, "dueDate")
            }
          />
        </div>
        <Textarea
          isInvalid={errors.description}
          aria-label="Task Description"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            onInputChange(e.target.value, "description")
          }
        />
        <Button type="submit">Add Task</Button>
      </div>
    </form>
  );
};
