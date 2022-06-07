import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [token, setToken] = useState(null);
  const [idToken, setIdToken] = useState(null);
  const navigate = useNavigate();

  const login = async (data) => {
    setUser(data);
    navigate("/dashboard/profile", { replace: true });
  }; 

  const logout = () => {
    setUser(null);
    setToken(null);
    setIdToken(null);
  };
  
  const value = useMemo(
    () => ({
      setIdToken,
      idToken,
      setToken,
      token,
      user,
      login,
      logout
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
