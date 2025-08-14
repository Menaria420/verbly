"use client";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav
      className="shadow-lg"
      style={{
        backgroundColor: "var(--color-primary)",
        color: "white",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-2xl tracking-wide"
          style={{ color: "white" }}
        >
          Verbly
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-6 font-medium">
          <Link href="/courses">Courses</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>

          {session?.user ? (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <button
                onClick={() => signOut()}
                className="btn btn-primary"
                style={{
                  backgroundColor: "var(--color-secondary)",
                  color: "white",
                }}
              >
                Sign out
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="btn btn-primary"
              style={{
                backgroundColor: "var(--color-secondary)",
                color: "white",
              }}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
