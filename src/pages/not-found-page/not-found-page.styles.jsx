import styled from "styled-components";
import theme from "../../style/theme";

export const NotFoundPageContainer = styled.div`
  line-height: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.gradient};
  color: ${theme.darkerColor};
  h1 {
    margin: 1rem;
  }
  & > div {
    margin: 6rem;
    width: 20rem;
    height: 15rem;
    background: blue;
    div {
      height: 1rem;
      width: 100%;
      background: orange;
    }
    button {
      h4 {
        cursor: pointer;
      }
    }
  }
`;
