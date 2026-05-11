import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.58);
  backdrop-filter: blur(8px);
`;

export const ModalCard = styled.div`
  width: min(420px, 100%);
  padding: 26px;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(6, 16, 30, 0.96);
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.45);
`;

export const ModalIcon = styled.div`
  width: 54px;
  height: 54px;
  margin-bottom: 18px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background: rgba(255, 128, 128, 0.12);
  color: #ff9b9b;
  font-size: 24px;
`;

export const ModalTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 22px;
`;

export const ModalText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 14px;
  line-height: 1.7;
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

export const ModalButton = styled.button`
  flex: 1;
  height: 44px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid
    ${({ $danger, theme }) =>
      $danger ? "rgba(255,128,128,0.45)" : theme.colors.border};
  background: ${({ $danger }) =>
    $danger ? "rgba(255,128,128,0.14)" : "rgba(255,255,255,0.04)"};
  color: ${({ $danger }) => ($danger ? "#ff9b9b" : "#c8d2df")};
  font-weight: 800;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;