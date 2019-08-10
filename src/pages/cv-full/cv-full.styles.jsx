import styled, { css, keyframes } from "styled-components";
import { theme } from "../../style/theme";
const a4Ratio = 842 / 595;
// export const size = "100";

const line = css`
  position: relative;
  &:after {
    content: "";
    background: ${theme.dark}33;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0.1em;
    width: 100%;
  }
`;

const rightLine = css`
  position: relative;
  &:after {
    content: "";
    background: ${theme.dark}33;
    position: absolute;
    bottom: 1%;
    right: 0;
    height: 98%;
    width: 0.1em;
  }
`;

const arrow = css`
  display: inline-block;
  width: 0.69em;
  height: 0.69em;
  border-top: 0.25em solid ${theme.secondaryColor};
  border-right: 0.25em solid ${theme.secondaryColor};
  transform: rotate(45deg);
  margin-right: 1.2em;
  margin-left: -0.6em;
  margin-bottom: 0.01em;
  border-radius: 25%;
`;

const headLines = css`
  & > div {
    margin: 1em 0;
  }
  h1 {
    padding: ${props => props.size / 450}vw;
    line-height: 2em;
    text-transform: uppercase;
    font-size: 0.9em;
    letter-spacing: 0.3em;
    ${line}
    span {
      ${arrow}
    }
    &:after {
      width: 90%;
      height: 0.111em;
    }
  }
  p {
    font-size: 0.55em;
    line-height: 1.7em;
    letter-spacing: 0.01em;
  }
`;

const headLinesMain = css`
  & > div {
    margin: 1em 0 1em 1em;
  }
  h1 {
    padding: ${props => props.size / 450}vw;
    line-height: 2em;
    text-transform: uppercase;
    font-size: 0.9em;
    letter-spacing: 0.3em;
    ${line}
    span {
      ${arrow}
    }
    &:after {
      width: 100%;
      height: 0.111em;
    }
  }
  p {
    font-size: 0.55em;
    line-height: 1.7em;
    letter-spacing: 0.01em;
  }
`;

export const CVPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background: ${theme.gradient};
  width: 100%;
  height: 100vh;
  padding: 0.5% 0;
  position: absolute;

  @media (min-width: 210mm) {
    height: ${210 * a4Ratio + 5}mm;
  }
`;

const slideInUp = keyframes`
   from {
    -webkit-transform: translate3d(50%, 0, 0);
    transform: translate3d(50%, 0, 0);
    visibility: visible;
    opacity:0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity:1;

  }
`;

export const CVNavigate = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;

  div {
    z-index: 3;
    height: 2.5rem;
    cursor: pointer;
    width: ${100 / 3}%;

    p {
      display: none;
    }

    button {
      z-index: 10;

      cursor: pointer;
      background: ${theme.light};
      border: none;
      width: 100%;
      height: 100%;
      box-shadow: 0.2rem 0.2rem 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
    }

    &:nth-child(2) {
      button {
        background: ${theme.primaryColor};
        svg {
          fill: ${theme.light};
        }
      }
    }
  }

  @media (min-width: 210mm) {
    position: fixed;
    flex-direction: column;
    top: 0;
    right: 0.25rem;
    width: auto;
    z-index: 4;

    div {
      display: flex;
      align-items: center;
      width: auto;
      height: auto;
      a {
        color: ${theme.light};
      }
      p {
        color: ${theme.light};
        padding: 0.25rem 0.5rem;
        background: ${theme.primaryColor}99;
        display: block;
        opacity: 0;
      }

      button {
        box-shadow: 0.2rem 0.2rem 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
        margin: 0.5rem 1rem;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
      }

      &:hover {
        p {
          opacity: 1;
          animation: ${slideInUp} 0.35s ease-out;
        }
      }
    }
  }
`;

export const CVContainer = styled.div`
  color: ${theme.dark};
  padding: ${props => props.size / 35}vw;
  font-size: ${props => props.size / 35}vw;
  letter-spacing: ${props => props.size / 100}vw;
  line-height: ${props => props.size / 100}vw;

  width: ${props => props.size}vw;
  height: ${props => props.size * a4Ratio}vw;
  background: #f4f4f4;
  z-index: 1;
  display: grid;
  grid-template-columns: 30% repeat(3, 1fr);
  grid-template-rows: 19% 81%;
  grid-template-areas:
    "header header header header "
    "sidebar main main main ";

  & > div {
    margin: ${props => props.size / 105}vw;
  }

  @media (min-width: 210mm) {
    box-shadow: 0.5rem 0.5rem 2rem 1rem rgba(0, 0, 0, 0.2);
    padding: 6mm;
    font-size: 6mm;
    letter-spacing: 2.1mm;
    line-height: 2.1mm;
    width: 210mm;
    height: ${210 * a4Ratio}mm;

    & > div {
      margin: 2mm;
    }
  }
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1em;

  ${line}
`;

export const Main = styled.div`
  grid-area: main;
  margin-top: 1.8em;
  padding-left: 0.5em;
`;
export const Sidebar = styled.div`
  grid-area: sidebar;
  margin-top: 1.8em;
  ${rightLine}
`;
export const Footer = styled.div`
  grid-area: footer;
  background: orange;
`;
export const Avatar = styled.div`
  width: 7.5em;

  img {
    border-radius: 50%;
    border: 0.05em solid #33333366;
  }
`;

export const Name = styled.div`
  width: 60%;
  margin-top: 0.3em;
  margin-left: 1.5em;
  display: block;
  font-weight: 100;
  font-size: 1.8em;
  letter-spacing: 0.26em;
  line-height: 1em;
  & > span {
    line-height: 1em;

    font-size: 0.5em;
    letter-spacing: 0.2em;
    display: block;
    margin: 0.6em 0 0 0.35em;
    /* 1.2em 0 0 0.35em; */
  }
`;
export const AboutMe = styled.div`
  ${headLines}
  div {
    margin-right: 0.5em;
    p {
      margin: 0.4em 0em;
    }
  }
`;
export const Contact = styled.div`
  ${headLines}
  & > div {
    & > div {
      margin: 0.6em 0;
      display: flex;
      align-items: center;
      svg {
        fill: ${theme.secondaryColor};
      }
      p {
        margin-left: 1em;
        padding: 0em;
        line-height: 1.3em;

        span {
          display: block;
          line-height: 1.3em;
        }
      }
    }
  }
`;
export const Follow = styled.div`
  ${headLines}
  & > div {
    p {
      padding: 0.2em;
      font-weight: bold;
      line-height: 1.6em;
      margin: 0.2em 0;
      span {
        display: block;
        font-weight: normal;
        line-height: 1.8em;
        margin-left: 1em;
      }
    }
  }
`;
export const Skills = styled.div`
  ${headLinesMain}
  &>div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > div {
      margin: 0.2em 0;
      padding: 0;
      width: 45%;
      & > h6 {
        line-height: 2em;
        letter-spacing: 0.2em;
      }
    }
  }
`;
export const Educations = styled.div`
  ${headLinesMain}
  letter-spacing: 0.05em;
  line-height: 0.2em;

  & > div {
    line-height: 1em;

    & > em {
      span {
        line-height: 1.5em;
      }
      font-size: 0.7em;
      display: flex;
      line-height: 1em;
      justify-content: space-between;
    }
    & > strong {
      line-height: 1.5em;
      font-size: 0.6em;
      text-transform: uppercase;
    }
    & > p {
      line-height: 2em;
    }
  }
`;
export const Experience = styled.div`
  ${headLinesMain}
`;

export const Interests = styled.div`
  ${headLinesMain}
`;

export const SkillBar = styled.div`
  border-radius: 0.05em;
  overflow: hidden;
  width: 100%;

  span {
    display: block;
    background: ${theme.dark}33;
    span {
      /* animation: loader 8s ease infinite; */
      // Change the animation fill mode 'infinite' to 'forwards' to stop the animation from repeating.
      background: ${theme.primaryColor}cc;
      color: #fff;
      padding: 0.2em;
      width: ${props => props.value};
    }
  }
`;
