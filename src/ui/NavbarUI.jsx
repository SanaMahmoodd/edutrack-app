import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  position: sticky;
  top: 18px;
  z-index: 50;
  width: min(1180px, calc(100% - 32px));
  margin: 18px auto 0;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: rgba(6, 16, 30, 0.72);
  border: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(16px);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 900;
  font-size: 18px;
`;

export const LogoIcon = styled.span`
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  color: #10141c;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.goldLight}, ${({ theme }) => theme.colors.gold});
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const LinkItem = styled(NavLink)`
  padding: 10px 14px;
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.muted};
  text-decoration: none;
  font-size: 13px;
  transition: 0.25s ease;

  &.active,
  &:hover {
    color: ${({ theme }) => theme.colors.goldLight};
    background: rgba(231, 189, 105, 0.1);
  }
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.div`
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #10141c;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.goldLight}, ${({ theme }) => theme.colors.gold});
  font-weight: 900;
`;

export const LogoutButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(8, 21, 39, 0.82);
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 14px;
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    color: #ff9b9b;
    border-color: rgba(255, 128, 128, 0.55);
  }
`;