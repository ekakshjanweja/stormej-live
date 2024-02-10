import { cn } from "@/lib/utils";
import exp from "constants";

interface LiveBadgeProps {
  classname?: string;
}

export const LiveBadge = ({ classname }: LiveBadgeProps) => {
  return (
    <div
      className={cn(
        "bg-teal-500 px-1.5 p-0.5 rounded-md uppercase text-[10px] tracking-wide font-semibold border border-background",
        classname
      )}
    >
      Live
    </div>
  );
};
