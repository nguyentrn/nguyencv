import React from "react";
import { NavbarContainer, StyledNavLink } from "./navbar.styles";
import { FaUser, FaFileAlt, FaCode, FaRocketchat } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <NavbarContainer>
        <StyledNavLink activeClassName="active" exact to="/about">
          <h1>
            <FaUser />
          </h1>
          About
        </StyledNavLink>
        <StyledNavLink activeClassName="active" exact to="/resume">
          <h1>
            <FaFileAlt />
          </h1>
          <p>Resume</p>
        </StyledNavLink>
        <StyledNavLink activeClassName="active" exact to="/blog">
          <h1>
            <FaCode />
          </h1>
          Blog
        </StyledNavLink>
        <StyledNavLink activeClassName="active" exact to="/contact">
          <h1>
            <FaRocketchat />
          </h1>
          Contact
        </StyledNavLink>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
