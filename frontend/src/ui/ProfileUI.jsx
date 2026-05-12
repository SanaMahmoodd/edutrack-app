import styled from "styled-components";

export const ProfileAvatar = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 30px;
  overflow: hidden;

  display: grid;
  place-items: center;

  margin-bottom: 20px;

  background: linear-gradient(
    135deg,
    #f5d98c,
    #e7bd69
  );

  color: #10141c;
  font-size: 42px;
  font-weight: 900;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UploadLabel = styled.label`
  display: inline-flex;

  margin-top: 18px;
  margin-bottom: 18px;

  padding: 11px 16px;

  border-radius: 10px;

  border: 1px solid
    rgba(231, 189, 105, 0.22);

  color: #f5d98c;

  cursor: pointer;

  font-size: 13px;
  font-weight: 700;

  transition: 0.25s ease;

  &:hover {
    border-color: ${({ theme }) =>
      theme.colors.gold};

    background: rgba(255,255,255,0.04);
  }

  input {
    display: none;
  }
`;

export const ProfileGrid = styled.div`
  margin-top: 24px;
`;

export const StudentAvatar = styled.div`
  width: 84px;
  height: 84px;

  border-radius: 26px;

  display: grid;
  place-items: center;

  margin-bottom: 20px;

  background: linear-gradient(
    135deg,
    #f5d98c,
    #e7bd69
  );

  color: #10141c;

  font-size: 34px;
  font-weight: 900;

  box-shadow:
    0 12px 28px
    rgba(231, 189, 105, 0.28);
`;