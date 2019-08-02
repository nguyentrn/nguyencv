import React from "react";
import { DetailContainer } from "./page-wrapper.styles";
import RoundedButton from "../../components/rounded-button/rounded-button.component";
import { Element } from "react-scroll";
import { SeparatorTop } from "../../components/separator/separator.component";

const PageWrapper = props => (
  <DetailContainer name="page" className="element" id="navigate">
    <SeparatorTop />
    <Element name="detailNavigate">{props.children} </Element>
    <RoundedButton />
  </DetailContainer>
);

export default PageWrapper;
