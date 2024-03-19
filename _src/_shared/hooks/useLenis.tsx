"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return () => cancelAnimationFrame(raf as any);
  }, []);
};
