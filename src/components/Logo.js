import React from "react";
import styled from "styled-components";

export default function Logo() {
  return <Container src="/images/logo.svg" alt="logo" />;
}

const Container = styled.img`
  width: min(112px, 100%);
`;
