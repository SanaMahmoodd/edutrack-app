import { useNavigate } from "react-router-dom";

import {
  FooterWrapper,
  FooterTop,
  FooterBrand,
  BrandRow,
  BrandIcon,
  BrandName,
  FooterText,
  FooterLinks,
  LinkGroup,
  LinkTitle,
  FooterLink,
  FooterBottom,
  StatusBadge,
} from "../ui/FooterUI";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <FooterWrapper>
      <FooterTop>
        <FooterBrand>
          <BrandRow>
            <BrandIcon>✦</BrandIcon>
            <BrandName>EduTrack</BrandName>
          </BrandRow>

          <FooterText>
            A professional student management dashboard for organizing academic
            records, courses, reports, and administrative workflows.
          </FooterText>
        </FooterBrand>

        <FooterLinks>
          <LinkGroup>
            <LinkTitle>System</LinkTitle>
            <FooterLink onClick={() => navigate("/dashboard")}>Dashboard</FooterLink>
            <FooterLink onClick={() => navigate("/students")}>Students</FooterLink>
            <FooterLink onClick={() => navigate("/courses")}>Courses</FooterLink>
          </LinkGroup>

          <LinkGroup>
            <LinkTitle>Management</LinkTitle>
            <FooterLink onClick={() => navigate("/reports")}>Reports</FooterLink>
            <FooterLink onClick={() => navigate("/settings")}>Settings</FooterLink>
            <FooterLink onClick={() => navigate("/profile")}>Profile</FooterLink>
          </LinkGroup>

          <LinkGroup>
            <LinkTitle>Project</LinkTitle>
            <FooterLink onClick={() => navigate("/about")}>About</FooterLink>
            <FooterLink>Vercel Live</FooterLink>
            <FooterLink>API Connected</FooterLink>
          </LinkGroup>
        </FooterLinks>
      </FooterTop>

      <FooterBottom>
        <span>© 2026 EduTrack - Designed & Developed by Sana Saleh</span>
        <span>
          Status: <StatusBadge>Production Ready</StatusBadge>
        </span>
      </FooterBottom>
    </FooterWrapper>
  );
}