import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 p-4">
      <Image src="/icon_light.svg" alt="stormej-live" width={80} height={80} />
      <div className={cn("flex flex-col items-center", font.className)}>
        <p className="text-xl font-semibold">stormejislive</p>
        <p className="text-sm text-muted-foreground">Let&apos;s Cook</p>
      </div>
    </div>
  );
};
