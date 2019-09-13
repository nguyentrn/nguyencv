import React from "react";
import { DetailContainer } from "./page-wrapper.styles";
import { Element } from "react-scroll";
import { SeparatorTop } from "../../components/separator/separator.component";

const PageWrapper = props => (
  <DetailContainer name="page" className="element" id="navigate">
    <SeparatorTop />
    <Element name="detailNavigate">{props.children} </Element>
  </DetailContainer>
);

export default PageWrapper;
