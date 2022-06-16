import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { BsTwitter, BsPinterest, BsInstagram } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";

export default function Footer() {
  const LINKS = [
    {
      title: "Our company",
      linkName: ["How we work", "Why insure?", "View plans", "reviews"],
      links: ["", "", "", ""],
    },
    {
      title: "Help me",
      linkName: ["faq", "terms of use", "Privacy policy", "Cookies"],
      links: ["", "", "", ""],
    },
    {
      title: "Social",
      linkName: ["sales", "support", "Live chat"],
      links: ["", "", ""],
    },
    {
      title: "Others",
      linkName: ["Careers", "press", "Licenses"],
      links: ["", "", ""],
    },
  ];

  return (
    <Container>
      <div className="footer_container">
        <div className="logo_and_social">
          <Logo />
          <div className="logo_and_social__social">
            <a href="/" onClick={(e) => e.preventDefault()}>
              <GrFacebook />
            </a>
            <a href="/" onClick={(e) => e.preventDefault()}>
              <BsTwitter />
            </a>
            <a href="/" onClick={(e) => e.preventDefault()}>
              <BsPinterest />
            </a>
            <a href="/" onClick={(e) => e.preventDefault()}>
              <BsInstagram />
            </a>
          </div>
        </div>
        <div className="footer_container__links">
          {React.Children.toArray(
            LINKS.map((data) => (
              <div className="footer_container__links_link">
                <div className="footer_container__links_link__title">
                  {data.title}
                </div>
                <div className="footer_container__links_link__box">
                  {React.Children.toArray(
                    data.linkName.map((d, i) => (
                      <a
                        href={data.links[i]}
                        className="footer_container__links_link__box_link"
                        onClick={(e) =>
                          data.links[i] === "" && e.preventDefault()
                        }
                      >
                        {d}
                      </a>
                    ))
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  background-color: var(--gray);
  background-image: url("/images/bg-pattern-footer-desktop.svg");
  background-repeat: no-repeat;
  background-position: top left;
  background-size: min(528px, 100%);
  @media (max-width: 548px) {
    background-image: url("/images/bg-pattern-footer-mobile.svg");
  }
  .footer_container {
    max-width: 1115px;
    margin: 0 auto;
    padding: 67px 0 64px;
    @media (max-width: 1165px) {
      padding: 67px 50px 64px;
    }
    @media (max-width: 548px) {
      padding: 88px 24px;
    }
    .logo_and_social {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2px 33px 0;
      border-bottom: 1px solid var(--blue);
      gap: 32px;
      @media (max-width: 548px) {
        flex-direction: column;
        padding: 0;
        padding-bottom: 40px;
      }
      &__social {
        display: flex;
        align-items: center;
        gap: 16px;
        & > a {
          text-decoration: none;
          font-size: 24px;
          color: var(--g-violet);
          &:hover {
            color: var(--d-violet);
          }
        }
      }
    }
    &__links {
      padding-top: 47px;
      display: flex;
      flex-basis: 1;
      gap: 39px;
      flex-wrap: wrap;
      @media (max-width: 548px) {
        padding-top: 39px;
        flex-direction: column;
        text-align: center;
      }
      &_link {
        display: flex;
        flex-direction: column;
        gap: 35px;
        width: min(246px, 100%);
        @media (max-width: 548px) {
          align-items: center;
          width: 100%;
        }
        &__title {
          font-weight: 700;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--g-violet);
        }
        &__box {
          display: flex;
          flex-direction: column;
          gap: 15px;
          a {
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: var(--d-violet);
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;
