import styled from "styled-components";
import { devices } from "../../style/devices";
import { InsidePage } from "../../style/insidePage";

export const AboutPageContainer = styled(InsidePage)`
  position: relative;
`;

export const DetailMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;

  h4 {
    margin-bottom: 0.2rem;
    letter-spacing: 0.2rem;
  }

  h5 {
    display: flex;
    position: relative;

    justify-content: space-between;

    div {
      position: relative;
    }
  }
  & > div {
    width: 100%;
    margin: 0.5rem 0;
  }
  @media ${devices.laptop} {
    flex-direction: row;
    align-items: center;
    & > div {
      width: 55%;
      margin: 1rem 0.4rem;

      &:last-child {
        width: 45%;
      }
    }
  }
  @media ${devices.widescreen} {
    & > div:first-child {
      width: 60%;
      margin: 1rem;

      &:last-child {
        width: 40%;
      }
    }
  }
`;
export const CallInAction = styled.div`
  color: #333;
  h2{
  line-height: normal;}
`;

export const DetailThis = styled.div``;

export const Fade = styled.div`
  transition: 0.1s ease-in;

  opacity: ${props => (props.state === "entered" ? 1 : 0)};
  display: ${props => (props.state === "exited" ? "none" : "block")};

  span {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;
