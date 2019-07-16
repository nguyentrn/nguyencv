import React from "react";
import { StyledRoundedButton } from "./rounded-button.styles";

const RoundedButton = () => {
  return (
    <div style={{ position: "absolute", bottom: "2rem", right: "2rem" }}>
      <StyledRoundedButton>Top</StyledRoundedButton>
    </div>
  );
};

export default RoundedButton;
