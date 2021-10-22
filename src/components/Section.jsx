import React from "react";

import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Section() {
  return (
    <Container>
      <Text>
        <h1>Model X</h1>
        <p> Order Online for Touchless Delivery </p>
      </Text>
      <BottomWrapper>
        <Buttons>
          <ButtonLeft>
            <a href="#">Left Button</a>
          </ButtonLeft>
          <ButtonRight>
            <a href="#">Right Button</a>
          </ButtonRight>
        </Buttons>
        <Next>
          <KeyboardArrowDownIcon />
        </Next>
      </BottomWrapper>
    </Container>
  );
}

export default Section;

const Container = styled.div`
  height: 100vh;
  background-image: url("./images/model-x.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 100px;
  align-items: center;
`;
const Text = styled.div`
  text-align: center;
  color: grey;
`;
const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  margin: 1rem;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  @media only screen and (max-width: 710px) {
    flex-direction: column;
  }
`;
const ButtonLeft = styled.div`
  padding: 15px 50px;
  background-color: black;
  color: white;
  opacity: 0.75;
  border-radius: 40px;
  cursor: pointer;
  a {
    color: white;
  }
`;
const ButtonRight = styled(ButtonLeft)`
  background-color: white;
  opacity: 0.65;

  a {
    color: black;
  }
`;
const Next = styled.div`
  cursor: pointer;
  animation: scroll-down 1s infinite ease-in;

  * {
    color: white;
  }
`;
