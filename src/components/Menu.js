import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

export default function Menu() {
  return (
    <Container>
      <Nav />
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  padding: 129px 24px;
  background-color: var(--d-violet);
  background-image: url("/images/bg-pattern-mobile-nav.svg");
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 100% auto;
  animation: down 0.5s ease-in-out forwards;
  @keyframes down {
    0% {
      transform: translateY(-200%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @media (min-width: 769px) {
    display: none;
  }
`;
