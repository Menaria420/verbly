"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  function onSubmit(data: any) {
    // mock register: redirect to login
    alert("Registered (mock). Please login.");
    router.push("/login");
  }

  return (
    <main className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <input
          {...register("name")}
          placeholder="Full name"
          className="w-full p-3 rounded border"
        />
        <input
          {...register("email")}
          placeholder="Email"
          className="w-full p-3 rounded border"
        />
        <input
          {...register("password")}
          placeholder="Password"
          type="password"
          className="w-full p-3 rounded border"
        />
        <button
          type="submit"
          className="w-full py-3 bg-accent text-white rounded"
        >
          Create account
        </button>
      </form>
    </main>
  );
}
