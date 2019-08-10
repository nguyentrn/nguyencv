import styled from "styled-components";
import { devices } from "../../style/devices";
// import { theme } from "../../style/theme";
import { InsidePage } from "../../style/insidePage";

export const WelcomeContainer = styled(InsidePage)`
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
  overflow: hidden;

  @media ${devices.laptop} {
    margin-left: 1rem;
  }
`;
