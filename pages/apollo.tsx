import React from "react";
import { Layout } from "../components/Layout";
import Head from "next/head";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

const GET_USERS = gql`
  query {
    hello {
      message
    }
  }
`;

export default function Apollo() {
  const { loading, data } = useQuery(GET_USERS);

  return (
    <>
      <Head>
        <title>apollo</title>
      </Head>

      <Layout>
        <div>{!loading && <div>{data.hello.message}</div>}</div>
      </Layout>
    </>
  );
}
