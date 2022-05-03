import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <li>Tesla-2021</li>
      <li>Privacy</li>
      <li>Contact</li>
      <li>Careers</li>
      <li>News</li>
      <li>Engage</li>
      <li>Locations</li>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  gap: 0.5rem;
  li {
    color: white;
    padding: 5px;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;
