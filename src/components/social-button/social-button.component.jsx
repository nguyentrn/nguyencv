import React from "react";
import { SocialButtonContainer } from "./social-button.styles";
import { FiLinkedin, FiFacebook, FiGithub } from "react-icons/fi";

const openNewWindow = link => () => window.open(link, "_blank");

const SocialButtons = () => (
  <SocialButtonContainer>
    <div class="effect varrius">
      <button onClick={openNewWindow("https://github.com/nguyentrn/")}>
        <FiGithub size={20} />
      </button>
      <button
        onClick={openNewWindow("https://www.facebook.com/nguyen.tran.0113/")}
      >
        <FiFacebook size={20} />
      </button>
      <button
        onClick={openNewWindow(
          "https://www.linkedin.com/in/nguyen-tran-1231b0180/"
        )}
      >
        <FiLinkedin size={20} />
      </button>
    </div>
  </SocialButtonContainer>
);
export default SocialButtons;
