import styled, { keyframes } from 'styled-components';
import { devices } from '../../style/devices';
import theme from '../../style/theme';

const duration = 2.2;
const base = 0.32;
const moveChevron = keyframes`
    25% {
  opacity: 1;
	}
 33.3% {
  opacity: 1;
  transform: translateY(${base * 3.8}rem );
 }
 66.6% {
  opacity: 1;
  transform: translateY(${base * 5.2}rem);
 }
 100% {
  opacity: 0;
  transform: translateY(${base * 8}rem) scale(0.5);
 }
`;

export const ScrollDownContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 6.5rem;
  justify-content: center;
  align-items: center;
  z-index: 4;

  @media ${devices.laptop} {
    display: none;
  }

  @media (max-height: 1000px) {
    bottom: 20%;
  }

  @media (max-height: 500px) {
    display: none;
  }

  .chevron {
    position: absolute;
    width: ${base * 3.8}rem;
    height: ${base * 0.8}rem;
    opacity: 0;
    transform: scale(0.3);
    animation: ${moveChevron} ${duration}s ease-out infinite;

    &:first-child {
      animation: ${moveChevron} ${duration}s ease-out ${duration / 3}s infinite;
    }

    &:nth-child(2) {
      animation: ${moveChevron} ${duration}s ease-out ${(duration / 3) * 2}s infinite;
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 0;
      height: 100%;
      width: 50%;
      background: ${theme.secondaryColor};
    }

    &:before {
      left: 0;
      transform: skewY(30deg);
    }

    &:after {
      right: 0;
      width: 50%;
      transform: skewY(-30deg);
    }
  }
`;
