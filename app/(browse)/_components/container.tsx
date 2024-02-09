"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/user-sidebar";
import { on } from "events";
import { use, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);

  const matches = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    if (matches) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [matches]);

  return (
    <>
      <div
        className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}
      >
        {children}
      </div>
    </>
  );
};
