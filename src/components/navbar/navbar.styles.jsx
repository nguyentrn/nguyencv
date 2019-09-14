import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { devices } from '../../style/devices';
import theme from '../../style/theme';

export const NavbarContainer = styled.div`
  z-index: 10;
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
`;

export const NavbarWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  flex-grow: 1;
  @media ${devices.laptop} {
    max-width: 4.5rem;
    margin: 2rem 1rem 0 0;
    flex-direction: column;
    position: relative;
    z-index: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  flex-grow: 1;
  text-align: center;
  padding: 0.4rem 0 0;
  color: ${theme.dark};
  background: ${theme.light};
  font-size: 0.7rem;
  z-index: 10;
  -webkit-box-shadow: 0.1rem 0.1rem 1rem 0.1rem rgba(0, 0, 0, 0.04);
  box-shadow: 0.1rem 0.1rem 1rem 0.1rem rgba(0, 0, 0, 0.04);
  -webkit-transition: 0.3s ease-out;
  -o-transition: 0.3s ease-out;
  transition: 0.3s ease-out;

  &.active {
    background: ${theme.primaryColor};
    z-index: 10;

    color: ${theme.lighterColor};
    border-bottom: 1px solid ${theme.neutralColor};
  }

  p {
    margin-bottom: 0.1rem;
    line-height: 1rem;
  }

  h1 {
    font-size: 1rem;
    margin-bottom: -0.4rem;
    z-index: 10;
  }

  &:hover {
    background: ${theme.primaryColor};
    color: ${theme.lighterColor};
    z-index: 10;
  }

  @media ${devices.laptop} {
    box-shadow: 0.5rem 0.5rem 1rem 0.1rem rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 4.5rem;
    height: 4.5rem;
    font-size: 0.8rem;

    &.active {
      border-bottom: none;
    }

    &:after {
      content: '';
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
