import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

import {
  GraduationCap,
  BookOpen,
  LineChart as LineChartIcon,
  Wifi,
} from "lucide-react";

import Button from "../ui/ButtonUI";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { getStudents } from "../api/studentService";
import { getCourses } from "../api/courseService";

import {
  DashboardPage,
  DashboardContainer,
  Hero,
  HeroTitle,
  HeroText,
  ActionRow,
  StatsGrid,
  StatCard,
  StatIcon,
  StatValue,
  StatLabel,
  ContentGrid,
  Panel,
  PanelTitle,
  ActivityItem,
  ActivityText,
  ActivityTime,
  ProgressTrack,
  ProgressFill,
  FullWidthSection,
} from "../ui/DashboardUI";

export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboardData() {
      try {
        const studentsData = await getStudents();
        const coursesData = await getCourses();

        setStudents(studentsData);
        setCourses(coursesData);
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboardData();
  }, []);

  const averageGpa =
    students.length > 0
      ? (
          students.reduce(
            (sum, student) => sum + Number(student.gpa || 0),
            0
          ) / students.length
        ).toFixed(1)
      : "0.0";

  const courseData = courses.map((course) => ({
    course: course.name,
    students: course.students,
  }));

  const performanceData = students.map((student) => ({
    name: student.name.split(" ")[0],
    gpa: Number(student.gpa || 0),
  }));

  const stats = [
    {
      icon: <GraduationCap size={22} />,
      value: students.length,
      label: "Registered Students",
    },

    {
      icon: <BookOpen size={22} />,
      value: courses.length,
      label: "Active Courses",
    },

    {
      icon: <LineChartIcon size={22} />,
      value: averageGpa,
      label: "Average GPA",
    },

    {
      icon: <Wifi size={22} />,
      value: "Live",
      label: "API Connection",
    },
  ];

  const activities = [
    {
      text: "Flask backend API connected successfully",
      time: "Live",
    },

    {
      text: "Student records loaded from database",
      time: "Updated",
    },

    {
      text: "Course data synchronized with backend",
      time: "Active",
    },

    {
      text: "Authentication and protected routes are active",
      time: "Secure",
    },
  ];

  const tasks = [
    {
      text: "Review student records",
      time: "Pending",
    },

    {
      text: "Check course enrollment",
      time: "This week",
    },

    {
      text: "Export student report",
      time: "Optional",
    },

    {
      text: "Update academic performance data",
      time: "Next step",
    },
  ];

  if (loading) {
    return (
      <DashboardPage>
        <Navbar />

        <DashboardContainer>
          <Hero>
            <HeroTitle>Loading Dashboard...</HeroTitle>

            <HeroText>
              Please wait while the system loads dashboard analytics from the
              backend API.
            </HeroText>
          </Hero>
        </DashboardContainer>

        <Footer />
      </DashboardPage>
    );
  }

  return (
    <DashboardPage>
      <Navbar />

      <DashboardContainer>
        <Hero>
          <HeroTitle>Student Management Dashboard</HeroTitle>

          <HeroText>
            Welcome back, {user?.name || "User"}. Monitor students, manage
            academic records, review system activity, and track real-time data
            from your Flask backend.
          </HeroText>

          <ActionRow>
            <Button type="button" onClick={() => navigate("/students")}>
              Manage Students
            </Button>
          </ActionRow>
        </Hero>

        <StatsGrid>
          {stats.map((stat) => (
            <StatCard key={stat.label}>
              <StatIcon>{stat.icon}</StatIcon>

              <StatValue>{stat.value}</StatValue>

              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>

        <ContentGrid>
          <Panel>
            <PanelTitle>Recent System Activity</PanelTitle>

            {activities.map((item) => (
              <ActivityItem key={item.text}>
                <ActivityText>{item.text}</ActivityText>

                <ActivityTime>{item.time}</ActivityTime>
              </ActivityItem>
            ))}
          </Panel>

          <Panel>
            <PanelTitle>Students by Course</PanelTitle>

            <div
              style={{
                width: "100%",
                height: "260px",
                marginTop: "18px",
              }}
            >
              <ResponsiveContainer>
                <BarChart data={courseData}>
                  <XAxis dataKey="course" stroke="#9fb0c4" />

                  <YAxis stroke="#9fb0c4" />

                  <Tooltip
                    contentStyle={{
                      background: "#06101e",
                      border:
                        "1px solid rgba(231, 189, 105, 0.22)",
                      borderRadius: "10px",
                      color: "#fff",
                    }}
                  />

                  <Bar
                    dataKey="students"
                    fill="#e7bd69"
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Panel>
        </ContentGrid>

        <ContentGrid>
          <Panel>
            <PanelTitle>Student GPA Performance</PanelTitle>

            <div
              style={{
                width: "100%",
                height: "260px",
                marginTop: "18px",
              }}
            >
              <ResponsiveContainer>
                <LineChart data={performanceData}>
                  <XAxis dataKey="name" stroke="#9fb0c4" />

                  <YAxis stroke="#9fb0c4" domain={[0, 4]} />

                  <Tooltip
                    contentStyle={{
                      background: "#06101e",
                      border:
                        "1px solid rgba(231, 189, 105, 0.22)",
                      borderRadius: "10px",
                      color: "#fff",
                    }}
                  />

                  <Line
                    type="monotone"
                    dataKey="gpa"
                    stroke="#e7bd69"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Panel>

          <Panel>
            <PanelTitle>System Status</PanelTitle>

            <StatLabel>Authentication System</StatLabel>

            <ProgressTrack>
              <ProgressFill $value={100} />
            </ProgressTrack>

            <StatLabel style={{ marginTop: "18px" }}>
              API Integration
            </StatLabel>

            <ProgressTrack>
              <ProgressFill $value={100} />
            </ProgressTrack>

            <StatLabel style={{ marginTop: "18px" }}>
              Database Synchronization
            </StatLabel>

            <ProgressTrack>
              <ProgressFill $value={95} />
            </ProgressTrack>

            <StatLabel style={{ marginTop: "18px" }}>
              Deployment Readiness
            </StatLabel>

            <ProgressTrack>
              <ProgressFill $value={100} />
            </ProgressTrack>
          </Panel>
        </ContentGrid>

        <FullWidthSection>
          <Panel>
            <PanelTitle>Administrative Tasks</PanelTitle>

            {tasks.map((task) => (
              <ActivityItem key={task.text}>
                <ActivityText>{task.text}</ActivityText>

                <ActivityTime>{task.time}</ActivityTime>
              </ActivityItem>
            ))}
          </Panel>
        </FullWidthSection>
      </DashboardContainer>

      <Footer />
    </DashboardPage>
  );
}