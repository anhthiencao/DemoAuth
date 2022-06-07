import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { ProfilePage } from "./pages/Profile";
import { SettingsPage } from "./pages/Settings";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { HomeLayout } from "./components/HomeLayout";
import "./styles.css";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";

export default function App() {
  const { setToken, setIdToken, login } = useAuth();
  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get(
      "access_token"
    );
    const idToken = new URLSearchParams(window.location.search).get(
      "id_token"
    );
    setToken(token);
    setIdToken(idToken)
    if (token) {
      login({
        email: 'Test',
        password: 'Hehe',
      });
    }
  }, []);
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}
