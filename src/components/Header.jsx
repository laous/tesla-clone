import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
function Header() {
  return (
    <Container>
      <Logo>
        <img src="./images/logo.svg" alt="" />
      </Logo>
      <Menu>
        <li>
          <a href="">Model X</a>
        </li>
        <li>
          <a href="">Model Y</a>
        </li>
        <li>
          <a href="">Model S</a>
        </li>
        <li>
          <a href="">Model 3</a>
        </li>
      </Menu>
      <RightMenu>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">Account</a>
        </li>
        <HamMenu>
          <MenuIcon />
        </HamMenu>
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
const Logo = styled.div``;
const Menu = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  font-weight: 700;
  @media only screen and (max-width: 710px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  font-weight: 700;
`;
const HamMenu = styled.div`
  cursor: pointer;
`;
