"use client";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();
  return (
    <nav className="bg-white shadow">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-primary">
          Verbly
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/courses">Courses</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          {session?.user ? (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <button onClick={() => signOut()} className="text-sm">
                Sign out
              </button>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
