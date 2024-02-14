"use client";

import { useState, useTransition, useRef, ElementRef } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { updateStream } from "@/actions/stream";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { UploadDropzone } from "@/lib/uploadthing";
import { Hint } from "../hint";
import { Trash } from "lucide-react";
import Image from "next/image";

interface InfoModalProps {
  initialName: string;
  initialThumbnailUrl: string | null;
}

export const InfoModal = ({
  initialName,
  initialThumbnailUrl,
}: InfoModalProps) => {
  const [name, setName] = useState(initialName);
  const [isPending, startTransition] = useTransition();
  const closeRef = useRef<ElementRef<"button">>(null);

  const [thumbnailUrl, setThumbnailUrl] = useState(initialThumbnailUrl);

  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(() => {
      updateStream({ name })
        .then(() => {
          toast.success("Stream info updated");
          closeRef.current?.click();
        })
        .catch(() => toast.error("Failed to update stream info"));
    });
  };

  const onRemove = () => {
    startTransition(() => {
      updateStream({ thumbnailUrl: null })
        .then(() => {
          toast.success("Thumbnail removed");
          setThumbnailUrl("");
          closeRef.current?.click();
        })
        .catch(() => toast.error("Failed to remove thumbnail"));
    });
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link" size="sm" className="ml-auto">
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit stream info</DialogTitle>
          </DialogHeader>
          <form onSubmit={onSubmit} className="space-y-14">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                disabled={isPending}
                placeholder="Stream name"
                onChange={onChange}
                value={name}
              />
            </div>
            <div className="space-y-2">
              <Label>Thumbnail</Label>
              {thumbnailUrl ? (
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                  <div className="absolute top-2 right-2 z-[10]">
                    <Hint label="Remove thumbnail" asChild side="left">
                      <Button
                        type="button"
                        disabled={isPending}
                        onClick={onRemove}
                        className="h-auto w-auto p-1.5"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </Hint>
                  </div>
                  <Image
                    alt="Thumbnail"
                    src={thumbnailUrl}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="rounded-xl border outline-dashed outline-muted">
                  <UploadDropzone
                    endpoint="thumbnailUploader"
                    appearance={{
                      label: {
                        color: "#FFFFFF",
                      },
                      allowedContent: {
                        color: "#FFFFFF",
                      },
                    }}
                    onClientUploadComplete={(res) => {
                      setThumbnailUrl(res?.[0]?.url);
                      router.refresh();
                      closeRef?.current?.click();
                    }}
                  />
                </div>
              )}
            </div>
            <div className="flex justify-between">
              <DialogClose ref={closeRef} asChild>
                <Button type="button" variant="ghost">
                  Cancel
                </Button>
              </DialogClose>
              <Button disabled={isPending} variant="primary" type="submit">
                Save
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
