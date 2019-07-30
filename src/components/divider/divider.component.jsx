import React from "react";
import { DividerContainer, Button } from "./divider.styles";
const Divider = props => (
  <DividerContainer>
    <div className="mask" />
    <Button />
    {/* <span>

      <i>{props.name}</i>
    </span> */}
  </DividerContainer>
);

export default Divider;
