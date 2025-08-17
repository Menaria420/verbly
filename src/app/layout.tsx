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
import { AlertProvider } from "../components/AlertProvider";
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
            <AlertProvider>
              <ThemeClient />
              <NavBar />
              <main className="pt-16">{children}</main>
            </AlertProvider>
          </NextUIProvider>
        </Providers>
      </body>
    </html>
  );
}
