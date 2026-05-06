/* eslint-disable no-unused-vars */
import styled from "styled-components";

export const NotificationWrapper = styled.div`
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 999;

  min-width: 300px;
  max-width: 380px;

  padding: 15px 18px;

  border-radius: ${({ theme }) => theme.radius.md};

  border: 1px solid
    ${({ $type, theme }) =>
      $type === "error"
        ? "rgba(255, 128, 128, 0.28)"
        : "rgba(231, 189, 105, 0.22)"};

  background:
    ${({ $type }) =>
      $type === "error"
        ? "linear-gradient(135deg, rgba(255, 128, 128, 0.13), rgba(30, 10, 10, 0.88))"
        : "linear-gradient(135deg, rgba(231, 189, 105, 0.13), rgba(7, 17, 31, 0.96))"};

  color: ${({ $type, theme }) =>
    $type === "error"
      ? "#ffb1b1"
      : theme.colors.goldLight};

  backdrop-filter: blur(14px);

  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.35),
    0 0 20px
      ${({ $type }) =>
        $type === "error"
          ? "rgba(255, 128, 128, 0.08)"
          : "rgba(231, 189, 105, 0.08)"};

  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;

  animation: slideDown 0.35s ease;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-14px) scale(0.96);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;