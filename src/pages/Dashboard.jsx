import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-card">
        <h1>Welcome, {user?.name || "User"} 👋</h1>
        <p>{user?.email}</p>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}