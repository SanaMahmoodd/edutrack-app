import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../ui/Button";

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

        <Button
          type="button"
          onClick={() => navigate("/students")}
        >
          Go To Students
        </Button>

        <br />
        <br />

        <Button
          type="button"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}