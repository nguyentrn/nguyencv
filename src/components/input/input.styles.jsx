import styled, { css } from "styled-components";
import { theme } from "../../style/theme";
const container = css`
  z-index: 5;
  height: 100%;
  display: grid;
  font-family: "Noto Sans";
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }

  .inp {
    z-index: 4;
    position: relative;
    margin: auto;
    width: 100%;
    ${"" /* max-width: 17.5rem; */}
    .label {
      z-index: -1;
      position: absolute;
      top: 1rem;
      left: 0;
      font-size: 0.9rem;
      color: ${theme.secondaryColor};
      font-weight: 500;
      transform-origin: 0 0;
      transition: all 0.2s ease;
    }
    .border {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 0.125rem;
      width: 100%;
      background: ${theme.secondaryColor};
      transform: scaleX(0);
      transform-origin: 0 0;
      transition: all 0.15s ease;
    }
  }
`;

export const InputContainer = styled.div`
  ${container};
  max-width: ${props => props.width || ""};

  input {
    z-index: 1;
    -webkit-appearance: none;
    width: 100%;
    border: 0;
    font-family: inherit;
    padding: 1rem 0 0;
    height: 3rem;
    font-size: 0.9rem;
    font-weight: 500;
    border-bottom: 0.125rem solid #c8ccd4;
    background: none;
    border-radius: 0;
    color: #223254;
    transition: all 0.15s ease;
    &:hover {
      background: rgba(#223254, 0.03);
    }
    &:not(:placeholder-shown) {
      + span {
        color: #5a667f;
        transform: translateY(-0.8rem) scale(0.75);
      }
    }
    &:focus {
      background: none;
      outline: none;
      + span {
        color: ${theme.secondaryColor};
        transform: translateY(-0.8rem) scale(0.75);
        + .border {
          transform: scaleX(1);
        }
      }
    }
  }
`;

export const TextAreaContainer = styled.div`
  ${container}
  .border {
    position: absolute;
    margin-bottom: 0.5rem;
    bottom: 0;
    left: 0;
    height: 0.125rem;
    width: 100%;
    background: ${theme.secondaryColor};
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: all 0.15s ease;
  }

  textarea {
    /* z-index: 1; */

    -webkit-appearance: none;
    width: 100%;
    border: 0;
    font-family: inherit;
    font-size: 0.96rem;
    font-weight: 500;
    border-bottom: 0.125rem solid #c8ccd4;
    background: none;
    border-radius: 0;
    color: #223254;
    transition: all 0.15s ease;
    background-color: transparent;

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }

    &::-webkit-scrollbar {
      border-radius: 10px;
      height: 80%;
      width: 0.2rem;
      background-color: rgba(255, 255, 255, 0);
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: ${theme.light};
      background-image: -webkit-linear-gradient(
        top,
        ${theme.lighterColor} 0%,
        ${theme.neutralColor} 50%,
        ${theme.secondaryColor} 51%,
        ${theme.primaryColor} 100%
      );
    }

    &:hover {
      background: rgba(#223254, 0.03);
    }
    &:not(:placeholder-shown) {
      + span {
        color: #5a667f;
        transform: translateY(-2rem) scale(0.75);
      }
    }
    &:focus {
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='21'><rect fill='rgba(78, 94, 114, 0.3)' x='0' y='20' width='10' height='1'/></svg>");
      /* background: none; */
      outline: none;
      + span {
        color: ${theme.secondaryColor};
        transform: translateY(-2rem) scale(0.75);
        + .border {
          transform: scaleX(1);
        }
      }
    }
  }
`;

export const SubmitContainer = styled.div`
  ${container}
  .inp {
    display: flex;
    justify-content: flex-end;
  }
  input {
    padding: 1rem;
    border: none;
    background: red;
  }
`;
