"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BiEnvelope, BiLock } from "react-icons/bi";
import { toast } from "react-toastify";

export default function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);
    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
    setLoading(false);

    if (error) {
      toast.error(error.message);
    }
    if (data) {
      toast.success("Welcome back!");
      router.push("/");
    }
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
    setGoogleLoading(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-md bg-amber-600 grid grid-cols-2 gap-[3px] p-[6px]">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white/90 rounded-[2px]" />
            ))}
          </div>
          <span className="text-2xl font-bold tracking-tight text-stone-900">
            Tile<span className="text-amber-600">Vista</span>
          </span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-[0_4px_24px_rgba(0,0,0,0.06)] px-8 py-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="block w-6 h-px bg-amber-600" />
              <span className="text-amber-600 text-[11px] font-medium tracking-[3px] uppercase">
                Welcome Back
              </span>
              <span className="block w-6 h-px bg-amber-600" />
            </div>
            <h1 className="font-playfair text-3xl font-bold text-stone-900">
              Sign In
            </h1>
            <p className="text-stone-400 text-sm mt-1">
              Access your TileVista account
            </p>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-stone-700 text-sm font-medium">
                Email Address
              </label>
              <div className="relative">
                <BiEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-base pointer-events-none" />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full pl-9 pr-4 py-2.5 text-sm text-stone-800 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 placeholder:text-stone-300 transition-all duration-200"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-stone-700 text-sm font-medium">
                  Password
                </label>
              </div>
              <div className="relative">
                <BiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-base pointer-events-none" />
                <input
                  name="password"
                  type="password"
                  required
                  placeholder="Enter your password"
                  className="w-full pl-9 pr-4 py-2.5 text-sm text-stone-800 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 placeholder:text-stone-300 transition-all duration-200"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold py-3 rounded-xl transition-all duration-200 shadow-sm mt-1"
            >
              {loading ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-1">
              <div className="flex-1 h-px bg-stone-100" />
              <span className="text-stone-400 text-xs">or continue with</span>
              <div className="flex-1 h-px bg-stone-100" />
            </div>

            {/* Google */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={googleLoading}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-stone-50 disabled:opacity-60 disabled:cursor-not-allowed border border-stone-200 hover:border-stone-300 text-stone-700 text-sm font-medium py-3 rounded-xl transition-all duration-200"
            >
              {googleLoading ? (
                <svg
                  className="w-4 h-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
              ) : (
                <FcGoogle className="text-xl" />
              )}
              Continue with Google
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-stone-400 mt-6">
            Don't have an account?{" "}
            <Link
              href="/sign-up"
              className="text-amber-600 hover:text-amber-700 font-semibold transition-colors"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
