import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MessageCircle, BookOpen, Image, Video } from "lucide-react";
import AdminHeader from "./AdminHeader";

export default function AdminDashboard() {
  const location = useLocation();

  const menuItems = [
    { name: "Customer Query", path: "/admin/dashboard/info", icon: MessageCircle },
    { name: "Booking Details", path: "/admin/dashboard/bookingdetails", icon: BookOpen },
    { name: "Upload Images", path: "/admin/dashboard/img", icon: Image },
    { name: "Upload Video", path: "/admin/dashboard/video", icon: Video },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-10">
        <AdminHeader />
      </header>

      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg border-r border-gray-200 p-4 flex-shrink-0 fixed top-16 bottom-0 left-0 overflow-y-auto">
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition ${
                    isActive
                      ? "bg-yellow-500 text-white shadow"
                      : "text-gray-700 hover:bg-yellow-100 hover:text-yellow-700"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64  overflow-y-auto">
       
            <Outlet />
        
        </main>
      </div>
    </div>
  );
}
