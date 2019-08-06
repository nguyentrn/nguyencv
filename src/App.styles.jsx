import styled from "styled-components";
import { devices } from "./style/devices";
import { theme } from "./style/theme";

export const AppContainer = styled.div`
  height: 100vh;
  background: ${theme.gradient};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavPageContainer = styled.div`
  display: flex;
  width: 95%;
  height: 100%;
  flex-direction: column;

  @media only screen and ${devices.mobile} {
    margin: auto;
    width: 400px;
  }
  @media only screen and ${devices.tablet} {
    margin: auto;
    width: 500px;
    height: 94%;
  }
  @media only screen and ${devices.laptop} {
    margin: 0.5% auto 0;

    flex-direction: row;
    width: 990px;
    overflow: visible;
  }
  @media only screen and ${devices.widescreen} {
    width: 1150px;
  }
  @media only screen and ${devices.superwidescreen} {
    width: 80%;
  }

  @media (orientation: landscape) and (max-width: 1023px) and (max-height: 500px) {
    width: 90%;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0 0 0.5rem 0.5rem;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  & > div {
    height: 50%;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: ${theme.light};
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: 2px;
    background-color: ${theme.light};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${theme.light};
    background-image: -webkit-linear-gradient(
      top,
      ${theme.lighterColor} 0%,
      ${theme.neutralColor} 50%,
      ${theme.secondaryColor} 51%,
      ${theme.primaryColor} 100%
    );
  }

  @media only screen and ${devices.mobile} {
    margin: auto;
    width: 400px;

    height: 95%;
  }
  @media only screen and ${devices.tablet} {
    margin: auto;
    width: 500px;
    height: 90%;
  }
  @media only screen and ${devices.laptop} {
    flex-direction: row;
    width: 990px;
    overflow: visible;
  }
  @media only screen and ${devices.widescreen} {
    width: 1100px;
  }
  @media only screen and ${devices.superwidescreen} {
    width: 100%;
  }

  @media (orientation: landscape) and (max-width: 1023px) {
    width: 100%;
  }
`;
