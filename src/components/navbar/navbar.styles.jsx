import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { devices } from "../../style/devices";
import { theme } from "../../style/theme";

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 0.4rem;
  box-shadow: 1rem 1rem 2rem 0.5rem rgba(0, 0, 0, 1);
  z-index: 1;
  bottom: 0;

  @media ${devices.laptop} {
    margin-top: 4rem;
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
  /* top: 0;
  z-index: 2; */

  h1 {
    font-size: 1rem;
    margin-bottom: -0.4rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    color: white;
  }

  @media only screen and ${devices.laptop} {
    margin-right: 0.6rem;
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