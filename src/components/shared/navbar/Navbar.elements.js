import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  background-color: ${(props) => (props.bg ? props.bg : '#e8e6e6')};
  border-bottom: 2px solid #e8e6e6;
  position: sticky;
  top: 0;
  font-size: 1.2rem;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: auto;
  padding-inline: 20px;
`;

export const Logo = styled(Link)`
  font-size: 2rem;
  justify-self: flex-start;
  cursor: pointer;
  color: #000;
`;

export const MobileIcon = styled.div`
  display: none;
  font-size: 1.8rem;

  @media screen and (max-width: 960px) {
    display: block;
    cursor: pointer;
    position: absolute;
    align-self: center;
    justify-self: center;
    top: -20px;
    right: 0px;
    z-index: 5;
    transform: translate(-100%, 70%);
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10px;
  list-style: none;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 40px;
    left: ${({ click }) => (click ? '0%' : '-100%')};
    background: #e8e6e6;
    transition: all 0.5s ease;
    opacity: 1;
  }
`;
export const NavItem = styled.li`
  margin: 20px auto;
`;
export const NavLink = styled.a`
  color: #000;
  border-bottom: 2px solid transparent;
  padding: 2rem 1rem;
  cursor: pointer;

  &:hover {
    border-bottom-color: red;
  }

  @media screen and (max-width: 960px) {
    border: none;
  }
`;
