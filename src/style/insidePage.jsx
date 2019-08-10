import styled from "styled-components";
import { theme } from "./theme";
import { devices } from "./devices";

export const InsidePage = styled.div`
  padding: 1.5rem 1.5rem 5rem;
  display: flex;
  font-size: 0.8rem;
  flex-direction: column;
  min-height: 10rem;
  background-color: ${theme.light};
  line-height: 1.6rem;

  & > div {
    width: 100%;
    margin: 0.5rem 0;
  }

  & > h3 {
    font-size: 1.4rem;
    span {
      color: ${theme.secondaryColor};
    }
  }
`;

export const FirstButton = styled.span`
  position: absolute;
  bottom: 3.5rem;
  right: 1rem;

  @media ${devices.laptop} {
    bottom: 1rem;
  }
`;

export const SecondButton = styled.span`
  position: absolute;
  right: 8rem;
  bottom: 3.5rem;

  @media ${devices.laptop} {
    bottom: 1rem;
  }
`;
