"use client";

import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();
  const router = useRouter();

  const onSubmit = async (data: LoginFormInputs) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.error) {
      alert("Invalid credentials");
    } else {
      router.push("/dashboard");
    }
  };

  const handleGoogleLogin = async () => {
    const res = await signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <>
      <NavBar />
      <main className="max-w-md mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 space-y-4"
          noValidate
        >
          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              placeholder="Email"
              type="email"
              className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              placeholder="Password"
              type="password"
              className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-accent text-white rounded hover:bg-accent-dark transition disabled:opacity-50"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="my-6 flex items-center">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleGoogleLogin}
            className="border border-gray-300 hover:border-gray-500 font-semibold py-2 px-4 rounded flex items-center"
          >
            <FcGoogle size={24} className="mr-2" />
            <span>Continue with Google</span>
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
