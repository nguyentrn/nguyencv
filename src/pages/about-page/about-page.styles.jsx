import styled from "styled-components";
import { devices } from "../../style/devices";
import { theme } from "../../style/theme";
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
      width: 60%;
      margin: 1rem 0.4rem;
      z-index: 4;

      &:last-child {
        width: 40%;
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
  position: relative;
  font-family: sans-serif;
  max-width: 100%;
  margin: 80px auto;
  align-self: center;

  /* Blockquote header */
  h1 {
    font-family: "Dancing Script", cursive;
    /* font-style: italic; */

    letter-spacing: 0.05rem;
    position: relative; /* for pseudos */
    color: ${theme.primaryColor};
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0;
    border: 2px solid ${theme.light};
    border: solid 2px;
    border-radius: 20px;
    padding: 25px;

    span {
      color: ${theme.neutralColor}aa;
    }
  }

  /* Blockquote right double quotes */
  h1:after {
    content: "";
    position: absolute;
    border: 2px solid ${theme.primaryColor};
    border-radius: 0 50px 0 0;
    width: 60px;
    height: 60px;
    bottom: -62px;
    left: 50px;
    border-bottom: none;
    border-left: none;
    z-index: 3;
  }

  h1:before {
    content: "";
    position: absolute;
    width: 80px;
    border: 6px solid ${theme.light};
    bottom: -3px;
    left: 50px;
    z-index: 2;
  }

  h4 {
    color: ${theme.dark};
    font-weight: 400;
    line-height: 1.2;
    font-size: 0.8rem;
    margin-left: 3rem;
    margin-top: 4rem;
  }

  h4:first-letter {
    margin-left: -2.7rem;
  }

  @media ${devices.laptop} {
    h1 {
      margin: 0 3rem;
    }

    h4 {
      position: relative;
      margin: 0;
      padding-top: 15px;
      z-index: 1;
      margin-left: 13rem;
      margin-right: 3rem;

      padding-left: 12px;
    }
  }

  h2 {
    line-height: normal;
  }
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
