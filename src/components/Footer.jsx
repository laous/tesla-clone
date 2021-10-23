import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <li>
        <a href="#">Tesla-2021</a>
      </li>
      <li>
        <a href="#">Privacy</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Careers</a>
      </li>
      <li>
        <a href="#">News</a>
      </li>
      <li>
        <a href="#">Engage</a>
      </li>
      <li>
        <a href="#">Locations</a>
      </li>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  gap: 0.5rem;
  a {
    color: white;
    padding: 5px;
    :hover {
      text-decoration: underline;
    }
  }
`;
