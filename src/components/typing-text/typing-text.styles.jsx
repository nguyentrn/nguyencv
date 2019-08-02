import styled, { keyframes } from "styled-components";
import { theme } from "../../style/theme";
import { devices } from "../../style/devices";

const typewriter = keyframes`
    from{width: 0;}
    to{width: 101%;}
  `;
const blinkTextCursor = keyframes`
    from{border-right-color: rgba(0,0,0,.75);}
    to{border-right-color: transparent;}
  `;

export const TypingTextElement = styled.div`
  color: ${theme.dark};
  position: relative;
  bottom: 50%;
  /* width: 1rem; */
  margin: 0 auto;
  border-right: 2px solid ${theme.light};
  font-size: 1rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);
  animation: ${typewriter} 2200ms steps(44) 1s 1 normal both,
    ${blinkTextCursor} 500ms steps(44) ${props => props.infinite || "infinite"}
      normal;
  animation-delay: ${props => props.delay || "1s"};
  @media ${devices.laptop} {
    top: 50%;
  }
`;

export const TypingTextContainer = styled.div`
  color: ${theme.dark};
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
`;
