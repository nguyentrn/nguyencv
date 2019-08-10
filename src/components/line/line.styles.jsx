import styled from "styled-components";
import { theme } from "../../style/theme";

export const LineContainer = styled.div`
  margin: 1% 0;
  height: 1px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LineCore = styled.hr`
  border: 0;
  height: 1px;
  width: 70%;

  background: ${theme.neutralColor};

  background-image: -webkit-linear-gradient(
    left,
    ${theme.light},
    ${theme.neutralColor},
    ${theme.light}
  );
  background-image: -moz-linear-gradient(
    left,
    ${theme.light},
    ${theme.neutralColor},
    ${theme.light}
  );
  background-image: -ms-linear-gradient(
    left,
    ${theme.light},
    ${theme.neutralColor},
    ${theme.light}
  );
  background-image: -o-linear-gradient(
    left,
    ${theme.light},
    ${theme.neutralColor},
    ${theme.light}
  );
`;
