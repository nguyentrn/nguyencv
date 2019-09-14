import styled from 'styled-components';
import { devices } from './style/devices';
import theme from './style/theme';
import scrollBar from './style/scrollBar';

export const AppContainer = styled.div`
  background: ${theme.gradient};
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: ${theme.light};

  @media (max-width: 1023px) {
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    ${scrollBar}
  }

  @media ${devices.mobile} {
    margin: auto;
    width: 400px;
  }
  @media ${devices.tablet} {
    margin: auto;
    width: 500px;
    height: 94%;
  }
  @media ${devices.laptop} {
    margin: 3% auto 0;
    height: 90%;
    flex-direction: row;
    width: 990px;
    background: none;
  }
  @media ${devices.widescreen} {
    width: 1150px;
  }
  @media ${devices.superwidescreen} {
    width: 80%;
  }

  @media (orientation: landscape) and (max-width: 1023px) and (max-height: 500px) {
    width: 90%;
  }
`;
