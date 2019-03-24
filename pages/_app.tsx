import React from "react";
import App, { Container, NextAppContext } from "next/app";
import { createGlobalStyle } from "styled-components";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <Container>
          <Component {...pageProps} />
        </Container>
      </>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`;
