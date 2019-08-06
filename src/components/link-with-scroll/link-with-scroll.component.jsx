import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { useWindowSize } from "react-use";
import { LinkWithScrollContainer } from "./link-with-scroll.styles";

const Wdow = () => {
  const { width, height } = useWindowSize();

  return { width, height };
};

const LinkWithScroll = ({ link, ...props }) => (
  <LinkWithScrollContainer>
    {Wdow().width < 1024 ? (
      <LinkScroll
        to="detailContainer"
        offset={-55}
        spy={true}
        smooth={true}
        duration={800}
        containerId="containerElement"
      >
        <LinkRouter to={`/${link ? link.toLowerCase() : ""}`}>
          {props.children}
        </LinkRouter>
      </LinkScroll>
    ) : (
      <LinkScroll
        to="detailNavigate"
        offset={-60}
        spy={true}
        smooth={true}
        duration={0}
        containerId="navigate"
      >
        <LinkRouter to={`/${link ? link.toLowerCase() : ""}`}>
          {props.children}
        </LinkRouter>
      </LinkScroll>
    )}
  </LinkWithScrollContainer>
);

export default LinkWithScroll;
