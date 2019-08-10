import React, { useContext } from "react";

import { LanguageContext } from "../../contexts/language.context";
import { NavbarContainer, StyledNavLink } from "./navbar.styles";
import { FaUser, FaFileAlt, FaCode, FaRocketchat } from "react-icons/fa";

const contents = [
  { about: "About", resume: "Resume", note: "Note", contact: "Contact" },
  {
    about: "Giới thiệu",
    resume: "Resume",
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
        <StyledNavLink exact to="/about">
          <div>
            <FaUser size={25} />
          </div>
          <p>{about}</p>
        </StyledNavLink>
        <StyledNavLink exact to="/resume">
          <div>
            <FaFileAlt size={25} />
          </div>
          <p>{resume}</p>
        </StyledNavLink>
        <StyledNavLink exact to="/note">
          <div>
            <FaCode size={25} />
          </div>
          <p>{note}</p>
        </StyledNavLink>
        <StyledNavLink exact to="/contact">
          <div>
            <FaRocketchat size={25} />
          </div>
          <p>{contact}</p>
        </StyledNavLink>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
