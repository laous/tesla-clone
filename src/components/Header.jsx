import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

function Header() {
  const [sidebarActive, setSidebarActive] = useState(false);
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
        <li>Shop</li>
        <li>Account</li>
        <HamMenu>
          <MenuIcon onClick={() => setSidebarActive(true)} />
        </HamMenu>
      </RightMenu>
      <SideContainer side={sidebarActive}>
        <CloseContainer>
          <ClearIcon
            onClick={() => {
              setSidebarActive(false);
              console.log(sidebarActive);
            }}
          />
        </CloseContainer>

        <Sidebar>
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
          <li>Cybertruck</li>
          <li>Solar Panel</li>
          <li>Existing Inventory</li>
          <li>Utilities</li>
          <li>Model S</li>
          <li>Model 3</li>
          <li>Model X</li>
          <li>Model Y</li>
          <li>Cybertruck</li>
          <li>Solar Panel</li>
          <li>Existing Inventory</li>
          <li>Utilities</li>
        </Sidebar>
      </SideContainer>
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
  z-index: 1;
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
    cursor: pointer;
  }

  li:hover {
    background-color: #a2abb5;
  }
`;
const HamMenu = styled.div`
  cursor: pointer;
`;
const SideContainer = styled.div`
  width: 250px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: white;
  display: flex;
  gap: 1rem;
  padding: 2rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  transition: transform 0.5s ease;
  transform: ${(props) => (props.side ? "translateX(0%)" : "translateX(100%)")};
`;

const Sidebar = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding-top: 3rem;
  * {
    cursor: pointer;
    text-transform: uppercase;
  }
`;

const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  * {
    cursor: pointer;
  }
`;
