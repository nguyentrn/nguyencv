import styled from "styled-components";
import { devices } from "../../style/devices";
import { theme } from "../../style/theme";

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
    padding: 1rem;
    height: 90%;
    width: 100%;
    margin: auto;
    /* border-radius: 0 0.1rem 0.1rem 0;
    box-shadow: 0.2rem 0.2rem 1rem 1rem rgba(0, 0, 0, 0.5); */
    background-color: ${theme.light};
  }
  @media ${devices.widescreen} {
  }
`;
