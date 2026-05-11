import { useNavigate } from "react-router-dom";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

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
  SocialLinks,
  SocialIcon,
} from "../ui/FooterUI";

export default function Footer() {
  const navigate = useNavigate();

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/SanaMahmoodd",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com/",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/",
    },
  ];

  return (
    <FooterWrapper>
      <FooterTop>
        <FooterBrand>
          <BrandRow>
            <BrandIcon>✦</BrandIcon>

            <BrandName>
              EduTrack
            </BrandName>
          </BrandRow>

          <FooterText>
            A professional student management dashboard for organizing academic
            records, courses, reports, and administrative workflows.
          </FooterText>
        </FooterBrand>

        <FooterLinks>
          <LinkGroup>
            <LinkTitle>System</LinkTitle>

            <FooterLink onClick={() => navigate("/dashboard")}>
              Dashboard
            </FooterLink>

            <FooterLink onClick={() => navigate("/students")}>
              Students
            </FooterLink>

            <FooterLink onClick={() => navigate("/courses")}>
              Courses
            </FooterLink>
          </LinkGroup>

          <LinkGroup>
            <LinkTitle>Management</LinkTitle>

            <FooterLink onClick={() => navigate("/reports")}>
              Reports
            </FooterLink>

            <FooterLink onClick={() => navigate("/settings")}>
              Settings
            </FooterLink>

            <FooterLink onClick={() => navigate("/profile")}>
              Profile
            </FooterLink>
          </LinkGroup>

          <LinkGroup>
            <LinkTitle>Project</LinkTitle>

            <FooterLink onClick={() => navigate("/about")}>
              About
            </FooterLink>

            <FooterLink>
              Vercel Live
            </FooterLink>

            <FooterLink>
              API Connected
            </FooterLink>
          </LinkGroup>
        </FooterLinks>
      </FooterTop>

      <FooterBottom>
        <span>
          © 2026 EduTrack — Designed & Developed by{" "}
          <StatusBadge>
            Sana Saleh
          </StatusBadge>
        </span>

        <SocialLinks>
          {socialLinks.map((item, index) => (
            <SocialIcon
              key={index}
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              {item.icon}
            </SocialIcon>
          ))}
        </SocialLinks>
      </FooterBottom>
    </FooterWrapper>
  );
}