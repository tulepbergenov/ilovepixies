"use client";

import { ILayout } from "@/_shared/types";
import { ThemeProvider as NextThemesThemeProvider } from "next-themes";

export const ThemeProvider = ({ children }: ILayout) => {
  return (
    <NextThemesThemeProvider attribute="data-theme">
      {children}
    </NextThemesThemeProvider>
  );
};
