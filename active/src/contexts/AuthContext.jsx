import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Recuperar información del usuario de localStorage al cargar la aplicación
    const accessToken = localStorage.getItem("accessToken");
    const userName = localStorage.getItem("userName");
    if (accessToken && userName) {
      setUser({ name: userName });
    }
  }, []);

  const login = (userName) => {
    setUser({ name: userName });
  };

  const logout = () => {
    // Limpiar localStorage y el estado de usuario
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userName");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
