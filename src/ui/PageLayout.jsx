import styled from "styled-components";

export const Page = styled.main`
  min-height: 100vh;
  padding: 40px 24px;
  color: ${({ theme }) => theme.colors.text};
  background:
    radial-gradient(circle at 90% 5%, rgba(230, 190, 120, 0.2), transparent 24%),
    radial-gradient(circle at 8% 18%, rgba(30, 70, 115, 0.32), transparent 30%),
    linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.bg},
      #07111f 48%,
      ${({ theme }) => theme.colors.bg}
    );
`;

export const Container = styled.div`
  width: min(1100px, 100%);
  margin: 0 auto;
`;

export const Header = styled.div`
  margin-bottom: 28px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 34px;
  font-weight: 900;
`;

export const Subtitle = styled.p`
  margin: 8px 0 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 13px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 18px;
`;