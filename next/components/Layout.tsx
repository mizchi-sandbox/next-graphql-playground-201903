import React from "react";
import { Header } from "./Header";
import styled from "styled-components";

export function Layout(props: { children: React.ReactNode }) {
  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
}

const Container = styled.div`
  padding: 10px 5px;
  width: 80vw;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;
