"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub, FaSpinner } from "react-icons/fa";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    console.log("Login Data:", data);

    // Simulate async login
    setTimeout(() => {
      setLoading(false);
      alert("Logged in successfully!");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm mb-2 font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className="block text-sm mb-2 font-medium text-gray-600">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pr-12 transition ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-11 text-indigo-600 font-semibold cursor-pointer text-xl"
            >
              {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              {...register("remember")}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold flex justify-center items-center gap-2 cursor-pointer"
          >
            {loading ? <FaSpinner className="animate-spin" /> : "Login"}
          </motion.button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-400">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* OAuth Buttons */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
            <FaGoogle className="text-red-500" /> Login with Google
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Don’t have an account?{" "}
          <span className="text-indigo-600 font-semibold cursor-pointer">
            Register
          </span>
        </p>
      </motion.div>
    </div>
  );
}
