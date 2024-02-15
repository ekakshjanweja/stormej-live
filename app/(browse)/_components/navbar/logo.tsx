import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center">
        <div className="items-center gap-x-4 hover:opacity-75 transition">
          <Image
            src="/icon_light.svg"
            alt="stormej-live"
            width={32}
            height={32}
          />
        </div>
        <div className={cn("hidden md:flex md:pl-4", font.className)}>
          <div className="flex-col">
            <p className="text-lg font-semibold">stormej.live</p>
            <p className="text-sm text-muted-foreground">Let&apos;s Cook</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

{
  /* <div className="flex flex-col items-center gap-y-4 p-4">
        <Image
          src="/icon_light.svg"
          alt="stormej-live"
          width={40}
          height={40}
        />
        <div className={cn("flex flex-col items-center", font.className)}>
          <p className="text-xl font-semibold">stormej.live</p>
          <p className="text-sm text-muted-foreground">Let&apos;s Cook</p>
        </div>
      </div> */
}
