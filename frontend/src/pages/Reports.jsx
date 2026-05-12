import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Button from "../ui/ButtonUI";
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
  PageGrid,
  InfoCard,
  CardTitle,
  CardText,
  BigValue,
  Row,
  Label,
  Value,
} from "../ui/PagesUI";

export default function Reports() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const courseSummary = [
    { name: "React", students: 28 },
    { name: "Python", students: 22 },
    { name: "Flask", students: 18 },
    { name: "UI/UX", students: 15 },
  ];

  useEffect(() => {
    async function loadStudents() {
      try {
        const data = await getStudents();
        setStudents(data);
      } catch (error) {
        console.error("Failed to load report data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadStudents();
  }, []);

  function handleExport() {
    const headers = ["ID", "Name", "Email", "Status"];

    const rows = students.map((student) => [
      student.id,
      student.name,
      student.email,
      "Active",
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "students-report.csv";
    link.click();

    URL.revokeObjectURL(url);
  }

  if (loading) {
    return (
      <Page>
        <Navbar />

        <Container>
          <Subtitle>Loading reports...</Subtitle>
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
            <Title>Reports</Title>
            <Subtitle>
              Review academic performance, student statistics, course summaries,
              and export student reports for administrative use.
            </Subtitle>
          </Header>

          <Grid>
            <InfoCard>
              <CardTitle>Total Students</CardTitle>
              <BigValue>{students.length}</BigValue>
              <CardText>
                Total student records currently available through the connected
                API.
              </CardText>
            </InfoCard>

            <InfoCard>
              <CardTitle>Performance Summary</CardTitle>
              <BigValue>86%</BigValue>
              <CardText>
                Estimated academic performance based on student progress and
                course activity.
              </CardText>
            </InfoCard>

            <InfoCard>
              <CardTitle>Active Courses</CardTitle>
              <BigValue>{courseSummary.length}</BigValue>
              <CardText>
                Courses currently used to organize student academic records.
              </CardText>
            </InfoCard>
          </Grid>
        </StudentHeaderCard>

        <PageGrid>
          <InfoCard>
            <CardTitle>Students by Course</CardTitle>

            {courseSummary.map((course) => (
              <Row key={course.name}>
                <Label>{course.name}</Label>
                <Value>{course.students} students</Value>
              </Row>
            ))}
          </InfoCard>

          <InfoCard>
            <CardTitle>Report Details</CardTitle>

            <Row>
              <Label>Report Type</Label>
              <Value>Student Records</Value>
            </Row>

            <Row>
              <Label>Format</Label>
              <Value>CSV File</Value>
            </Row>

            <Row>
              <Label>Data Source</Label>
              <Value>External API</Value>
            </Row>

            <Row>
              <Label>Status</Label>
              <Value>Ready</Value>
            </Row>
          </InfoCard>

          <InfoCard>
            <CardTitle>Export Report</CardTitle>

            <CardText style={{ marginBottom: "18px" }}>
              Download a CSV report containing student IDs, names, emails, and
              account status. This file can be used for academic review or
              administrative documentation.
            </CardText>

            <Button type="button" onClick={handleExport}>
              Export CSV Report
            </Button>
          </InfoCard>
        </PageGrid>
      </Container>

      <Footer />
    </Page>
  );
}