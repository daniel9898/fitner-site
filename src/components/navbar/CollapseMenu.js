import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const CollapseMenu = ({navbarState, handleNavbar}) => {
    const { open } = useSpring({ open: navbarState ? 0 : 1 });

    if (navbarState === true) {
        return (
            <CollapseWrapper style={{
                transform: open.interpolate({
                    range: [0, 0.2, 0.3, 1],
                    output: [0, -20, 0, -200],
                }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
            }}
            >
                <NavLinks>
                    <li><a href="/" onClick={handleNavbar}>¡HOLA!</a></li>
                    <li><a href="/" onClick={handleNavbar}>¿PORQUE FITER?</a></li>
                    <li><a href="/" onClick={handleNavbar}>SEDES</a></li>
                    <li><a href="/" onClick={handleNavbar}>ASOCIATE AHORA</a></li>
                    <li><a href="/" onClick={handleNavbar}>CLASES</a></li>
                    <li><a href="/" onClick={handleNavbar}>PREGUNTAS FRECUENTES</a></li>
                </NavLinks>
            </CollapseWrapper>
        );
    }
    return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #10c3d9;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;