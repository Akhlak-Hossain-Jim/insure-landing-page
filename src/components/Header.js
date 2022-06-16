import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";
import Nav from "./Nav";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Container>
        <div className="header_container">
          <Logo />
          <div className="header_container__nav">
            <Nav />
          </div>
          <div
            className="header_container__ham"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <img
                src="/images/icon-close.svg"
                alt="close menu"
                className="header_container__ham_icon"
              />
            ) : (
              <img
                src="/images/icon-hamburger.svg"
                alt="open menu"
                className="header_container__ham_icon"
              />
            )}
          </div>
        </div>
      </Container>
      {isOpen && <Menu />}
    </>
  );
}

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  background-color: var(--white);
  padding: 20px 0;
  @media (max-width: 548px) {
    padding: 0;
  }
  .header {
    &_container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1115px;
      margin: 0 auto;
      @media (max-width: 1165px) {
        padding: 0 50px;
      }
      @media (max-width: 548px) {
        padding: 24px;
      }
      &__nav {
        @media (max-width: 768px) {
          display: none;
        }
      }
      &__ham {
        @media (min-width: 769px) {
          display: none;
        }
      }
    }
  }
`;
