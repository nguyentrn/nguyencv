import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { devices } from "../../style/devices";
import { theme } from "../../style/theme";

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 0.4rem;
  z-index: 0;
  bottom: 0;

  @media ${devices.laptop} {
    margin: 4rem 1rem 0 0;
    flex-direction: column;
    position: relative;
    z-index: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  width: 25%;
  text-align: center;
  padding: 0.5rem 0 0.2rem;
  color: ${theme.dark};
  transition: 0.3s ease;
  background: ${theme.light};
  font-size: 0.7rem;
  z-index: 1;
  box-shadow: 0.1rem 0.1rem 1rem 0.1rem rgba(0, 0, 0, 0.04);

  /* top: 0;
  z-index: 1; */

  h1 {
    font-size: 1rem;
    margin-bottom: -0.4rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.5);
    color: ${theme.neutralColor};
  }

  @media only screen and ${devices.laptop} {
    box-shadow: 0.5rem 0.5rem 1rem 0.1rem rgba(0, 0, 0, 0.15);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 4.5rem;
    height: 4.5rem;
    font-size: 0.8rem;

    &:after {
      content: "";
      border: 1px solid ${theme.neutralColor};
      width: 60%;
    }
    h1 {
      font-size: 1.6rem;
    }

    &:first-child {
      border-radius: 0.4rem 0.4rem 0 0;
    }
    &:last-child {
      border-radius: 0 0 0.4rem 0.4rem;
    }
  }
`;
