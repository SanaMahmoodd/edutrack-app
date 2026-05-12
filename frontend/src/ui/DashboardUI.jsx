import styled from "styled-components";

export const DashboardPage = styled.main`
  min-height: 100vh;
  padding: 28px 24px 50px;
  color: ${({ theme }) => theme.colors.text};
  background:
    radial-gradient(circle at 88% 8%, rgba(231, 189, 105, 0.22), transparent 26%),
    radial-gradient(circle at 8% 16%, rgba(30, 70, 115, 0.35), transparent 30%),
    linear-gradient(135deg, ${({ theme }) => theme.colors.bg}, #07111f 48%, ${({ theme }) => theme.colors.bg});
`;

export const DashboardContainer = styled.div`
  width: min(1180px, 100%);
  margin: 34px auto 0;
`;

export const Hero = styled.section`
  position: relative;
  overflow: hidden;
  padding: 42px;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background:
    radial-gradient(circle at 84% 18%, rgba(231, 189, 105, 0.16), transparent 22%),
    radial-gradient(circle at 10% 18%, rgba(42, 90, 145, 0.2), transparent 28%),
    rgba(6, 16, 30, 0.88);
  box-shadow: ${({ theme }) => theme.shadow.card};

  &::before {
    content: "";
    position: absolute;
    right: -90px;
    top: -90px;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    border: 1px solid rgba(231, 189, 105, 0.22);
    animation: floatCircle 6s ease-in-out infinite alternate;
  }

  &::after {
    content: "";
    position: absolute;
    right: 70px;
    top: 74px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.goldLight};
    box-shadow:
      0 0 18px ${({ theme }) => theme.colors.goldLight},
      -220px 95px 0 rgba(231, 189, 105, 0.45),
      -520px -15px 0 rgba(231, 189, 105, 0.35),
      -760px 120px 0 rgba(231, 189, 105, 0.5);
    animation: twinkleHero 2.5s ease-in-out infinite alternate;
  }

  @keyframes floatCircle {
    from {
      transform: translateY(0) scale(1);
      opacity: 0.35;
    }

    to {
      transform: translateY(18px) scale(1.04);
      opacity: 0.75;
    }
  }

  @keyframes twinkleHero {
    from {
      opacity: 0.35;
      transform: scale(0.8);
    }

    to {
      opacity: 1;
      transform: scale(1.2);
    }
  }
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(32px, 5vw, 54px);
  font-weight: 700;
  letter-spacing: -2px;
`;

export const HeroText = styled.p`
  margin: 12px 0 0;
  max-width: 620px;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.7;
  font-size: 14px;
`;

export const ActionRow = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;

export const GhostButton = styled.button`
  height: 48px;
  padding: 0 22px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(8, 21, 39, 0.82);
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.goldLight};
    border-color: ${({ theme }) => theme.colors.gold};
    transform: translateY(-2px);
  }
`;

export const StatsGrid = styled.section`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 18px;
`;

export const StatCard = styled.div`
  padding: 22px;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(6, 16, 30, 0.9);
  box-shadow: 0 22px 55px rgba(0, 0, 0, 0.35);
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadow.gold};
  }
`;

export const StatIcon = styled.div`
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  color: #10141c;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.goldLight}, ${({ theme }) => theme.colors.gold});
  font-size: 20px;
  margin-bottom: 18px;
`;

export const StatValue = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: 600;
`;

export const StatLabel = styled.p`
  margin: 6px 0 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 13px;
`;

export const ContentGrid = styled.section`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Panel = styled.div`
  padding: 24px;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(6, 16, 30, 0.9);
`;

export const PanelTitle = styled.h3`
  margin: 0 0 16px;
  font-size: 20px;
`;

export const ActivityItem = styled.div`
  padding: 14px 0;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  &:last-child {
    border-bottom: none;
  }
`;

export const ActivityText = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`;

export const ActivityTime = styled.span`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 12px;
`;

export const ProgressTrack = styled.div`
  height: 12px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
  margin-top: 12px;
`;

export const ProgressFill = styled.div`
  width: ${({ $value }) => $value}%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.goldLight}, ${({ theme }) => theme.colors.gold});
`;

export const DashboardIllustration = styled.div`
  width: 100%;
  height: 220px;
  margin-top: 18px;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(255, 255, 255, 0.03);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const IllustrationText = styled.p`
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.7;
  font-size: 13px;
`;

export const FullWidthSection = styled.section`
  margin-top: 28px;
`;

export const ChartWrapper = styled.div`
  width: 100%;
  height: 260px;
  margin-top: 18px;
`;

export const ChartTooltipStyle = {
  background: "#06101e",
  border: "1px solid rgba(231, 189, 105, 0.22)",
  borderRadius: "10px",
  color: "#fff",
};

export const FloatingGlow = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    left: 8%;
    bottom: 14%;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: rgba(231, 189, 105, 0.08);
    filter: blur(50px);
  }

  &::after {
    content: "";
    position: absolute;
    right: 12%;
    top: 16%;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: rgba(52, 115, 190, 0.1);
    filter: blur(60px);
  }
`;

export const MiniBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 14px;
  padding: 7px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.goldLight};

  border: 1px solid ${({ theme }) => theme.colors.border};

  background: rgba(255, 255, 255, 0.04);
`;