import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  Logo,
  Nav,
  NavContainer,
  NavItem,
  NavLink,
  NavMenu,
  MobileIcon,
} from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <Nav>
        <NavContainer>
          <Logo> Logo </Logo>
          <MobileIcon onClick={handleClick}>
            {!click ? <FaBars /> : <FaTimes />}
          </MobileIcon>
          <NavMenu click={click}>
            <NavItem>
              <NavLink To='/'> Home </NavLink>
            </NavItem>
            <NavItem>
              <NavLink> About </NavLink>
            </NavItem>
            <NavItem>
              <NavLink> Contact </NavLink>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
