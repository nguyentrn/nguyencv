import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { devices } from "../../ultilities/devices";

export const NavbarContainer = styled.div`
  display: flex;
  border-radius: 0.4rem;
  box-shadow: 1rem 1rem 2rem 0.5rem rgba(0, 0, 0, 1);

  @media ${devices.laptop} {
    margin-top: 2rem;
    flex-direction: column;
  }
`;

export const StyledNavLink = styled(NavLink)`
  width: 25%;
  text-align: center;
  padding: 0.8rem 0 0.4rem;
  color: #333;
  transition: 0.4s ease;
  background: #fff;
  font-size: 0.7rem;

  h1 {
    font-size: 1rem;
  }

  &:hover {
    background: #aaa;
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
      border: 1px solid #ccc;
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
