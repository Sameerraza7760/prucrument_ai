"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex justify-center bg-[rgb(31,33,40)] relative overflow-hidden">
      {/* Left Side: Welcome Panel */}
      <div className="w-1/2 text-white flex flex-col z-10 relative">
        <div className="flex flex-col px-8 lg:px-16 xl:px-20 pt-8 pb-4 ml-[90px]">
          <div className="mb-8">
            <img src="/assets/emirates-driving-logo.png" alt="Emirates Driving Logo" className="w-44 h-auto" />
          </div>

          <div className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">Welcome back!</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Please Log in your Account to <br />
              Get Started
            </p>
          </div>
        </div>
      </div>

      {/* Car Image positioned to overlap */}
      <div className="absolute bottom-0 left-[10%] w-[40%] z-20">
        <img src="/assets/car.svg" alt="Car" className="w-full h-auto object-contain" />
      </div>

      {/* Right Side: Login Form */}
      <div className="w-1/2 flex items-center justify-center p-6 lg:p-16 z-30 relative">
        <div className="w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <form className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-[#1F2128]">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F35B04] focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-[#1F2128]">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-4 pr-12 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F35B04] focus:border-transparent transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-8 bg-[#F35B04] hover:bg-[#e04e00] text-white text-sm font-semibold py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Log in
            </button>
          </form>

          {/* Footer Text */}
          <p className="mt-8 text-center text-sm text-[#1F2128]">
            {"Don't have an account? "}
            <a href="#" className="text-[#F35B04] font-semibold hover:underline transition-all duration-200">
              Register
            </a>
            {" here"}
          </p>
        </div>
      </div>
    </div>
  )
}
