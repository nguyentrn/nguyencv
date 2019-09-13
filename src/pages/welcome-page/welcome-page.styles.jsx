import styled from "styled-components";
import { devices } from "../../style/devices";
// import { theme } from "../../style/theme";
import InsideCvLayout from "../../style/inside-cv-layout/inside-cv-layout.component";

export const WelcomeContainer = styled(InsideCvLayout)`
  position: relative;
  padding-top: 4rem;
  padding-bottom: 11rem;
  @media ${devices.mobile} {
    padding-bottom: 11rem;
  }
  @media ${devices.mobile} {
    padding-bottom: 11rem;
  }
  @media ${devices.laptop} {
    min-height: 100%;
    padding-bottom: 20rem;
  }
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;

  @media ${devices.laptop} {
    margin-left: 1rem;
  }
`;
