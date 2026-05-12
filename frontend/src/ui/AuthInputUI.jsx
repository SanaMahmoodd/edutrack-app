import styled from "styled-components";

export const FieldGroup = styled.div`
  margin-bottom: 12px;
`;

export const InputBox = styled.div`
  position: relative;
  height: 45px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.sm};
  color: #8fa2ba;
  background: ${({ theme }) => theme.colors.input};

  border: 1px solid
    ${({ error, theme }) =>
      error
        ? "rgba(255,128,128,0.75)"
        : theme.colors.border};

  transition: 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    background: rgba(11, 27, 50, 0.9);
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.gold};

    box-shadow:
      0 0 0 3px rgba(231, 189, 105, 0.08),
      0 0 18px rgba(231, 189, 105, 0.2);
  }
`;

export const Icon = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Input = styled.input`
  flex: 1;
  height: 100%;
  padding-left: 12px;
  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 12px;

  &::placeholder {
    color: #9aaabe;
  }
`;

export const ErrorText = styled.p`
  margin: 6px 0 0 4px;
  color: #ff8b8b;
  font-size: 11px;
`;