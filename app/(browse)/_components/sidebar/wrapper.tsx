"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useSidebar((state) => state);

  return (
    <>
      <aside
        className={cn(
          "fixed left-0 flex flex-col w-60 h-full bg-[#17191F] border-r border-neutral-500 z-50 rounded-xl",
          collapsed && "w-[70px]"
        )}
      >
        {children}
      </aside>
    </>
  );
};
