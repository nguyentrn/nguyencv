import styled from 'styled-components';
import { devices } from '../../style/devices';
import InsideCvLayout from '../../style/inside-cv-layout/inside-cv-layout.component';
import theme  from '../../style/theme';

export const ContactPageContainer = styled(InsideCvLayout)`
  position: relative;
`;

export const MessageFormContainer = styled.div`
  article {
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    margin: auto;
    perspective: 60rem;

    & > div {
      background-color: ${theme.primaryColor}06;
      outline: 3px solid transparent;
      &:nth-of-type(1) {
        padding: 2rem 2rem 2rem;
        border-radius: 1rem 1rem 0 0;
        box-shadow: inset 0 0.75rem 2rem rgba(229, 225, 187, 0.5);
      }
      &:nth-of-type(2) {
        padding: 2rem;
        border-radius: 0 0 1rem 1rem;
        box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.05),
          inset 0 -0.57rem 2rem rgba(229, 225, 187, 0.5);
        text-align: right;
      }
    }
  }

  @media ${devices.laptop} {
    padding: 0 4rem;
  }
`;

export const GetInTouchContainer = styled.div`
  z-index: 5;
`;
