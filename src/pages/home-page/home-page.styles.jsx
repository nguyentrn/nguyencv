import styled, { keyframes } from "styled-components";
import { theme } from "../../style/theme";
import { devices } from "../../style/devices";

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
    box-shadow: 0.4rem 0.4rem 1.5rem 0.5rem rgba(0, 0, 0, 0.2);
    width: 31%;
    min-width: 31%;
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

  @media (max-height: 450px) {
    clip-path: polygon(0 0, 100% 0, 100% 25%, 50% 32%, 0 25%);
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

  @media (orientation: landscape) and (max-width: 1023px) and (max-height: 500px) {
    width: 20%;
    margin-top: 6%;
  }

  @media (max-height: 340px) {
    width: 35%;
  }
  @media (max-height: 200px) {
    display: none;
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
      z-index: 4;
    }
    margin-top: 0rem;
  }
  @media ${devices.laptop} {
    bottom: 4%;
  }

  @media (orientation: landscape) and (max-height: 450px) {
    h3 {
      display: none;
    }
  }

  @media (orientation: landscape) and (max-width: 400px) {
    bottom: 7%;
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
// -webkit-tap-highlight-color: transparent;

export const DescriptionContainer = styled.div`
font-size: 0.9rem;
font-weight: 600;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  position: absolute;
  bottom: 1.5rem;
  -webkit-tap-highlight-color: transparent;

  a {
    display: flex;
    margin: 0.4rem;
  }

  h3 {
    margin-left: 0.5rem
  }
 

  @media ${devices.laptop} {
    bottom: 0;
    font-size: 0.8rem;

  }  

  @media ${devices.widescreen} {
    font-size: 0.9rem;

  }  


  @media (orientation: landscape) and (max-height: 360px) {
      display: none;
    
  }
/* 
  

  @media ${devices.laptop} {
    bottom: 0;
  }  */
`;
