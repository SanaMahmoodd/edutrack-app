import styled, { keyframes, css } from "styled-components";

const floatHero = keyframes`
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-9px);
  }
`;

const twinkle = keyframes`
  from {
    opacity: 0.35;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1.25);
  }
`;

const pulseCircle = keyframes`
  0%, 100% {
    opacity: 0.35;
    transform: scale(1);
  }

  50% {
    opacity: 0.65;
    transform: scale(1.03);
  }
`;

const rotateCircle = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const softGlow = keyframes`
  from {
    opacity: 0.45;
    transform: translateY(0);
  }

  to {
    opacity: 0.85;
    transform: translateY(10px);
  }
`;

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

export const Agree = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 11px 0 16px;
  color: #aebac9;
  font-size: 10px;

  input {
    width: 13px;
    height: 13px;
    accent-color: ${({ theme }) => theme.colors.gold};
  }

  b {
    color: #f0c86f;
    font-weight: 700;
  }
`;

export const OrDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  margin: ${({ $login }) => ($login ? "30px 0 20px" : "18px 0 12px")};
  color: #8f9eb2;
  font-size: 10px;

  span {
    height: 1px;
    flex: 1;
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const GoogleButton = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 9px;
  border: 1px solid rgba(142, 164, 190, 0.14);
  background: rgba(8, 21, 39, 0.82);
  color: #c8d2df;
  font-family: inherit;
  font-size: 12px;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    border-color: rgba(231, 189, 105, 0.4);
    background: rgba(11, 27, 50, 0.9);
  }
`;

export const AuthRight = styled.div`
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: 58px 38px 28px;
  background:
    radial-gradient(circle at 80% 7%, rgba(242, 199, 122, 0.17), transparent 28%),
    radial-gradient(circle at 50% 42%, rgba(29, 58, 98, 0.54), transparent 36%),
    #050c17;

  &::before {
    content: "";
    position: absolute;
    right: -32px;
    top: -75px;
    width: 185px;
    height: 185px;
    border-radius: 45%;
    background: rgba(222, 185, 126, 0.13);
    filter: blur(10px);
    animation: ${softGlow} 5s ease-in-out infinite alternate;
  }

  &::after {
    content: "";
    position: absolute;
    left: 120px;
    top: 210px;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(39, 76, 120, 0.28), transparent 68%);
    filter: blur(16px);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const GoldCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;

  ${({ $big }) =>
    $big &&
    css`
      width: 305px;
      height: 305px;
      top: 56px;
      left: 100px;
      border: 1px solid rgba(225, 176, 92, 0.5);
      animation: ${rotateCircle} 14s linear infinite;
    `}

  ${({ $small }) =>
    $small &&
    css`
      width: 210px;
      height: 210px;
      top: 94px;
      left: 240px;
      border: 1px solid rgba(255, 255, 255, 0.055);
      animation: ${pulseCircle} 4s ease-in-out infinite;
    `}
`;

export const Spark = styled.span`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #e8bd67;
  box-shadow: 0 0 18px #e8bd67;
  animation: ${twinkle} 2.5s ease-in-out infinite alternate;

  ${({ $one }) =>
    $one &&
    css`
      top: 84px;
      left: 112px;
    `}

  ${({ $two }) =>
    $two &&
    css`
      top: 121px;
      right: 125px;
      animation-delay: 0.7s;
    `}

  ${({ $three }) =>
    $three &&
    css`
      bottom: 138px;
      right: 47px;
      animation-delay: 1.2s;
    `}
`;

export const Line = styled.span`
  position: absolute;
  width: 44px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(222, 177, 91, 0.58),
    transparent
  );
  transform: rotate(-38deg);
  opacity: 0.75;

  ${({ $one }) =>
    $one &&
    css`
      left: 118px;
      top: 230px;
    `}

  ${({ $two }) =>
    $two &&
    css`
      right: 35px;
      bottom: 182px;
    `}
`;

export const HeroWrap = styled.div`
  position: relative;
  z-index: 3;
  width: 310px;
  height: 275px;
  margin: 24px auto 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${floatHero} 4s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    width: 270px;
    height: 270px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 205, 122, 0.25), transparent 70%);
    filter: blur(40px);
    z-index: -2;
  }

  img {
    width: 500px;
    height: auto;
    object-fit: contain;
    mix-blend-mode: screen;
    filter:
      brightness(1.12)
      contrast(1.12)
      saturate(1.08)
      drop-shadow(0 32px 40px rgba(0, 0, 0, 0.7));
  }
`;

export const AuthRightTitle = styled.h2`
  position: relative;
  z-index: 4;
  margin: 0 0 10px;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: -0.9px;
`;

export const RightText = styled.p`
  position: relative;
  z-index: 4;
  margin: 0;
  color: #aab8ca;
  font-size: 13px;
  line-height: 1.65;
`;