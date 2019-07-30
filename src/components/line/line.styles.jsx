import styled from "styled-components";
import { theme } from "../../style/theme";
export const Line = styled.hr`
  border: 0;
  height: 1px;
  position: relative;
  width: 80%;
  margin: 0.5em 0; /* Keep other elements away from pseudo elements*/

  &:before {
    top: -0.5em;
    height: 1em;
  }
  &:after {
    content: "";
    height: 0.5em; /* half the height of :before */
    top: 1px; /* height of hr*/
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
  }

  &,
  &:before {
    background: -moz-radial-gradient(
      center,
      ellipse cover,
      ${theme.neutralColor} 0%,
      rgba(0, 0, 0, 0) 75%
    );
    background: -webkit-gradient(
      radial,
      center center,
      0px,
      center center,
      75%,
      color-stop(0%, ${theme.neutralColor}),
      color-stop(75%, rgba(0, 0, 0, 0))
    );
    background: -webkit-radial-gradient(
      center,
      ellipse cover,
      ${theme.neutralColor} 0%,
      rgba(0, 0, 0, 0) 75%
    );
    background: -o-radial-gradient(
      center,
      ellipse cover,
      ${theme.neutralColor} 0%,
      rgba(0, 0, 0, 0) 75%
    );
    background: -ms-radial-gradient(
      center,
      ellipse cover,
      ${theme.neutralColor} 0%,
      rgba(0, 0, 0, 0) 75%
    );
    background: radial-gradient(
      ellipse at center,
      ${theme.neutralColor} 0%,
      rgba(0, 0, 0, 0) 75%
    );
  }
`;
