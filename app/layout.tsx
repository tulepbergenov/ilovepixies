import "@/_app/styles/index.css";
import { appTitle } from "@/_shared/lib";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: appTitle(),
  description: "Full-Stack Developer",
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
    <html lang="en" className="h-full !scroll-smooth">
      <body className="rendering-speed h-full bg-white text-base font-normal text-black antialiased">
        <div className="flex min-h-full flex-col overflow-hidden">
          <main id="main" className="flex-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
