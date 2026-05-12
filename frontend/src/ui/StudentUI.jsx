import styled from "styled-components";

export const StudentHeaderCard = styled.div`
  margin-bottom: 42px;
  padding: 28px 30px;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(6, 16, 30, 0.72);
  box-shadow: 0 22px 55px rgba(0, 0, 0, 0.28);
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 260px;
  gap: 14px;
  margin-bottom: 24px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

export const FormButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
  height: 56px;
  padding: 0 16px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  outline: none;
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 14px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 0 0 3px rgba(231, 189, 105, 0.08);
  }
`;

export const ToolsBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: 14px;
  margin-bottom: 18px;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const Select = styled.select`
  height: 56px;
  padding: 0 44px 0 16px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  outline: none;
  background-color: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 14px;
  cursor: pointer;

  appearance: none;
  background-image:
    linear-gradient(45deg, transparent 50%, ${({ theme }) => theme.colors.goldLight} 50%),
    linear-gradient(135deg, ${({ theme }) => theme.colors.goldLight} 50%, transparent 50%);
  background-position:
    calc(100% - 24px) 24px,
    calc(100% - 17px) 24px;
  background-size: 7px 7px, 7px 7px;
  background-repeat: no-repeat;

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
  word-break: break-word;
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
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: ${({ $danger, theme }) =>
      $danger ? "rgba(255, 128, 128, 0.7)" : theme.colors.gold};
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-top: 32px;
  flex-wrap: wrap;
`;

export const PageButton = styled.button`
  min-width: ${({ $wide }) => ($wide ? "105px" : "46px")};
  height: 46px;
  padding: 0 16px;
  border-radius: 12px;
  border: 1px solid
    ${({ $active, theme }) => ($active ? theme.colors.gold : theme.colors.border)};
  background: ${({ $active, theme }) =>
    $active
      ? `linear-gradient(135deg, ${theme.colors.goldLight}, ${theme.colors.gold})`
      : "rgba(8, 21, 39, 0.82)"};
  color: ${({ $active }) => ($active ? "#10141c" : "#c8d2df")};
  font-weight: 800;
  cursor: pointer;
  transition: 0.25s ease;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }
`;