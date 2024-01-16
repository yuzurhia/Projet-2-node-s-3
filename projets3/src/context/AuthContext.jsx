import React, { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null
  );

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
