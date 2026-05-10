import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../ui/Button";
import Notification from "../components/Notification";
import useNotification from "../hooks/useNotification";
import { useAuth } from "../context/AuthContext";

import { Page, Container, Header, Title, Subtitle, Grid } from "../ui/PageLayout";
import { StudentHeaderCard } from "../ui/StudentUI";

import {
  InfoCard,
  CardTitle,
  CardText,
  Row,
  Label,
  Value,
  PageInput,
} from "../ui/PagesUI";

export default function Profile() {
  const { user } = useAuth();
  const { notification, showNotification } = useNotification();

  const [profile, setProfile] = useState({
    name: user?.name || "User",
    email: user?.email || "No email available",
    role: "Academic Admin",
    department: "Student Affairs",
    phone: "+970 000 000 000",
    status: "Active",
  });

  const [profileImage, setProfileImage] = useState("");

  function handleChange(e) {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  }

  function handleImageUpload(e) {
    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);

    showNotification("Profile image uploaded successfully.");
  }

  function handleUpdate(e) {
    e.preventDefault();
    showNotification("Profile updated successfully.");
  }

  return (
    <Page>
      <Navbar />

      <Notification
        show={notification.show}
        message={notification.message}
        type={notification.type}
      />

      <Container>
        <StudentHeaderCard>
          <Header>
            <Title>Profile</Title>
            <Subtitle>
              Manage your personal information, profile photo, contact details,
              and academic administration access.
            </Subtitle>
          </Header>
        </StudentHeaderCard>

        <Grid>
          <InfoCard>
            <div
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "30px",
                overflow: "hidden",
                display: "grid",
                placeItems: "center",
                marginBottom: "20px",
                background: "linear-gradient(135deg, #f5d98c, #e7bd69)",
                color: "#10141c",
                fontSize: "42px",
                fontWeight: "900",
              }}
            >
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                profile.name.charAt(0).toUpperCase()
              )}
            </div>

            <CardTitle>{profile.name}</CardTitle>
            <CardText>{profile.email}</CardText>

            <label
              style={{
                display: "inline-flex",
                marginTop: "18px",
                marginBottom: "18px",
                padding: "11px 16px",
                borderRadius: "10px",
                border: "1px solid rgba(231, 189, 105, 0.22)",
                color: "#f5d98c",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              Upload Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </label>

            <Row>
              <Label>Role</Label>
              <Value>{profile.role}</Value>
            </Row>

            <Row>
              <Label>Status</Label>
              <Value>{profile.status}</Value>
            </Row>

            <Row>
              <Label>Department</Label>
              <Value>{profile.department}</Value>
            </Row>
          </InfoCard>

          <InfoCard>
            <CardTitle>Update Profile</CardTitle>

            <CardText style={{ marginBottom: "18px" }}>
              Update your personal and administrative account information.
            </CardText>

            <form onSubmit={handleUpdate}>
              <PageInput
                name="name"
                placeholder="Full name"
                value={profile.name}
                onChange={handleChange}
              />

              <PageInput
                name="email"
                placeholder="Email"
                value={profile.email}
                onChange={handleChange}
              />

              <PageInput
                name="phone"
                placeholder="Phone number"
                value={profile.phone}
                onChange={handleChange}
              />

              <PageInput
                name="department"
                placeholder="Department"
                value={profile.department}
                onChange={handleChange}
              />

              <Button type="submit">Update Profile</Button>
            </form>
          </InfoCard>
        </Grid>

        <Grid style={{ marginTop: "24px" }}>
          <InfoCard>
            <CardTitle>Account Security</CardTitle>

            <Row>
              <Label>Authentication</Label>
              <Value>Enabled</Value>
            </Row>

            <Row>
              <Label>Protected Routes</Label>
              <Value>Active</Value>
            </Row>

            <Row>
              <Label>Session Storage</Label>
              <Value>LocalStorage</Value>
            </Row>
          </InfoCard>

          <InfoCard>
            <CardTitle>Admin Permissions</CardTitle>

            <Row>
              <Label>Students</Label>
              <Value>Manage</Value>
            </Row>

            <Row>
              <Label>Courses</Label>
              <Value>Manage</Value>
            </Row>

            <Row>
              <Label>Reports</Label>
              <Value>Export</Value>
            </Row>
          </InfoCard>
        </Grid>
      </Container>

      <Footer />
    </Page>
  );
}