import styled from "styled-components";

export const AboutHero = styled.section`
  position: relative;
  overflow: hidden;
  margin-bottom: 34px;
  padding: 42px;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background:
    radial-gradient(circle at 82% 12%, rgba(231, 189, 105, 0.18), transparent 24%),
    radial-gradient(circle at 12% 20%, rgba(42, 90, 145, 0.22), transparent 28%),
    rgba(6, 16, 30, 0.82);
  box-shadow: ${({ theme }) => theme.shadow.card};

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  &::before {
    width: 220px;
    height: 220px;
    right: -70px;
    top: -70px;
    border: 1px solid rgba(231, 189, 105, 0.22);
  }

  &::after {
    width: 9px;
    height: 9px;
    left: 42px;
    bottom: 38px;
    background: ${({ theme }) => theme.colors.goldLight};
    box-shadow:
      0 0 18px ${({ theme }) => theme.colors.goldLight},
      120px -180px 0 rgba(231, 189, 105, 0.55),
      360px -60px 0 rgba(231, 189, 105, 0.35),
      760px -160px 0 rgba(231, 189, 105, 0.45);
    animation: glow 2.5s ease-in-out infinite alternate;
  }

  @keyframes glow {
    from {
      opacity: 0.35;
      transform: scale(0.9);
    }

    to {
      opacity: 1;
      transform: scale(1.15);
    }
  }
`;

export const HeroBadge = styled.span`
  display: inline-flex;
  margin-bottom: 18px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.goldLight};
  background: rgba(231, 189, 105, 0.08);
  font-size: 12px;
  font-weight: 700;
`;

export const AboutTitle = styled.h1`
  position: relative;
  z-index: 2;
  margin: 0;
  max-width: 760px;
  font-size: clamp(36px, 5vw, 58px);
  line-height: 1.05;
  font-weight: 900;
  letter-spacing: -2px;
`;

export const AboutText = styled.p`
  position: relative;
  z-index: 2;
  max-width: 850px;
  margin: 18px 0 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 15px;
  line-height: 1.8;
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
`;

export const FeatureCard = styled.div`
  position: relative;
  overflow: hidden;
  padding: 26px;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(6, 16, 30, 0.82);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.28);
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

export const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  margin-bottom: 18px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  color: #10141c;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.goldLight},
    ${({ theme }) => theme.colors.gold}
  );
  font-size: 22px;
`;

export const FeatureTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 20px;
`;

export const FeatureText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 13px;
  line-height: 1.75;
`;

export const SplitSection = styled.section`
  margin-top: 26px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.div`
  padding: 14px 0;
  display: flex;
  justify-content: space-between;
  gap: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);

  &:last-child {
    border-bottom: none;
  }
`;

export const ListLabel = styled.span`
  color: ${({ theme }) => theme.colors.muted};
`;

export const ListValue = styled.span`
  color: ${({ theme }) => theme.colors.goldLight};
  font-weight: 800;
`;