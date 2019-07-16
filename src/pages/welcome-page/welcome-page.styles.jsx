import styled from "styled-components";
import { devices } from "../../ultilities/devices";

export const WelcomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: none;

  @media ${devices.mobile} {
  }
  @media ${devices.tablet} {
  }
  @media ${devices.laptop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    /* width: 100%; */
    background-color: #fff;
  }
  @media ${devices.widescreen} {
  }
`;
