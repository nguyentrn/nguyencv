import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/language.context";
import {
  StyledRoundedButton,
  RoundedButtonContainer
} from "./rounded-button.styles";

const RoundedButton = () => {
  const { isVietnamese, toggleIsVietnamese } = useContext(LanguageContext);
  return (
    <RoundedButtonContainer>
      <p>{!isVietnamese ? "Ngôn ngữ" : "Language"}</p>
      <StyledRoundedButton>
        <label>
          <input
            defaultChecked={isVietnamese}
            className="switch"
            type="checkbox"
            onClick={toggleIsVietnamese}
          />
          <div className="text-container">
            <div className="text">{isVietnamese ? "VI" : "EN"}</div>
          </div>
        </label>
      </StyledRoundedButton>
    </RoundedButtonContainer>
  );
};

export default RoundedButton;
