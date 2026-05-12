import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../ui/ButtonUI";
import Notification from "../components/Notification";

import useNotification from "../hooks/useNotification";

import { useAuth } from "../context/AuthContext";
import { updateProfile } from "../api/authService";

import {
  Page,
  Container,
  Header,
  Title,
  Subtitle,
  Grid,
} from "../ui/PageLayout";

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

import {
  ProfileAvatar,
  UploadLabel,
  ProfileGrid,
} from "../ui/ProfileUI";

export default function Profile() {
  const { user } = useAuth();

  const {
    notification,
    showNotification,
  } = useNotification();

  const storedUser =
    JSON.parse(
      localStorage.getItem("user")
    ) ||
    JSON.parse(
      localStorage.getItem(
        "edutrack-user"
      )
    );

  const savedProfile = JSON.parse(
    localStorage.getItem("profileInfo")
  );

  const [profile, setProfile] =
    useState(
      savedProfile || {
        name:
          storedUser?.name ||
          user?.name ||
          "User",

        email:
          storedUser?.email ||
          user?.email ||
          "No email available",

        role: "Academic Admin",

        department:
          "Student Affairs",

        phone:
          "+970 000 000 000",

        status: "Active",
      }
    );

  const [profileImage, setProfileImage] =
    useState(
      localStorage.getItem(
        "profileImage"
      ) || ""
    );

  function handleChange(e) {
    setProfile({
      ...profile,
      [e.target.name]:
        e.target.value,
    });
  }

  function handleImageUpload(e) {
    const file = e.target.files[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onloadend = () => {
      localStorage.setItem(
        "profileImage",
        reader.result
      );

      setProfileImage(
        reader.result
      );

      showNotification(
        "Profile image uploaded successfully."
      );

      window.location.reload();
    };

    reader.readAsDataURL(file);
  }

  async function handleUpdate(e) {
    e.preventDefault();

    const currentUser =
      JSON.parse(
        localStorage.getItem(
          "user"
        )
      ) ||
      JSON.parse(
        localStorage.getItem(
          "edutrack-user"
        )
      );

    const currentEmail =
      currentUser?.email ||
      savedProfile?.email ||
      user?.email ||
      profile.email;

    if (
      !currentEmail ||
      currentEmail ===
        "No email available"
    ) {
      showNotification(
        "User email not found. Please login again.",
        "error"
      );

      return;
    }

    try {
      const result =
        await updateProfile({
          currentEmail,

          name: profile.name,

          email: profile.email,
        });

      const updatedProfile = {
        ...profile,

        name:
          result.user.name,

        email:
          result.user.email,
      };

      localStorage.setItem(
        "profileInfo",
        JSON.stringify(
          updatedProfile
        )
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          result.user
        )
      );

      localStorage.setItem(
        "edutrack-user",
        JSON.stringify(
          result.user
        )
      );

      setProfile(
        updatedProfile
      );

      showNotification(
        "Profile updated successfully."
      );
    } catch (error) {
      console.error(
        "Failed to update profile:",
        error
      );

      const message =
        error.response?.data
          ?.message ||
        "Failed to update profile.";

      showNotification(
        message,
        "error"
      );
    }
  }

  return (
    <Page>
      <Navbar />

      <Notification
        show={notification.show}
        message={
          notification.message
        }
        type={notification.type}
      />

      <Container>
        <StudentHeaderCard>
          <Header>
            <Title>
              Profile
            </Title>

            <Subtitle>
              Manage your personal
              information, profile
              photo, contact
              details, and academic
              administration
              access.
            </Subtitle>
          </Header>
        </StudentHeaderCard>

        <Grid>
          <InfoCard>
            <ProfileAvatar>
              {profileImage ? (
                <img
                  src={
                    profileImage
                  }
                  alt="Profile"
                />
              ) : (
                profile.name
                  .charAt(0)
                  .toUpperCase()
              )}
            </ProfileAvatar>

            <CardTitle>
              {profile.name}
            </CardTitle>

            <CardText>
              {profile.email}
            </CardText>

            <UploadLabel>
              Upload Photo

              <input
                type="file"
                accept="image/*"
                onChange={
                  handleImageUpload
                }
              />
            </UploadLabel>

            <Row>
              <Label>
                Role
              </Label>

              <Value>
                {profile.role}
              </Value>
            </Row>

            <Row>
              <Label>
                Status
              </Label>

              <Value>
                {profile.status}
              </Value>
            </Row>

            <Row>
              <Label>
                Department
              </Label>

              <Value>
                {
                  profile.department
                }
              </Value>
            </Row>

            <Row>
              <Label>
                Phone
              </Label>

              <Value>
                {profile.phone}
              </Value>
            </Row>
          </InfoCard>

          <InfoCard>
            <CardTitle>
              Update Profile
            </CardTitle>

            <CardText
              style={{
                marginBottom:
                  "18px",
              }}
            >
              Update your personal
              and administrative
              account information.
            </CardText>

            <form
              onSubmit={
                handleUpdate
              }
            >
              <PageInput
                name="name"
                placeholder="Full name"
                value={
                  profile.name
                }
                onChange={
                  handleChange
                }
              />

              <PageInput
                name="email"
                placeholder="Email"
                value={
                  profile.email
                }
                onChange={
                  handleChange
                }
              />

              <PageInput
                name="phone"
                placeholder="Phone number"
                value={
                  profile.phone
                }
                onChange={
                  handleChange
                }
              />

              <PageInput
                name="department"
                placeholder="Department"
                value={
                  profile.department
                }
                onChange={
                  handleChange
                }
              />

              <Button type="submit">
                Update Profile
              </Button>
            </form>
          </InfoCard>
        </Grid>

        <ProfileGrid>
          <Grid>
            <InfoCard>
              <CardTitle>
                Account Security
              </CardTitle>

              <Row>
                <Label>
                  Authentication
                </Label>

                <Value>
                  Enabled
                </Value>
              </Row>

              <Row>
                <Label>
                  Protected Routes
                </Label>

                <Value>
                  Active
                </Value>
              </Row>

              <Row>
                <Label>
                  Session Storage
                </Label>

                <Value>
                  LocalStorage
                </Value>
              </Row>
            </InfoCard>

            <InfoCard>
              <CardTitle>
                Admin Permissions
              </CardTitle>

              <Row>
                <Label>
                  Students
                </Label>

                <Value>
                  Manage
                </Value>
              </Row>

              <Row>
                <Label>
                  Courses
                </Label>

                <Value>
                  Manage
                </Value>
              </Row>

              <Row>
                <Label>
                  Reports
                </Label>

                <Value>
                  Export
                </Value>
              </Row>
            </InfoCard>
          </Grid>
        </ProfileGrid>
      </Container>

      <Footer />
    </Page>
  );
}