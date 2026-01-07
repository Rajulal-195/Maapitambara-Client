import React, { createContext, useContext, useState, useEffect } from "react";

const AdminAuthContext = createContext();

export function AdminAuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null means loading
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated") === "true";
    const storedName = localStorage.getItem("adminName");

    if (auth && storedName) {
      setIsAuthenticated(true);
      setAdminName(storedName);
    } else {
      setIsAuthenticated(false);
      setAdminName("");
    }
  }, []);

  const login = (name) => {
    setIsAuthenticated(true);
    setAdminName(name);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("adminName", name);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAdminName("");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("adminName");
  };

  if (isAuthenticated === null) {
    // Loading auth state
    return <div>Loading...</div>;
  }

  return (
    <AdminAuthContext.Provider
      value={{ isAuthenticated, adminName, login, logout }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  return useContext(AdminAuthContext);
}
