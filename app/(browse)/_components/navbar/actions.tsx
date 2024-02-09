import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { Clapperboard } from "lucide-react";

export const Actions = async () => {
  const user = await currentUser();
  return (
    <>
      <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
        {!user && (
          <SignInButton>
            <Button
            variant="primary">Login</Button>
          </SignInButton>
        )}
        {!!user && (
          <div className="flex items-center gap-x-4">
            <Button
              size="sm"
              value="ghost"
              className="text-muted-foreground hover:bg-[#111217] bg-[#111217] hover:opacity-75"
            >
              <Link href={`/u/${user.username}`} className="flex">
                <Clapperboard className="h-5 w-5 lg:mr-2" />
                <span className="hidden lg:block">Dashboard</span>
              </Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </div>
        )}
      </div>
    </>
  );
};
