import { Routes, Route, Navigate } from "react-router-dom";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";

import About from "./pages/About";
import Reports from "./pages/Reports";
import Courses from "./pages/Courses";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import StudentDetails from "./pages/StudentDetails";

import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" replace />} />

      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/students"
        element={
          <ProtectedRoute>
            <Students />
          </ProtectedRoute>
        }
      />

      <Route
        path="/students/:id"
        element={
          <ProtectedRoute>
            <StudentDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/courses"
        element={
          <ProtectedRoute>
            <Courses />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/signup" replace />} />
    </Routes>
  );
}