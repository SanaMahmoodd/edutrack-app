import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

function getSavedUser() {
  const savedUser = localStorage.getItem("edutrack-user");
  return savedUser ? JSON.parse(savedUser) : null;
}

function getUsers() {
  const users = localStorage.getItem("edutrack-users");
  return users ? JSON.parse(users) : [];
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getSavedUser);

  function signup(name, email, password, confirmPassword) {
    if (!name || !email || !password || !confirmPassword) {
      return { success: false, message: "Please fill all fields" };
    }

    if (password !== confirmPassword) {
      return { success: false, message: "Passwords do not match" };
    }

    const users = getUsers();

    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      return { success: false, message: "This email already has an account" };
    }

    const newUser = { name, email, password };

    const updatedUsers = [...users, newUser];
    localStorage.setItem("edutrack-users", JSON.stringify(updatedUsers));

    const loggedUser = { name, email };
    localStorage.setItem("edutrack-user", JSON.stringify(loggedUser));
    setUser(loggedUser);

    return { success: true };
  }

  function login(email, password) {
    if (!email || !password) {
      return { success: false, message: "Please fill all fields" };
    }

    const users = getUsers();

    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      return { success: false, message: "Invalid email or password" };
    }

    const loggedUser = {
      name: foundUser.name,
      email: foundUser.email,
    };

    localStorage.setItem("edutrack-user", JSON.stringify(loggedUser));
    setUser(loggedUser);

    return { success: true };
  }

  function logout() {
    localStorage.removeItem("edutrack-user");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, signup, login, logout, isAuthenticated: Boolean(user) }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}