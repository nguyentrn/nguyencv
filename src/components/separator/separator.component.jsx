import React from "react";
import {
  SeparatorTopContainer,
  SeparatorBottomContainer
} from "./separator.styles";

export const SeparatorBottom = () => {
  return (
    <SeparatorBottomContainer>
      <svg
        id="curveUpColor"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="45"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 100 V50 C 20 0 50 0 100 80 V100 Z" />
      </svg>
    </SeparatorBottomContainer>
  );
};

export const SeparatorTop = () => {
  return (
    <SeparatorTopContainer>
      <svg
        id="curveDownColor"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="130"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 0 V65 C 50 100 80 100 100 75 V0 Z" />
      </svg>
    </SeparatorTopContainer>
  );
};
