import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/language.context";
import { StyledRoundedButton } from "./rounded-button.styles";

const RoundedButton = () => {
  const { isVietnamese, toggleIsVietnamese } = useContext(LanguageContext);
  return (
    <div
      style={{
        position: "absolute",
        top: "2.3rem",
        right: "1.6rem",
        width: "100%",
        height: "0rem",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
      }}
    >
      <p style={{ fontSize: "0.6rem", marginRight: "0.3rem" }}>
        {!isVietnamese ? "Ngôn ngữ" : "Language"}
      </p>
      <StyledRoundedButton>
        <label>
          <input
            checked={isVietnamese}
            className="switch"
            type="checkbox"
            onClick={toggleIsVietnamese}
          />
          <div className="text-container">
            <div className="text">{isVietnamese ? "VI" : "EN"}</div>
          </div>
        </label>
      </StyledRoundedButton>
    </div>
  );
};

export default RoundedButton;
