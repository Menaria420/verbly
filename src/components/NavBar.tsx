"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
// @ts-expect-error
import { themes } from "../theme"; // your theme.js
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/react";

export default function NavBar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light"); // ✅ Start with light
  const pathName = usePathname();
  // Apply theme colors to CSS variables
  useEffect(() => {
    const root = document.documentElement;
    const currentTheme = themes[theme];
    Object.entries(currentTheme).forEach(([key, value]: any) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [theme]);
  const pathname = usePathname();
  return (
    <nav className="navbar shadow-lg sticky top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-2xl tracking-wide"
          style={{ color: "var(--textLight)" }}
        >
          Verbly
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          {session?.user ? (
            <>
              <Link href="/courses">
                <p className={pathname == "/courses" ? `text-blue-400` : ""}>
                  Courses
                </p>
              </Link>
              <Link href="/about">
                <p className={pathname == "/about" ? `text-blue-400` : ""}>
                  About
                </p>
              </Link>
              <Link href="/blog">
                <p className={pathname == "/blog" ? `text-blue-400` : ""}>
                  Blog
                </p>
              </Link>

              <Link href="/dashboard">
                <p className={pathname == "/dashboard" ? `text-blue-400` : ""}>
                  Dashboard
                </p>
              </Link>
              <Button className=" btn_dark" onClick={() => signOut()}>
                Sign out
              </Button>
            </>
          ) : (
            <>
              {pathName != "/login" && (
                <Link href="/login" className="px-4 py-2 btn_dark">
                  Login
                </Link>
              )}
            </>
          )}

          {/* Theme Toggle */}
          <Button
            onPress={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
            className=" rounded-md "
            style={{
              borderColor: "white",
              color: "white",
            }}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          title="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col space-y-1"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden flex flex-col space-y-4 p-4"
          style={{ backgroundColor: "var(--color-secondary)" }}
        >
          <Link href="/courses" onClick={() => setMenuOpen(false)}>
            Courses
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>

          {session?.user ? (
            <>
              <Link href="/dashboard" onClick={() => setMenuOpen(false)}>
                Dashboard
              </Link>
              <button
                onClick={() => {
                  signOut();
                  setMenuOpen(false);
                }}
                className="px-4 py-2 rounded-md"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                }}
              >
                Sign out
              </button>
            </>
          ) : (
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded-md"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "white",
              }}
            >
              Login
            </Link>
          )}

          {/* Theme Toggle Mobile */}
          <button
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
            className="px-3 py-1 rounded-md border mt-2"
            style={{
              borderColor: "white",
              color: "white",
            }}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      )}
    </nav>
  );
}
