import { useMemo } from "react";
import { Hint } from "../hint";
import { Info } from "lucide-react";

interface ChatInfoProps {
  isChatDelayed: boolean;
  isChatFollowersOnly: boolean;
}

export const ChatInfo = ({
  isChatDelayed,
  isChatFollowersOnly,
}: ChatInfoProps) => {
  const hint = useMemo(() => {
    if (isChatFollowersOnly && !isChatDelayed) {
      return "Followers only";
    }

    if (isChatDelayed && !isChatFollowersOnly) {
      return "Slow Mode";
    }

    if (isChatDelayed && isChatFollowersOnly) {
      return "Chat is followers only. Messages are delayed by 3 seconds";
    }

    return "";
  }, [isChatDelayed, isChatFollowersOnly]);

  const label = useMemo(() => {
    if (isChatFollowersOnly && !isChatDelayed) {
      return "Chat is followers only";
    }

    if (isChatDelayed && !isChatFollowersOnly) {
      return "Messages are delayed by 3 seconds";
    }

    if (isChatDelayed && isChatFollowersOnly) {
      return "Followers only & Slow Mode";
    }

    return "";
  }, [isChatDelayed, isChatFollowersOnly]);

  return (
    <>
      <div className="p-2 text-muted-foreground bg-white/5 border border-white/10 w-full rounded-t-md flex items-center gap-x-2">
        <Hint label={hint}>
          <Info className="h-4 w-4" />
        </Hint>
        <p className="text-xs font-semibold">{label}</p>
      </div>
    </>
  );
};
