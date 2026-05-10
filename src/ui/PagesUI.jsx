import styled from "styled-components";

export const PageSection = styled.section`
  margin-top: 28px;
`;

export const PageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 22px;
`;

export const InfoCard = styled.div`
  padding: 22px;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(6, 16, 30, 0.82);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
`;

export const CardTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 18px;
`;

export const CardText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 13px;
  line-height: 1.7;
`;

export const BigValue = styled.h2`
  margin: 8px 0;
  font-size: 34px;
  color: ${({ theme }) => theme.colors.goldLight};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);

  &:last-child {
    border-bottom: none;
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 13px;
`;

export const Value = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  font-size: 13px;
`;

export const PageInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 14px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  outline: none;
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  margin-bottom: 12px;
`;

export const MiniButton = styled.button`
  height: 40px;
  padding: 0 16px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ $danger }) =>
    $danger ? "rgba(255,128,128,0.1)" : "rgba(8,21,39,0.82)"};
  color: ${({ $danger }) => ($danger ? "#ff9b9b" : "#c8d2df")};
  cursor: pointer;
`;