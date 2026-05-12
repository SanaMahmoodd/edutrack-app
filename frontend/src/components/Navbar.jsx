import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import hero from "../assets/hero.png";

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

  const profileImage =
    localStorage.getItem("profileImage");

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <Nav>
      <Logo>
        <LogoIcon src={hero} alt="EduTrack Logo"/>
        EduTrack
      </Logo>

      <Links>
        <LinkItem to="/dashboard">
          Dashboard
        </LinkItem>

        <LinkItem to="/students">
          Students
        </LinkItem>

        <LinkItem to="/courses">
          Courses
        </LinkItem>

        <LinkItem to="/reports">
          Reports
        </LinkItem>

        <LinkItem to="/settings">
          Settings
        </LinkItem>

        <LinkItem to="/about">
          About
        </LinkItem>
      </Links>

      <UserBox>
        <Avatar
          onClick={() =>
            navigate("/profile")
          }
        >
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          ) : (
            user?.name
              ?.charAt(0)
              ?.toUpperCase() || "U"
          )}
        </Avatar>

        <LogoutButton
          onClick={handleLogout}
        >
          Logout
        </LogoutButton>
      </UserBox>
    </Nav>
  );
}