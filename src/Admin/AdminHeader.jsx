import React from "react";
import logo from "../Assest/Aug_19__2025.png";
import { useAdminAuth } from "./AdminAuthContext";
import { LogOut } from "lucide-react"; // icon

export default function AdminHeader() {
  const { adminName, logout } = useAdminAuth();

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-yellow-50 to-yellow-100 shadow-md z-50">
      {/* Logo + Title */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
        <h1 className="text-xl font-bold text-red-600 tracking-wide">
          Maa Pitambara Admin
        </h1>
      </div>

      {/* Controls: User + Logout */}
      <div className="flex items-center space-x-4">
        {/* Admin Name */}
        <div className="flex items-center space-x-2 bg-white pe-3 py-1 rounded-full shadow">
          <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-white font-bold uppercase">
            {adminName.charAt(0) || "A"}
          </div>
          <span className="text-sm font-medium text-gray-800">
            {adminName}
          </span>
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </header>
  );
}
