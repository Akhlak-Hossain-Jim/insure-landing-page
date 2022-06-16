import React from "react";
import styled from "styled-components";

export default function FindOut() {
  return (
    <Container>
      <h1>Find out more about how we work</h1>
      <button>How we work</button>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  color: var(--gray);
  background-color: var(--l-violet);
  background-image: url("/images/bg-pattern-how-we-work-desktop.svg");
  background-repeat: no-repeat;
  background-position: right top;
  background-size: contain;
  padding: 69px 80px;
  max-width: 1115px;
  margin: 0 auto;
  margin-bottom: 150px;
  @media (max-width: 1165px) {
    margin: 0 50px;
    margin-bottom: 150px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 548px) {
    margin: 0 24px;
    margin-bottom: 140px;
    background-image: url("/images/bg-pattern-how-we-work-mobile.svg");
    padding: 72px 36px;
  }
  & > h1 {
    width: min(474px, 100%);
    font-weight: 400;
    font-size: 56px;
    line-height: 100%;
    letter-spacing: -0.015em;
    @media (max-width: 548px) {
      font-size: calc(32px + 2vmin);
    }
  }
  & > button {
    border: 2px solid var(--gray);
    padding: 12px 28px;
    color: var(--gray);
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    text-decoration: none;
    width: max-content;
    background-color: transparent;
    outline: 0;
    &:hover {
      background-color: var(--gray);
      color: var(--l-violet);
      border-color: var(--gray);
    }
    @media (max-width: 548px) {
      margin: 0 auto;
    }
  }
`;
