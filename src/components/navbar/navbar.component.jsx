import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/language.context";
import { NavbarContainer, StyledNavLink } from "./navbar.styles";
import { FaUser, FaFileAlt, FaCode, FaRocketchat } from "react-icons/fa";

const contents = [
  { about: "About", resume: "Resume", note: "Note", contact: "Contact" },
  {
    about: "Giới thiệu",
    resume: "Bản tóm tắt",
    note: "Ghi chú",
    contact: "Liên hệ"
  }
];

const Navbar = () => {
  const { isVietnamese } = useContext(LanguageContext);
  const { about, resume, note, contact } = contents[isVietnamese ? 1 : 0];
  return (
    <div>
      <NavbarContainer>
        <StyledNavLink activeClassName="active" exact to="/about">
          <h1>
            <FaUser />
          </h1>
          <p>{about}</p>
        </StyledNavLink>
        <StyledNavLink activeClassName="active" exact to="/resume">
          <h1>
            <FaFileAlt />
          </h1>
          <p>{resume}</p>
        </StyledNavLink>
        <StyledNavLink activeClassName="active" exact to="/note">
          <h1>
            <FaCode />
          </h1>
          <p>{note}</p>
        </StyledNavLink>
        <StyledNavLink activeClassName="active" exact to="/contact">
          <h1>
            <FaRocketchat />
          </h1>
          <p>{contact}</p>
        </StyledNavLink>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
