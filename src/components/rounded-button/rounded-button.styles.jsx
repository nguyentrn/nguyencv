import styled from "styled-components";
import { devices } from "../../style/devices";

// const displayButton = () => (window.scrollY ? "flex" : "none");

export const RoundedButtonContainer = styled.span`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > p {
    font-size: 0.6rem;
    margin-right: 0.3rem;
  }
`;

export const StyledRoundedButton = styled.label`
  background: #fff;
  border-radius: 999px;

  z-index: 3;
  -webkit-tap-highlight-color: none;
  input[type="checkbox"].switch {
    position: absolute;
    opacity: 0;
    user-select: none;
  }

  input[type="checkbox"].switch + div {
    vertical-align: middle;
    width: 1.28rem;
    height: 0.64rem;
    border-radius: 999px;
    background-color: #82acff99;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    -webkit-transition-property: background-color, box-shadow;
    transition-property: background-color, box-shadow;
    transition-timing-function: ease-in-out;
    cursor: pointer;
    user-select: none;

    div {
      font-size: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

  input[type="checkbox"].switch + div span {
    position: absolute;
    font-size: 1.28rem;
    color: white;
    margin-top: 0.384rem;
  }

  input[type="checkbox"].switch + div span:nth-child(1) {
    margin-left: 0.48rem;
  }

  input[type="checkbox"].switch + div span:nth-child(2) {
    margin-left: 2.64rem;
  }

  input[type="checkbox"].switch:checked + div {
    width: 3.144rem;
    background-position: 0 0;
    background-color: #3b89ec;
  }

  input[type="checkbox"].switch + div {
    width: 3.144rem;
    height: 1.662rem;
  }

  input[type="checkbox"].switch:checked + div {
    background-color: #ff454099;
  }

  input[type="checkbox"].switch + div > div {
    float: left;
    width: 1.472rem;
    height: 1.472rem;
    border-radius: inherit;
    background: #ffffff;
    -webkit-transition-timing-function: cubic-bezier(1, 0, 0, 1);
    transition-timing-function: cubic-bezier(1, 0, 0, 1);
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    -webkit-transition-property: transform, background-color;
    transition-property: transform, background-color;
    transition-timing-function: ease-in-out;
    pointer-events: none;
    margin-top: 0.1rem;
    margin-left: 0.1rem;
  }

  input[type="checkbox"].switch:checked + div > div {
    -webkit-transform: translate3d(0.64rem, 0, 0);
    transform: translate3d(0.64rem, 0, 0);
    background-color: #ffffff;
  }

  input[type="checkbox"].bigswitch.switch + div > div {
    width: 1.408rem;
    height: 1.408rem;
    margin-top: 0.032rem;
  }

  input[type="checkbox"].switch:checked + div > div {
    -webkit-transform: translate3d(1.472rem, 0, 0);
    transform: translate3d(1.472rem, 0, 0);
  }

  @media only screen and ${devices.laptop} {
    /* display: none; */
  }
`;
