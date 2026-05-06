import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 180px;
  gap: 12px;
  margin-bottom: 24px;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  height: 50px;
  padding: 0 14px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  outline: none;
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 13px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

export const StudentName = styled.h3`
  margin: 0 0 8px;
`;

export const StudentEmail = styled.p`
  margin: 0 0 16px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 13px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

export const ActionButton = styled.button`
  flex: 1;
  height: 38px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ $danger }) =>
    $danger ? "rgba(255, 128, 128, 0.1)" : "rgba(8, 21, 39, 0.82)"};
  color: ${({ $danger }) => ($danger ? "#ff9b9b" : "#c8d2df")};
  cursor: pointer;
`;

export const SmallButtonWrap = styled.div`
  width: 170px;
  margin-bottom: 20px;
`;