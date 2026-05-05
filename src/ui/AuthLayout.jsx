import styled from "styled-components";

export const AuthPage = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  background:
    radial-gradient(circle at 92% 4%, rgba(230, 190, 120, 0.26), transparent 22%),
    radial-gradient(circle at 8% 15%, rgba(30, 70, 115, 0.38), transparent 32%),
    linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.bg},
      #07111f 48%,
      ${({ theme }) => theme.colors.bg}
    );

  @media (max-width: 900px) {
    height: auto;
    min-height: 100vh;
  }
`;

export const AuthCard = styled.section`
  width: 980px;
  height: 590px;
  display: grid;
  grid-template-columns: 425px 1fr;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(6, 15, 28, 0.94);
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadow.card};

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    grid-template-columns: 1fr;
  }
`;

export const AuthLeft = styled.div`
  padding: ${({ $login }) => ($login ? "80px 45px 26px" : "34px 45px 26px")};
  background: rgba(6, 16, 30, 0.98);
  border-right: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 900px) {
    padding: 32px 24px;
  }
`;

export const AuthTitle = styled.h1`
  margin: 0;
  font-size: 32px;
  line-height: 1;
  font-weight: 600;
  letter-spacing: -1.2px;
`;

export const AuthSubtitle = styled.p`
  margin: ${({ $login }) => ($login ? "14px 0 40px" : "11px 0 25px")};
  color: ${({ theme }) => theme.colors.muted};
  font-size: 12px;
`;