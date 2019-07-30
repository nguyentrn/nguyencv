import styled from "styled-components";
import { theme } from "../../style/theme";

export const DividerContainer = styled.div`
  margin: 10rem;
  width: 100%;
  .mask {
    overflow: hidden;
    height: 0.8rem;
  }
  .mask:after {
    content: "";
    display: block;
    margin: -1rem auto 0;
    width: 100%;
    height: 1rem;
    border-radius: 5rem / 0.48rem;
    box-shadow: 0 0 0.4rem ${theme.primaryColor};
  }
  & > a {
    -webkit-tap-highlight-color: transparent;
    & > a {
      & > span {
        width: 2rem;
        height: 2rem;
        position: absolute;
        bottom: 100%;
        margin-bottom: -1rem;
        left: 50%;
        margin-left: -1rem;
        border-radius: 100%;
        box-shadow: 0 0.08rem 0.16rem #999;
        background: ${theme.light};

        i {
          position: absolute;
          top: 0.16rem;
          bottom: 0.16rem;
          left: 0.16rem;
          right: 0.16rem;
          border-radius: 100%;
          border: 0.04rem dashed ${theme.primaryColor};
          text-align: center;
          line-height: 1.6rem;
          font-style: normal;
          color: ${theme.primaryColor};
        }
      }
    }
  }
`;
