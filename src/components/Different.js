import React from "react";
import styled from "styled-components";

export default function Different() {
  const Differences = [
    {
      image: "icon-snappy-process",
      title: "Snappy Process",
      description:
        "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
    },
    {
      image: "icon-affordable-prices",
      title: "Affordable Prices",
      description:
        "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    },
    {
      image: "icon-people-first",
      title: "People First",
      description:
        "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
    },
  ];
  return (
    <Container>
      <div className="difference_line"></div>
      <h1>We’re different</h1>
      <div className="difference_box">
        {React.Children.toArray(
          Differences.map((data) => (
            <div className="difference_box__card">
              <img
                src={`/images/${data.image}.svg`}
                alt={`${data.title} illustration`}
                className="difference_box__card_icon"
              />
              <h2 className="difference_box__card_title">{data.title}</h2>
              <p className="difference_box__card_description">
                {data.description}
              </p>
            </div>
          ))
        )}
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding-top: 305px;
  padding-bottom: 158px;
  display: flex;
  flex-direction: column;
  max-width: 1115px;
  margin: 0 auto;
  @media (max-width: 1165px) {
    padding: 0 50px;
    padding-top: 305px;
    padding-bottom: 158px;
  }
  @media (max-width: 548px) {
    padding: 140px 24px;
    text-align: center;
    align-items: center;
  }
  & > .difference_line {
    width: 150px;
    height: 1px;
    background: var(--white-2);
    margin-bottom: 32px;
    @media (max-width: 548px) {
      margin-bottom: 13px;
    }
  }
  & > h1 {
    font-size: 72px;
    line-height: 89%;
    letter-spacing: -0.015em;
    color: var(--d-violet);
    padding-top: 30px;
    padding-bottom: 67px;
    @media (max-width: 548px) {
      font-size: 48px;
      padding-bottom: 52px;
    }
  }
  & > .difference_box {
    display: flex;
    flex-wrap: wrap;
    gap: 31px;
    @media (max-width: 548px) {
      align-items: center;
      gap: 57px;
      flex-direction: column;
    }
    & > .difference_box__card {
      width: min(349px, 100%);
      & > img {
        width: 86px;
        height: auto;
        margin-bottom: 17px;
      }
      & > h2 {
        margin: 22px 0;
        font-size: 28px;
        line-height: 89%;
        letter-spacing: -0.015em;
        text-transform: capitalize;
        color: var(--d-violet);
      }
      & > p {
        margin-top: 22px;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        letter-spacing: 0.002em;
        color: var(--g-violet);
      }
    }
  }
`;
