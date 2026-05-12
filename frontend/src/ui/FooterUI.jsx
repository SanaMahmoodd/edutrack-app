import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: min(1180px, calc(100% - 32px));
  margin: 60px auto 0;
  padding: 28px;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background:
    radial-gradient(circle at 92% 10%, rgba(231, 189, 105, 0.14), transparent 24%),
    rgba(6, 16, 30, 0.72);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(16px);
`;

export const FooterTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 28px;
  flex-wrap: wrap;
`;

export const FooterBrand = styled.div`
  max-width: 420px;
`;

export const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

export const BrandIcon = styled.img`
  width: 54px;
  height: 54px;
  object-fit: cover;

  padding: 8px;
  border-radius: 16px;

  background:
    linear-gradient(
      135deg,
      rgba(231, 189, 105, 0.22),
      rgba(231, 189, 105, 0.08)
    );

  border: 1px solid ${({ theme }) => theme.colors.border};

  box-shadow:
    0 10px 24px rgba(231, 189, 105, 0.18),
    inset 0 1px 0 rgba(255,255,255,0.08);
`;

export const BrandName = styled.h3`
  margin: 0;
  font-size: 22px;
`;

export const FooterText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 13px;
  line-height: 1.8;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 42px;
  flex-wrap: wrap;
`;

export const LinkGroup = styled.div`
  min-width: 130px;
`;

export const LinkTitle = styled.h4`
  margin: 0 0 12px;
  color: ${({ theme }) => theme.colors.goldLight};
  font-size: 14px;
`;

export const FooterLink = styled.a`
  display: block;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.muted};
  text-decoration: none;
  font-size: 13px;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.goldLight};
    transform: translateX(3px);
  }
`;

export const FooterBottom = styled.div`
  margin-top: 26px;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 12px;
`;

export const StatusBadge = styled.span`
  color: ${({ theme }) => theme.colors.goldLight};
  font-weight: 700;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
`;

export const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  text-decoration: none;

  color: ${({ theme }) => theme.colors.goldLight};

  background: rgba(255, 255, 255, 0.04);

  border: 1px solid rgba(231, 189, 105, 0.22);

  transition: 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 10px 25px rgba(231, 189, 105, 0.15);
  }
`;