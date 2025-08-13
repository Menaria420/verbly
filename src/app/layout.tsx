import "../globals.css";
import React from "react";
import { Providers } from "../providers";

export const metadata = {
  title: "Verbly Platform",
  description: "Learn communication skills — Verbly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
