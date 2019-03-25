import React from "react";
import initApolloClient from "./initApolloClient";
import Head from "next/head";
import { renderToString } from "react-dom/server";
import { NextAppContext } from "next/app";
import { ApolloClient } from "apollo-boost";
import { getMarkupFromTree } from "react-apollo-hooks";

export default (
  App: React.ComponentType<any> & { getInitialProps?: Function }
) => {
  return class Apollo extends React.Component {
    static displayName = "withApollo(App)";
    apolloClient: ApolloClient<any>;
    static async getInitialProps(ctx: NextAppContext) {
      const { Component, router } = ctx;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApolloClient();
      if (!process.browser) {
        try {
          // Run all GraphQL queries
          await getMarkupFromTree({
            renderFunction: renderToString,
            tree: (
              <App
                {...appProps}
                Component={Component}
                router={router}
                apolloClient={apollo}
              />
            )
          });
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error("Error while running `getDataFromTree`", error);
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState
      };
    }

    constructor(props: any) {
      super(props);
      this.apolloClient = initApolloClient(props.apolloState);
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
};
