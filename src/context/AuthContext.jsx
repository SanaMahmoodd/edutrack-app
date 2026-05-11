import { createContext, useContext, useState } from "react";
import axiosClient from "../api/axiosClient";

const AuthContext = createContext(null);

function getSavedUser() {
  const savedUser =
    localStorage.getItem("edutrack-user") ||
    localStorage.getItem("user");

  return savedUser ? JSON.parse(savedUser) : null;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getSavedUser);

  async function signup(name, email, password, confirmPassword) {
    if (!name || !email || !password || !confirmPassword) {
      return { success: false, message: "Please fill all fields" };
    }

    if (password !== confirmPassword) {
      return { success: false, message: "Passwords do not match" };
    }

    try {
      const response = await axiosClient.post("/auth/register", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("edutrack-user", JSON.stringify(response.data.user));
      localStorage.setItem("user", JSON.stringify(response.data.user));

      setUser(response.data.user);

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Signup failed",
      };
    }
  }

  async function login(email, password) {
    if (!email || !password) {
      return { success: false, message: "Please fill all fields" };
    }

    try {
      const response = await axiosClient.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("edutrack-user", JSON.stringify(response.data.user));
      localStorage.setItem("user", JSON.stringify(response.data.user));

      setUser(response.data.user);

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Invalid email or password",
      };
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("edutrack-user");
    localStorage.removeItem("user");
    localStorage.removeItem("profileInfo");

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
        isAuthenticated: Boolean(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}