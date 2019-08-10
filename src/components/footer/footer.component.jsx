import React from "react";
import {
  FooterDesktopContainer,
  FooterMobileContainer,
  HeartIcon
} from "./footer.styles.jsx";

export const FooterDesktop = () => (
  <FooterDesktopContainer>
    <p>
      Made by Nguyên with <HeartIcon />
    </p>
  </FooterDesktopContainer>
);

export const FooterMobile = () => (
  <FooterMobileContainer>
    <p>
      Made by Nguyên with <HeartIcon />
    </p>
  </FooterMobileContainer>
);
