import { useEffect, useState } from "react";
import AuthContext from "./auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // fetch("https://example/api/auth/me", {
    //   method: "POST",
    // });

    setUser({ id: 1, username: "محمد اشرافی" });
  }, []);

  const login = () => {
    // Login Api
    // fetch("https://example/api/auth/login", {
    //   method: "POST",
    // });

    setUser({ id: 1, username: "محمد اشرافی" });
  };

  const logout = () => {
    // Logout Api
    // fetch("https://example/api/auth/logout");

    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
