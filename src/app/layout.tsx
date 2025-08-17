// src/app/layout.tsx
import "../globals.css";
import { Providers } from "../providers";
import ThemeClient from "./theme-client";
import NavBar from "../components/NavBar";

export const metadata = {
  title: "Verbly Platform",
  description: "Learn communication skills — Verbly",
};

import { NextUIProvider } from "@nextui-org/react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NextUIProvider>
            <ThemeClient />
            <NavBar />
            <main className="pt-16">{children}</main>
          </NextUIProvider>
        </Providers>
      </body>
    </html>
  );
}
