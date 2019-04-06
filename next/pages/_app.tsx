import React from "react";
import App, { Container } from "next/app";
import { createGlobalStyle } from "styled-components";
import withApolloClient from "../lib/withApolloClient";
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";

class ApolloApp extends App<{ apolloClient: ApolloClient<any> }> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <>
        <GlobalStyle />
        <Container>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Container>
      </>
    );
  }
}

export default withApolloClient(ApolloApp);

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`;
