import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./ui/button";

interface ConfirmationDialogProps {
  open: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
}
export const ConfirmationDialog = ({
  open,
  onClose,
  onConfirm,
}: ConfirmationDialogProps) => {
  return (
    <Dialog.Root
      open={open}
      onOpenChange={(open: boolean) => {
        onClose && open === false && onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-gray-300/50 data-[state=open]:animate-fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-sm focus:outline-none data-[state=open]:animate-fade-in">
          <Dialog.Title className="m-0 text-[18px] font-bold">
            Are you absolutely sure?
          </Dialog.Title>
          <Dialog.Description className="mt-2">
            This action cannot be undone. This will permanently delete the task.
          </Dialog.Description>

          <div className="mt-2 flex justify-end gap-4">
            <Dialog.Close asChild>
              <Button variant="ghost">Cancel</Button>
            </Dialog.Close>
            <Button
              onClick={() => onConfirm && onConfirm()}
              variant="destructive"
            >
              Delete
            </Button>
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-lg bg-transparent hover:bg-gray-200 focus:outline-none"
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

ConfirmationDialog.displayName = "Button";
