"use client";

import { onUnblock } from "@/actions/block";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

interface UnblockButtonProps {
  userId: string;
}

export const UnblockButton = ({ userId }: UnblockButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((result) => toast.success(`Unblocked ${result.blocked.username}`))
        .catch(() => toast.error("Failed to unblock user"));
    });
  };

  return (
    <>
      <Button
        disabled={isPending}
        onClick={onClick}
        variant="link"
        className="text-blue-500 w-full"
      >
        Unblock
      </Button>
    </>
  );
};
