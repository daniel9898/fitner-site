import React, { useState } from 'react'
import styled from "styled-components";
import { animated } from "react-spring";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import Brand from "./Brand";

const Navbar = () => {
    const [navbarOpen, setNavbar]= useState(false);

    function handleNavbar (){
        setNavbar(!navbarOpen)
    }

    return (
        <>
            <NavBar>
                <FlexContainer>
                    <Brand />
                    <NavLinks>
                        <a href="/">¡HOLA!</a>
                        <a href="/">¿PORQUE FITER?</a>
                        <a href="/">SEDES</a>
                        <a href="/">ASOCIATE AHORA</a>
                        <a href="/">CLASES</a>
                        <a href="/">PREGUNTAS FRECUENTES</a>
                    </NavLinks>
                    <BurgerWrapper>
                        <BurgerMenu
                            navbarState={navbarOpen}
                            handleNavbar={handleNavbar}
                        />
                    </BurgerWrapper>
                </FlexContainer>
            </NavBar>
            <CollapseMenu
                navbarState={navbarOpen}
                handleNavbar={handleNavbar}
            />
        </>
    )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  background: #10c3d9;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height:54px;
`;

const NavLinks = styled(animated.ul)`
  margin: auto;

  & a {
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  @media (min-width: 769px) {
    display: none;
  }
`;