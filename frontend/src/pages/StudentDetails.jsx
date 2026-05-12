import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { getStudents } from "../api/studentService";

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
  BigValue,
} from "../ui/PagesUI";

import {
  StudentAvatar,
  ProfileGrid,
} from "../ui/ProfileUI";

export default function StudentDetails() {
  const { id } = useParams();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    async function loadStudent() {
      const data = await getStudents();

      setStudent(
        data.find((item) => String(item.id) === id)
      );
    }

    loadStudent();
  }, [id]);

  if (!student) {
    return (
      <Page>
        <Navbar />

        <Container>
          <Subtitle>Loading student details...</Subtitle>
        </Container>

        <Footer />
      </Page>
    );
  }

  return (
    <Page>
      <Navbar />

      <Container>
        <StudentHeaderCard>
          <Header>
            <Title>{student.name}</Title>

            <Subtitle>
              Complete academic profile, contact information, performance
              summary, and recent student activity.
            </Subtitle>
          </Header>
        </StudentHeaderCard>

        <Grid>
          <InfoCard>
            <StudentAvatar>
              {student.name.charAt(0)}
            </StudentAvatar>

            <CardTitle>{student.name}</CardTitle>
            <CardText>{student.email}</CardText>

            <Row>
              <Label>Status</Label>
              <Value>{student.status || "Active"}</Value>
            </Row>

            <Row>
              <Label>Role</Label>
              <Value>Student</Value>
            </Row>

            <Row>
              <Label>ID</Label>
              <Value>STD-{student.id}</Value>
            </Row>
          </InfoCard>

          <InfoCard>
            <CardTitle>Academic Summary</CardTitle>

            <Row>
              <Label>Course</Label>
              <Value>{student.course || "Not assigned"}</Value>
            </Row>

            <Row>
              <Label>GPA</Label>
              <Value>{student.gpa ?? "N/A"}</Value>
            </Row>

            <Row>
              <Label>Attendance</Label>
              <Value>92%</Value>
            </Row>

            <Row>
              <Label>Progress</Label>
              <Value>Excellent</Value>
            </Row>
          </InfoCard>

          <InfoCard>
            <CardTitle>Performance Score</CardTitle>

            <BigValue>86%</BigValue>

            <CardText>
              This score represents the student’s current academic performance
              across active learning modules and course participation.
            </CardText>
          </InfoCard>
        </Grid>

        <ProfileGrid>
          <Grid>
            <InfoCard>
              <CardTitle>Recent Activity</CardTitle>

              <Row>
                <Label>Profile</Label>
                <Value>Updated recently</Value>
              </Row>

              <Row>
                <Label>Course</Label>
                <Value>{student.course || "No course assigned"}</Value>
              </Row>

              <Row>
                <Label>Record</Label>
                <Value>Verified</Value>
              </Row>

              <Row>
                <Label>Last Login</Label>
                <Value>Today</Value>
              </Row>
            </InfoCard>

            <InfoCard>
              <CardTitle>Contact Information</CardTitle>

              <Row>
                <Label>Email</Label>
                <Value>{student.email}</Value>
              </Row>

              <Row>
                <Label>Phone</Label>
                <Value>+970 000 000 000</Value>
              </Row>

              <Row>
                <Label>Address</Label>
                <Value>Palestine</Value>
              </Row>

              <Row>
                <Label>Department</Label>
                <Value>{student.course || "Academic Department"}</Value>
              </Row>
            </InfoCard>
          </Grid>
        </ProfileGrid>
      </Container>

      <Footer />
    </Page>
  );
}