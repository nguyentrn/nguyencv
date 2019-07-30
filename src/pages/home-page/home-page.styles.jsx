import styled, { keyframes } from "styled-components";
import { theme } from "../../style/theme";
import { devices } from "../../style/devices";
import { DividerContainer } from "../../components/divider/divider.styles";

const textclip = keyframes`
  to {
   background-position:200% center
  }
 `;

export const HomePageContainer = styled.div`
  background: ${theme.light};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.dark};
  min-height: 100%;
  z-index: 2;

  @media ${devices.laptop} {
    border-radius: 0.3rem;
    box-shadow: 0.1rem 0.1rem 2rem 0.5rem rgba(0, 0, 0, 0.2);

    width: 33%;
    min-width: 33%;
  }
  @media ${devices.widescreen} {
    width: 30%;
    min-width: 30%;
  }
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("https://i.pinimg.com/originals/44/6e/3b/446e3b79395a287ca32f7977dd83b290.jpg")
    center center / cover;
  clip-path: polygon(0 0, 100% 0, 100% 31%, 50% 38%, 0 31%);
  @media ${devices.tablet} {
    clip-path: polygon(0 0, 100% 0, 100% 31%, 50% 38%, 0 31%);
  }
`;

export const AvatarContainer = styled.div`
  width: 50%;
  z-index: 1;
  position: relative;
  bottom: 2%;

  img {
    border-radius: 50%;
    box-shadow: 0.5rem 0.5rem 1rem 0.3rem rgba(0, 0, 0, 0.1);
  }

  @media ${devices.tablet} {
    width: 35%;
  }
  @media ${devices.laptop} {
    width: 50%;
  }
`;

export const InfoContainer = styled.div`
  text-align: center;
  z-index: 1;
  position: relative;
  bottom: 3%;

  h1 {
    line-height: 2.2rem;
    letter-spacing: 0.2rem;
    font-weight: 300;
  }

  h3 {
    & > svg {
      cursor: pointer;
      margin: 0 0.3rem;
      z-index: 10;
    }
    margin-top: 0rem;
  }
  @media ${devices.laptop} {
    bottom: 4%;
  }
`;
export const StyledTypist = styled.div`
  margin: 1rem;
  color: ${theme.light};
  font-weight: 300;
  background: linear-gradient(
    to right,
    ${theme.primaryColor} 0%,
    ${theme.secondaryColor} 25%,
    ${theme.dark} 50%,
    ${theme.neutralColor} 75%,
    ${theme.primaryColor} 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textclip} 13s linear infinite;
  display: inline-block;
  h1 {
    margin-top: 0.8rem;
    font-size: 1.8rem;
  }
  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const TypingDivider = styled(DividerContainer)`
  position: relative;
  height: 1px;
  margin: 0;

  @media ${devices.laptop} {
    display: none;
  }
`;

const sdb06 = keyframes`
  0% {
    transform:  rotateZ(-45deg) translate(-0.2rem, 0.2rem);

  }
  25% {    
    transform:  rotateZ(-45deg) translate(0.02rem, -0.02rem);
  }
  50% {    
    transform:  rotateZ(-45deg) translate(-0.2rem, 0.2rem);
  }
  75% {    
    transform:  rotateZ(-45deg) translate(0.02rem, -0.02rem);
  }
  100% {
    transform:  rotateZ(-45deg) translate(-0.2rem, 0.2rem);
  }
`;

export const ViewMoreButton = styled.div`
  padding-top: 4rem;
  cursor: pointer;

  & > span {
    position: absolute;
    top: 0;
    left: 50%;
    top: 50%;

    width: 1rem;
    height: 1rem;
    margin: -0.75rem -0.5rem;
    border-left: 2px solid ${theme.primaryColor};
    border-bottom: 2px solid ${theme.primaryColor};
    -webkit-transform: rotateZ(-45deg);
    transform: rotateZ(-45deg);
    animation: ${sdb06} 1.5s ease-in infinite;
    box-sizing: border-box;
    border-radius: 0.1rem;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 1.5rem;
  margin-top: 2rem;
  a {
    display: flex;
    font-size: 0.9rem;
    justify-content: center;
    font-weight: bold;
    margin: 1rem 0.6rem;
  }
  div {
    margin-right: 0.5rem;
  }
  h3 {
    vertical-align: bottom;
  }

  @media ${devices.mobile} {
    a {
      margin: 1rem;
    }
  }
  @media ${devices.laptop} {
    bottom: 0;
  }
`;
