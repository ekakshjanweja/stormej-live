import { currentUser } from "@clerk/nextjs";
import { Actions } from "./actions";
import { Logo } from "./logo";

export const Navbar = async () => {
  const self = await currentUser();
  return (
    <>
      <div className="fixed top-0 w-full h-20 z-[49] bg-[#2C2E36] px-2 lg:px-4 flex justify-between items-center shadow-sm">
        <Logo />
        <div className="text-muted-foreground">Welcome, {self?.username}!</div>
        <Actions />
      </div>
    </>
  );
};
