import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <div className="home_container">
        <div className="home_left">
          <div className="home_left__line" />
          <h1>Humanizing your insurance.</h1>
          <p>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <a
            href="/"
            className="home_left__link"
            onClick={(e) => e.preventDefault()}
          >
            View plans
          </a>
        </div>
        <div className="home_right">
          <img
            src="/images/image-intro-desktop.jpg"
            alt="parents holding their children's hands"
            className="home_right__img"
          />
        </div>
        <div className="home_right__bg"></div>
        <div className="home_container_rt_bg"></div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  background-color: var(--l-violet);
  color: var(--gray);
  position: relative;
  .home {
    &_container {
      padding-top: 185px;
      padding-bottom: 127px;
      display: flex;
      gap: 34px;
      max-width: 1115px;
      margin: 0 auto;
      @media (max-width: 1165px) {
        padding: 0 50px;
        padding-top: 185px;
        padding-bottom: 127px;
      }
      @media (max-width: 548px) {
        padding: 0;
        padding-top: 80px;
        padding-bottom: 93px;
        flex-direction: column-reverse;
      }
    }
    &_left {
      flex: 1;
      &__line {
        width: 150px;
        height: 1px;
        background-color: var(--gray);
        margin-bottom: 33px;
        @media (max-width: 548px) {
          margin-bottom: 25;
        }
      }
      & > h1 {
        padding-top: 30px;
        padding-bottom: 28px;
        width: min(484px, 100%);
        font-size: calc(56.86px + 2vmin);
        font-weight: 400;
        line-height: 89%;
        letter-spacing: -0.015em;
        @media (max-width: 548px) {
          padding-bottom: 16px;
          font-size: calc(40.5px + 2vmin);
        }
      }
      & > p {
        padding-bottom: 42px;
        width: min(536px, 100%);
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        letter-spacing: 0.003em;
        @media (max-width: 548px) {
          padding-bottom: 32px;
        }
      }
      & > a {
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
        &:hover {
          background-color: var(--gray);
          color: var(--l-violet);
          border-color: var(--gray);
        }
        @media (max-width: 548px) {
          margin: 0 auto;
        }
      }
      @media (max-width: 548px) {
        padding: 37px 26px 0;
        text-align: center;
        display: flex;
        flex-direction: column;
      }
    }
    &_right {
      position: relative;
      flex: 1;
      width: min(540px, 100%);
      margin-bottom: -282px;
      & > img {
        width: min(540px, 100%);
        height: auto;
      }
      @media (max-width: 548px) {
        margin-bottom: 0;
      }
    }
  }

  .home_container_rt_bg {
    position: absolute;
    top: 0;
    right: 0;
    width: 436px;
    aspect-ratio: 436 / 593;
    background-image: url("/images/bg-pattern-intro-right-desktop.svg");
    background-repeat: no-repeat;
    background-position: right top;
    background-size: contain;
    @media (max-width: 548px) {
      background-image: url("/images/bg-pattern-intro-right-mobile.svg");
      top: auto;
      bottom: 0;
      transform: translateY(50%);
      width: 124px;
      aspect-ratio: 124 / 330;
    }
  }
  .home_right__bg {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(65.5%);
    width: 195px;
    aspect-ratio: 195 / 504;
    background-image: url("/images/bg-pattern-intro-left-desktop.svg");
    background-repeat: no-repeat;
    background-position: right top;
    background-size: contain;
    @media (max-width: 548px) {
      background-image: url("/images/bg-pattern-intro-left-mobile.svg");
      top: 50%;
      bottom: auto;
      width: 168px;
      aspect-ratio: 168 / 165;
      transform: translateY(1%);
    }
  }
`;
