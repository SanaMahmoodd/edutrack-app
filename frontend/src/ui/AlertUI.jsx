import styled from "styled-components";

const AlertBox = styled.div`
  padding: 12px 14px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: rgba(255, 128, 128, 0.08);
  border: 1px solid rgba(255, 128, 128, 0.35);
  color: #ff9b9b;
  font-size: 12px;
  margin-bottom: 14px;
`;

export default function Alert({ children }) {
  return <AlertBox>{children}</AlertBox>;
}