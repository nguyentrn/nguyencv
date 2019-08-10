import styled, { keyframes, css } from "styled-components";
import { theme } from "../../style/theme";
import { devices } from "../../style/devices";

const pounding = keyframes`{


  0% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }}`;

const FooterContainer = css`
  text-align: center;
  color: ${theme.light};
  display: flex;
  height: 3rem;
  align-items: center;

  p {
    font-size: 0.9rem;
    font-weight: 100;
    margin-right: 0.4rem;
    letter-spacing: 0.1rem;
    display: inline-block;
    z-index: 2;
  }
`;

export const FooterDesktopContainer = styled.div`
  /* @media ${devices.mobile} {
    display: none;
  } */

  display: none;
  @media ${devices.laptop} {
    ${FooterContainer}
  }
`;
export const FooterMobileContainer = styled.div`
  ${FooterContainer}
  justify-content:center;
  @media ${devices.laptop} {
    display: none;
  }
`;

export const HeartIcon = styled.span`
  width: 1rem;
  height: 0.9rem;
  display: inline-block;
  overflow: hidden;
  animation: ${pounding} 0.5s linear infinite alternate;
  line-height: 1rem;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 0.5rem;
    height: 0.8rem;
    background: #fc2e5a;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  &:before {
    left: 0.5rem;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;
