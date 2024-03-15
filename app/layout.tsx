import "@/_app/styles/index.css";
import { appTitle } from "@/_shared/lib";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: appTitle(),
  description: "Full-Stack Developer",
};

export const viewport: Viewport = {
  themeColor: "#000",
  colorScheme: "dark light",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <main id="main">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
