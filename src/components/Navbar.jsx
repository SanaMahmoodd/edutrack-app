import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import {
  Nav,
  Logo,
  LogoIcon,
  Links,
  LinkItem,
  UserBox,
  Avatar,
  LogoutButton,
} from "../ui/NavbarUI";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <Nav>
      <Logo>
        <LogoIcon>✦</LogoIcon>
        EduTrack
      </Logo>

      <Links>
        <LinkItem to="/dashboard">Dashboard</LinkItem>
        <LinkItem to="/students">Students</LinkItem>
        <LinkItem to="/courses">Courses</LinkItem>
        <LinkItem to="/reports">Reports</LinkItem>
        <LinkItem to="/settings">Settings</LinkItem>
        <LinkItem to="/about">About</LinkItem>
      </Links>

      <UserBox>
        <Avatar onClick={() => navigate("/profile")}>
          {user?.name?.charAt(0)?.toUpperCase() || "U"}
        </Avatar>

        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </UserBox>
    </Nav>
  );
}