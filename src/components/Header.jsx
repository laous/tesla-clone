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
          <a href="#model-s">Model S</a>
        </li>
        <li>
          <a href="#model-3">Model 3</a>
        </li>
        <li>
          <a href="#model-x">Model X</a>
        </li>
        <li>
          <a href="#model-y">Model Y</a>
        </li>
      </Menu>
      <RightMenu>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Account</a>
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
  height: 80px;
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
  align-items: center;
  font-weight: 700;

  @media only screen and (max-width: 710px) {
    display: none;
  }

  li,
  a {
    text-transform: uppercase;
    padding: 5px 10px;
    border-radius: 20px;
    color: black;
  }

  li:hover {
    background-color: #a2abb5;
  }
`;
const RightMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  li,
  a {
    text-transform: uppercase;
    padding: 5px 10px;
    border-radius: 20px;
    color: black;
  }

  li:hover {
    background-color: #a2abb5;
  }
`;
const HamMenu = styled.div`
  cursor: pointer;
`;
