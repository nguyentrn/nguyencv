import React, { useContext } from 'react';
import { FaUser, FaFileAlt, FaCode, FaRocketchat } from 'react-icons/fa';
import { NavbarContainer, NavbarWrapper, StyledNavLink } from './navbar.styles';
import { LanguageContext } from '../../contexts/language.context';

const contents = [
  { about: 'About', resume: 'Resume', note: 'Note', contact: 'Contact' },
  {
    about: 'Giới thiệu',
    resume: 'Resume',
    note: 'Ghi chú',
    contact: 'Liên hệ',
  },
];

const Navbar = () => {
  const { isVietnamese } = useContext(LanguageContext);
  const { about, resume, note, contact } = contents[isVietnamese ? 1 : 0];
  const icons = [
    { ic: FaUser, label: about, path: '/about' },
    { ic: FaFileAlt, label: resume, path: '/resume' },
    { ic: FaCode, label: note, path: '/note' },
    { ic: FaRocketchat, label: contact, path: '/contact' },
  ];
  return (
    <NavbarContainer>
      <NavbarWrapper>
        {icons.map(icon => (
          <StyledNavLink key={icon.label} exact to={icon.path}>
            <div>
              <icon.ic size={22} />
            </div>
            <p>{icon.label}</p>
          </StyledNavLink>
        ))}
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
