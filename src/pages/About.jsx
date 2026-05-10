import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Page, Container } from "../ui/PageLayout";

import {
  AboutHero,
  HeroBadge,
  AboutTitle,
  AboutText,
  AboutGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
  SplitSection,
  ListItem,
  ListLabel,
  ListValue,
} from "../ui/AboutUI";

export default function About() {
  return (
    <Page>
      <Navbar />

      <Container>
        <AboutHero>
          <HeroBadge>Academic Management Platform</HeroBadge>

          <AboutTitle>About EduTrack</AboutTitle>

          <AboutText>
            EduTrack is a modern student management dashboard designed for
            schools, universities, and training programs. The system helps
            academic teams manage student records, organize courses, monitor
            academic performance, generate reports, and keep administrative
            workflows clear and efficient through one professional interface.
          </AboutText>
        </AboutHero>

        <AboutGrid>
          <FeatureCard>
            <FeatureIcon>🎓</FeatureIcon>
            <FeatureTitle>Student Management</FeatureTitle>
            <FeatureText>
              The system supports student listing, adding, editing, deleting,
              searching, filtering, pagination, and individual student profile
              pages. This makes student data easier to organize and review.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>📚</FeatureIcon>
            <FeatureTitle>Courses & Academic Records</FeatureTitle>
            <FeatureText>
              EduTrack includes course management features that allow academic
              teams to track courses, connect students to learning areas, and
              maintain structured course information.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>📊</FeatureIcon>
            <FeatureTitle>Reports & Insights</FeatureTitle>
            <FeatureText>
              The reports page summarizes total students, course distribution,
              performance indicators, and allows exporting student data for
              academic or administrative use.
            </FeatureText>
          </FeatureCard>
        </AboutGrid>

        <SplitSection>
          <FeatureCard>
            <FeatureTitle>System Capabilities</FeatureTitle>

            <ListItem>
              <ListLabel>Authentication</ListLabel>
              <ListValue>Enabled</ListValue>
            </ListItem>

            <ListItem>
              <ListLabel>Protected Routes</ListLabel>
              <ListValue>Active</ListValue>
            </ListItem>

            <ListItem>
              <ListLabel>API Integration</ListLabel>
              <ListValue>Connected</ListValue>
            </ListItem>

            <ListItem>
              <ListLabel>Deployment</ListLabel>
              <ListValue>Vercel Live</ListValue>
            </ListItem>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>Technology Stack</FeatureTitle>

            <FeatureText>
              EduTrack was built using React, React Router, Styled Components,
              Axios, LocalStorage, Vite, and Vercel. The UI follows a reusable
              design system with shared theme values, consistent colors,
              responsive layouts, and reusable components.
            </FeatureText>
          </FeatureCard>
        </SplitSection>
      </Container>

      <Footer />
    </Page>
  );
}