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
  background: url("/background.jpg")
    top left / 105%;
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
  @media (max-height: 500px) {
    width: 20%;
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
  /* top:1%; */
  display: flex;
  flex-direction:column;
  justify-content:space-around;
height:40%;
  h1 {
    line-height: 2.2rem;
    letter-spacing: 0.2rem;
    font-weight: 300;
    span {
    display:block;
    }
  }
/*   
  &>span {      
    margin-bottom: 0.75rem;
  } */
  @media ${devices.laptop} {
    /* bottom: 4%; */
    /* &>span {
    margin-top: 0.5rem;
    margin-bottom: 1.75rem;
  } */

  @media (orientation: landscape) and (max-height: 450px) {
    &>span {
      display: none;
    }
  }
/* 
  @media (orientation: landscape) and (max-width: 400px) {
    bottom: 7%;
  } */
`;

export const StyledTypist = styled.div`
  /* margin: 1rem; */
  color: ${theme.light};
  font-weight: 300;
  background: linear-gradient(
    to right,
    ${theme.primaryColor} 0%,
    ${theme.secondaryColor} 20%,
    ${theme.primaryColor} 40%,
    ${theme.darkerColor} 50%,
    ${theme.primaryColor} 60%,
    ${theme.neutralColor} 80%,
    ${theme.primaryColor} 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textclip} 10s linear infinite;
  display: inline-block;
  h1 {
    margin-top: 0.8rem;
    font-size: 1.8rem;
    &:last-child {
      margin-top: 0;
      font-size: 1rem;
      letter-spacing: 0.001rem;
      font-weight: bold;
      &::first-letter {
        display: none;
      }
    }
  }
`;

export const DescriptionContainer = styled.div`
z-index:5;
font-size: 0.9rem;
font-weight: 600;
  display: flex;
  width: 100%;
  justify-content: space-around;
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
  @media  (max-height: 600px) {

  justify-content: space-between;
  }
  @media (orientation: landscape) and (max-height: 360px) {
      display: none;
    
  }
/* 
  

  @media ${devices.laptop} {
    bottom: 0;
  }  */
`;
