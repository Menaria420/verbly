// src/app/layout.tsx
import "../globals.css";
import { Providers } from "../providers";
import ThemeClient from "./theme-client";
import NavBar from "../components/NavBar";

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
      <body>
        <Providers>
          <ThemeClient />
          <NavBar />
          <main className="pt-16">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
