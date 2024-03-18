import { Providers } from "@/_app/providers";
import "@/_app/styles/index.css";
import { appTitle } from "@/_shared/lib";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: appTitle(),
  description: "Full-Stack Developer",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_META_CANONICAL,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark light",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en" className="!h-full" suppressHydrationWarning>
      <body className="!h-full bg-white text-base font-normal text-black antialiased rendering-speed dark:bg-black dark:text-white">
        <Providers>
          <main id="main" className="flex-auto">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
