import styled, { css } from "styled-components";
import { theme } from "../../style/theme";
import { devices } from "../../style/devices";

const separatorContainer = css`
  position: absolute;
  width: 100%;
  z-index: 2;

  svg {
    display: block;
  }

  path {
    fill: ${theme.primaryColor}10;
  }
`;

export const SeparatorBottomContainer = styled.div`
  ${separatorContainer}
  bottom: 0;

  @media ${devices.laptop} {
    display: none;
  }
`;

export const SeparatorTopContainer = styled.div`
  ${separatorContainer}
  top: 0;

  @media ${devices.laptop} {
    margin-top: -3rem;
  }
`;
