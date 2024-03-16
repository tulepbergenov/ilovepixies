"use client";

import { useLenis } from "@/_shared/hooks";
import { ILayout } from "@/_shared/types";
import { usePathname } from "next/navigation";

export const ScrollTransitionProvider = ({ children }: ILayout) => {
  const pathname = usePathname();

  useLenis();

  return (
    <div key={pathname} className="flex min-h-full flex-col overflow-hidden">
      {children}
    </div>
  );
};
