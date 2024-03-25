"use client"
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import userLogIn from "@/libs/userLogIn";

export default function sigin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await userLogIn(email, password);
      if (result.error) {
        console.error("Login failed:", result.error);
      } else {
        // Login successful, redirect to desired page
        router.push("/hospital");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form >
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
              
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
              
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700"
            > 
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
