import { css } from 'styled-components';
import theme from './theme';

const scrollBar = css`
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    border-radius: 10px;
    height: 80%;
    max-width: 0.2rem;
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
`;

export default scrollBar;
