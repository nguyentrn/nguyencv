import styled, { keyframes } from "styled-components";
import { theme } from "../../style/theme";
// import { devices } from "../../style/devices";

const typewriter = keyframes`
    0%{width: 0}
    100%{width: 100%}
  `;
const blinkTextCursor = keyframes`
    from{border-right-color: rgba(0,0,0,.75);}
    to{border-right-color: transparent;}
  `;

// export const TypingTextElement = styled.div`
//   color: ${theme.dark};
//   position: relative;
//   bottom: 50%;
//   margin: 0.25rem auto;
//   border-right: 2px solid ${theme.light};
//   font-size: 0.9rem;
//   text-align: center;
//   white-space: nowrap;
//   overflow: hidden;
//   -webkit-transform: translateY(-50%);
//   -ms-transform: translateY(-50%);
//   transform: translateY(-50%);
//   animation:  ${typewriter}  4s steps(29,end) 1s 1 normal both,
//   ${blinkTextCursor} 600ms steps(29,end) infinite;
//   /* -webkit-animation: ${typewriter} 2200ms steps(44) 1s 1 normal both, */
//     /* ${blinkTextCursor} 500ms steps(44) ${props =>
//   props.infinite || "infinite"} */
//       /* normal; */

//   -webkit-animation-delay: ${props => props.delay || "1s"};
//   @media ${devices.laptop} {
//     top: 50%;
//   }

// @media (max-height: 500px) {
//   display: none;
// }
// `;

export const TypingTextElement = styled.div`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid rgba(0, 0, 0, 0);
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: ${typewriter} 2200ms steps(44) 1s 1 normal both,
    ${blinkTextCursor} 500ms steps(44) ${props => props.infinite || "infinite"}
      normal;
  animation-delay: ${props => props.delay || "1s"};
`;

export const TypingTextContainer = styled.div`
  color: ${theme.dark};
  letter-spacing: 0.005rem;
  margin: 0 0 0.5rem;
  font-size: 0.85rem;
  font-family: "NguyenMono", monospace;
  font-weight: bold;

  @media (max-height: 600px) {
    display: none;
  }
`;
