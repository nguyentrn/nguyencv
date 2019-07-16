import React from "react";
import { DetailContainer } from "./page-wrapper.styles";

// import Scroll from "react-scroll";

// var Element = Scroll.Element;

const PageWrapper = props => (
  <DetailContainer>{props.children}</DetailContainer>
);

export default PageWrapper;
