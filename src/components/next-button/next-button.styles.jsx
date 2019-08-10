import styled, { keyframes } from "styled-components";
import { theme } from "../../style/theme";
import { Link } from "react-scroll";
import LinkWithScroll from "../link-with-scroll/link-with-scroll.component";

const color_anim = keyframes`
    0% {
        fill: white;
    }
    50% {
        fill: ${theme.neutralColor};
    }
    100% {
        fill: white;
    }
`;
export const StyledLinkWithScroll = styled(LinkWithScroll)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const NextButtonContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 0.2rem 0.5rem;
  text-decoration: none;
  font-size: 0.8rem;
  color: white;
  background: ${theme.secondaryColor};
  transition: 1s;
  /* box-shadow: 0.1rem 0.1rem 0 black; */
  transform: skewX(-15deg);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    transition: 0.5s;
    /* box-shadow: 0.25rem 0.25rem 0 ${theme.primaryColor}; */
  }

  & span:nth-child(2) {
    transition: 0.5s;
    margin-right: 0;
  }

  &:hover span:nth-child(2) {
    transition: 0.5s;
    margin-right: 0.6rem;
  }

  span {
    transform: skewX(15deg);
  }

  span:nth-child(2) {
    width: 0.5rem;
    margin-left: 0.5rem;
    position: relative;
    top: 12%;
  }

  path {
    margin-bottom: 2rem;
  }

  path.one {
    transition: 0.4s;
    transform: translateX(-60%);
  }

  path.two {
    transition: 0.5s;
    transform: translateX(-30%);
  }

  &:hover path.three {
    animation: ${color_anim} 1s infinite 0.2s;
  }

  &:hover path.one {
    transform: translateX(0%);
    animation: ${color_anim} 1s infinite 0.6s;
  }

  &:hover path.two {
    transform: translateX(0%);
    animation: ${color_anim} 1s infinite 0.4s;
  }
`;

export const StyledLink = styled(Link)``;
