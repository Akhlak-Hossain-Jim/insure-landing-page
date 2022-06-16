import React from "react";
import styled from "styled-components";

export default function Nav() {
  return (
    <Container>
      <a href="/" className="nav_link" onClick={(e) => e.preventDefault()}>
        How we work
      </a>
      <a href="/" className="nav_link" onClick={(e) => e.preventDefault()}>
        Blog
      </a>
      <a href="/" className="nav_link" onClick={(e) => e.preventDefault()}>
        Account
      </a>
      <a
        href="/"
        className="nav_link nav_link__button"
        onClick={(e) => e.preventDefault()}
      >
        View Plans
      </a>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 26px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 41px;
  }
  .nav_link {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.06em;
    color: var(--g-violet);
    cursor: pointer;
    text-decoration: none;
    &:hover {
      color: var(--black);
    }
    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 23px;
      letter-spacing: 0.08em;
      color: var(--gray);
    }
    &__button {
      border: 2px solid var(--black);
      padding: 11px 28px;
      @media (max-width: 768px) {
        padding: 18px 27px 15px;
        width: auto;
        border: 2px solid var(--gray);
        width: 100%;
        text-align: center;
      }
      &:hover {
        background-color: var(--d-violet);
        color: var(--gray);
      }
    }
  }
`;
