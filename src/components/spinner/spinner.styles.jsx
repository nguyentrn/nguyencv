import styled, { keyframes } from "styled-components";
import { theme } from "../../style/theme";

// const fade = keyframes`
//   0% {
//     opacity: 0;
//   }
//   50% {
//     opacity: 1;
//   }
//   100% {
//     opacity: 0;
//   }
// `;

const fadeHalf = keyframes`
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
`;

const configureClockwise = keyframes`
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
 `;

const configureXclockwise = keyframes`
    0% {
      transform: rotate(45deg);
    }
    25% {
      transform: rotate(-45deg);
    }
    50% {
      transform: rotate(-135deg);
    }
    75% {
      transform: rotate(-225deg);
    }
    100% {
      transform: rotate(-315deg);
    }
  `;

export const BodyContainer = styled.div`
  min-height: 100vh;
  /* background: ${theme.gradient}; */
  background-color: ${theme.darkerColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerBox = styled.div`
  width: 240px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: relative;

  .configure-border-1 {
    width: 115px;
    height: 115px;
    padding: 3px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffab91;
    animation: ${configureClockwise} 3s ease-in-out 0s infinite alternate;
  }

  .configure-border-2 {
    width: 115px;
    height: 115px;
    padding: 3px;
    left: -115px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #abff91;
    transform: rotate(45deg);
    animation: ${configureXclockwise} 3s ease-in-out 0s infinite alternate;
  }

  .configure-core {
    width: 100%;
    height: 100%;
    background-color: ${theme.darkerColor};
  }

  h1 {
    position: absolute;
    color: ${theme.light};
    font-weight: 100;
    font-size: 2.4rem;
    animation: ${fadeHalf} 0.6s ease-in-out infinite;
  }

  p {
    position: absolute;
    bottom: 0;
    color: ${theme.light};
    font-weight: 100;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    animation: ${fadeHalf} 0.9s ease-in-out infinite;
  }
`;
