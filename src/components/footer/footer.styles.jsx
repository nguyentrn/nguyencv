import styled, { keyframes } from "styled-components";

const pounding = keyframes`{


  0% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }}`;

export const FooterContainer = styled.div`
  text-align: center;
  color: #fff;

  p {
    font-size: 0.9rem;
    font-weight: 100;
    margin-right: 0.4rem;
    letter-spacing: 0.1rem;
    display: inline-block;
  }
`;

export const HeartIcon = styled.div`
  width: 1rem;
  height: 0.9rem;
  display: inline-block;
  overflow: hidden;
  animation: ${pounding} 0.5s linear infinite alternate;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 0.5rem;
    height: 0.8rem;
    background: #fc2e5a;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  &:before {
    left: 0.5rem;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;
