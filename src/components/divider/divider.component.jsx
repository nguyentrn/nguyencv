import React from "react";
import { DividerContainer, Button } from "./divider.styles";
const Divider = props => (
  <div>
  <DividerContainer>
    <div className="mask" />
    <Button />
    {/* <span>

      <i>{props.name}</i>
    </span> */}
  </DividerContainer>
  </div>
);

export default Divider;
