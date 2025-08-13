"use client";

import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardHome() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const session = await getSession();
      console.log("Session", session);

      // Example: send to backend
      // if (session?.user) {
      //   await fetch("http://localhost:5000/api/auth/custom-login", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(session.user),
      //   });
      // }
    };

    fetchUserData();
  }, []);
  useEffect(() => {
    console.log("status", status);
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // You can show a loader while checking session
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome to Dashboard, {session?.user?.name}</h1>
    </div>
  );
}
