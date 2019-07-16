import styled from "styled-components";
import { devices } from "../../ultilities/devices";

const displayButton = () => (window.scrollY ? "flex" : "none");

export const StyledRoundedButton = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  display: ${displayButton};
  align-items: center;
  justify-content: center;
  box-shadow: 0.2rem 0.2rem 1rem 0.4rem rgb(0, 0, 0, 0.4);
  cursor: pointer;

  @media only screen and ${devices.laptop} {
    display: none;
  }
`;
