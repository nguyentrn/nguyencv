import styled from 'styled-components';
import theme from '../theme';
import { devices } from '../devices';
import scrollBar from '../scrollBar';

export const InsideCvLayoutContainer = styled.span`
  z-index: 1;
  margin-top: 2rem;
  /* height: 90%; */
  /* flex-grow: 1; */
  padding: 1.5rem 1.5rem;
  display: flex;
  font-size: 0.8rem;
  flex-direction: column;
  background: ${theme.light};
  line-height: 1.6rem;
  position: relative;

  & > div {
    margin: 0.5rem auto;
    width: 93%;
  }

  & > h3 {
    margin: 0.5rem 0;
    font-size: 1.4rem;
    span {
      color: ${theme.secondaryColor};
    }
  }
  @media ${devices.laptop} {
    margin: auto;
    height: 90%;
    align-self: center;
    overflow-y: scroll;
    box-shadow: 0.5rem 0.5rem 1rem 0.1rem ${theme.dark}77;
    ${scrollBar}
  }
`;

export const NavigateButton = styled.div`
  height: 100%;
  width: 100%;
  ${'' /* margin: 2rem; */}
  padding: 1rem 1rem 0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

// export const FirstButton = styled.span`
//   position: absolute;
//   bottom: 3.5rem;
//   right: 1rem;

//   @media ${devices.laptop} {
//     bottom: 1rem;
//   }
// `;

// export const SecondButton = styled.span`
//   position: absolute;
//   right: 8rem;
//   bottom: 3.5rem;

//   @media ${devices.laptop} {
//     bottom: 1rem;
//   }
// `;
