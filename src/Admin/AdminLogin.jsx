import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAdminAuth } from "./AdminAuthContext";
import { motion } from "framer-motion";
import { ShieldCheck, Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";

export default function AdminLogin() {
  const [email, setEmail] = useState("admin@astrotouch.com");
  const [password, setPassword] = useState("astro@123");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAdminAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://server-ekmv.onrender.com/api/admin/login", {
        username: email,
        password,
      });

      if (res.status === 200) {
        const adminName = res.data.name || email;
        login(adminName);
        toast.success(`Welcome back, ${adminName}!`);
        navigate("/admin/dashboard");
      }
    } catch {
      toast.error("Invalid admin credentials!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0e0d1b] to-[#1a192d] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl grid md:grid-cols-2 bg-white/10 backdrop-blur-xl border border-yellow-500/40 shadow-2xl rounded-2xl overflow-hidden"
      >
        {/* Left Side - Branding */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-yellow-500 to-yellow-600 text-black p-10">
          <ShieldCheck className="w-16 h-16 mb-4" />
          <h1 className="text-3xl font-bold">Maa Pitambara</h1>
          <p className="mt-2 text-sm font-medium">
            Secure Admin Panel for Trusted Access
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div className="p-10 flex flex-col justify-center">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-yellow-400 p-3 rounded-full shadow-md">
              <ShieldCheck className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-2xl font-bold text-yellow-400 mt-3">
              Admin Login
            </h2>
            <p className="text-sm text-gray-400">
              Sign in to continue to Admin Dashboard
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-yellow-300 block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-500 text-yellow-200 focus:ring-2 focus:ring-yellow-400 outline-none transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@gmail.com"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="text-yellow-300 block mb-1 font-medium">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 rounded-lg bg-black border border-yellow-500 text-yellow-200 focus:ring-2 focus:ring-yellow-400 outline-none transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="********"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-yellow-400 hover:text-yellow-200"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 text-yellow-300">
                <input type="checkbox" className="accent-yellow-500" />
                <span>Remember me</span>
              </label>
              <button
                type="button"
                className="text-gray-400 hover:text-yellow-400"
              >
                Forgot password?
              </button>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-yellow-400 text-black py-2.5 rounded-lg hover:bg-yellow-300 font-semibold transition shadow-md"
            >
              Login
            </motion.button>
          </form>

          {/* Footer */}
          <p className="text-xs text-gray-500 text-center mt-8">
            &copy; {new Date().getFullYear()} Maa Pitambara Admin Panel. All rights reserved.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
