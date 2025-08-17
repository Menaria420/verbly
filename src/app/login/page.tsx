"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Button } from "@nextui-org/react";
import api from "@/src/lib/axios";
import { useAlert } from "@/src/components/AlertProvider";

type AuthFormInputs = {
  name?: string;
  email: string;
  password: string;
};

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // toggle login/register
  const [showPassword, setShowPassword] = useState(false);
  const { showAlert } = useAlert();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthFormInputs>();
  const router = useRouter();
  const onSubmit = async (data: AuthFormInputs) => {
    try {
      if (isLogin) {
        // LOGIN
        console.log("Login", isLogin, "data", data);
        const res = await api.post("/api/v1/auth/login", {
          email: data.email,
          password: data.password,
        });

        // store token/user data as needed
        // e.g., localStorage, redux, or let next-auth handle it
        console.log("Login Success:", res.data);
        // OPTIONAL: if backend returns JWT, you can set it in cookies or state
        router.push("/dashboard");
      } else {
        // REGISTER
        const res = await api.post("/api/v1/auth/register", {
          name: data.name,
          email: data.email,
          password: data.password,
        });
        await api.post("/auth/login", {
          email: data.email,
          password: data.password,
        });
        router.push("/dashboard");
      }
      showAlert("Logged in successfully ✅", "success");
    } catch (err: any) {
      showAlert(err.message || "Something went wrong ❌", "danger");
    }
  };

  const handleGoogleLogin = async () => {
    const resp = await signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <main className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-center">
        {isLogin ? "Login" : "Register"}
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 space-y-4"
        noValidate
      >
        {!isLogin && (
          <div>
            <input
              {...register("name", {
                required: !isLogin ? "Name is required" : false,
              })}
              placeholder="Full Name"
              type="text"
              className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
        )}

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
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="relative">
          <input
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-accent pr-12"
          />

          <Button
            type="button"
            onPress={() => setShowPassword((prev) => !prev)}
            className="absolute text-gray-500 hover:text-gray-700 right-3 bg-transparent hover:bg-transparent top-6 -translate-y-1/2  focus:outline-none"
          >
            {showPassword ? (
              <FiEyeOff className="h-5 w-5 " />
            ) : (
              <FiEye className="h-5 w-5" />
            )}
          </Button>

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <Button
          color="primary"
          type="submit"
          disabled={isSubmitting}
          className="btn_dark w-full"
        >
          {isSubmitting
            ? isLogin
              ? "Signing in..."
              : "Registering..."
            : isLogin
            ? "Sign in"
            : "Register"}
        </Button>
      </form>

      <div className="my-6 flex items-center">
        <hr className="flex-1 border-gray-300" />
        <span className="px-2 text-gray-500 text-sm">OR</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      <div className="flex justify-center">
        <Button
          disabled={false}
          color="primary"
          onPress={handleGoogleLogin}
          className="btn_dark"
        >
          <FcGoogle size={24} className="mr-2" />
          <span>Continue with Google</span>
        </Button>
      </div>

      <p className="text-center text-sm mt-6">
        {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
        <Button
          color="primary"
          className="btn_dark ml-2"
          type="button"
          onPress={() => setIsLogin(!isLogin)} // ✅ this is the real toggle
        >
          {isLogin ? "Register here" : "Login here"}
        </Button>
      </p>
    </main>
  );
}
