"use client";

import { useAlert } from "@/src/components/AlertProvider";
import api from "@/src/lib/axios";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardHome() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { showAlert } = useAlert();

  useEffect(() => {
    const fetchUserData = async () => {
      const session = await getSession();
      try {
        if (session?.user) {
          const res = await api.post("/auth/login", {
            email: session?.user?.email,
            googleSignIn: true,
          });
          console.log("res", res);
        }
        showAlert("Logged in successfully ✅", "success");
      } catch (err: any) {
        showAlert(err?.message || "Something went wrong ❌", "danger");
      }
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
