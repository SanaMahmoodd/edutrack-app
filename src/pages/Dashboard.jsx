import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Button from "../ui/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
} from "../ui/DashboardUI";

export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const stats = [
    { icon: "🎓", value: "10", label: "Registered Students" },
    { icon: "📚", value: "4", label: "Active Courses" },
    { icon: "📈", value: "86%", label: "Average Performance" },
    { icon: "🟢", value: "Live", label: "API Connection" },
  ];

  const activities = [
    {
      text: "New student record was created",
      time: "Today",
    },
    {
      text: "Student profile information was updated",
      time: "Today",
    },
    {
      text: "External API connection checked successfully",
      time: "Live",
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
      text: "Check inactive students",
      time: "This week",
    },
    {
      text: "Export student report",
      time: "Optional",
    },
    {
      text: "Update course information",
      time: "Next step",
    },
  ];

  const courseData = [
    { course: "React", students: 28 },
    { course: "Python", students: 22 },
    { course: "Flask", students: 18 },
    { course: "UI/UX", students: 15 },
  ];

  return (
    <DashboardPage>
      <Navbar />

      <DashboardContainer>
        <Hero>
          <HeroTitle>
            Student Management Dashboard
          </HeroTitle>

          <HeroText>
            Welcome back, {user?.name || "User"}.
            Monitor students, manage academic
            records, review system activity,
            and organize administrative tasks
            from one modern dashboard.
          </HeroText>

          <ActionRow>
            <Button
              type="button"
              onClick={() => navigate("/students")}
            >
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
            <PanelTitle>
              Recent System Activity
            </PanelTitle>

            {activities.map((item) => (
              <ActivityItem key={item.text}>
                <ActivityText>
                  {item.text}
                </ActivityText>

                <ActivityTime>
                  {item.time}
                </ActivityTime>
              </ActivityItem>
            ))}
          </Panel>

          <Panel>
            <PanelTitle>
              Students by Course
            </PanelTitle>

            <div
              style={{
                width: "100%",
                height: "260px",
                marginTop: "18px",
              }}
            >
              <ResponsiveContainer>
                <BarChart data={courseData}>
                  <XAxis
                    dataKey="course"
                    stroke="#9fb0c4"
                  />

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
            <PanelTitle>
              Administrative Tasks
            </PanelTitle>

            {tasks.map((task) => (
              <ActivityItem key={task.text}>
                <ActivityText>
                  {task.text}
                </ActivityText>

                <ActivityTime>
                  {task.time}
                </ActivityTime>
              </ActivityItem>
            ))}
          </Panel>

          <Panel>
            <PanelTitle>
              System Status
            </PanelTitle>

            <StatLabel>
              Authentication System
            </StatLabel>

            <ProgressTrack>
              <ProgressFill $value={100} />
            </ProgressTrack>

            <StatLabel
              style={{ marginTop: "18px" }}
            >
              API Integration
            </StatLabel>

            <ProgressTrack>
              <ProgressFill $value={95} />
            </ProgressTrack>

            <StatLabel
              style={{ marginTop: "18px" }}
            >
              Database Synchronization
            </StatLabel>

            <ProgressTrack>
              <ProgressFill $value={88} />
            </ProgressTrack>

            <StatLabel
              style={{ marginTop: "18px" }}
            >
              Deployment Readiness
            </StatLabel>

            <ProgressTrack>
              <ProgressFill $value={100} />
            </ProgressTrack>
          </Panel>
        </ContentGrid>
      </DashboardContainer>

      <Footer />
    </DashboardPage>
  );
}