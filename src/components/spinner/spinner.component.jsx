import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/language.context";
import { SpinnerBox, BodyContainer } from "./spinner.styles";

const Spinner = () => {
  const { isVietnamese } = useContext(LanguageContext);
  return (
    <BodyContainer>
      <SpinnerBox>
        <div class="configure-border-1">
          <div class="configure-core" />
        </div>
        <div class="configure-border-2">
          <div class="configure-core" />
        </div>
        <h1>TN</h1>
        <p>{isVietnamese ? "Đang tải . . ." : "Loading . . ."}</p>
      </SpinnerBox>
    </BodyContainer>
  );
};

export default Spinner;
