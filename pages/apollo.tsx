import React from "react";
import { Layout } from "../components/Layout";
import Head from "next/head";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

const GET_USERS = gql`
  query {
    users {
      id
      name
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
        <div>
          {!loading && (
            <ul>
              {data.users.map((u: { id: string; name: string }) => {
                return <li key={u.id}>{u.name}</li>;
              })}
            </ul>
          )}
        </div>
      </Layout>
    </>
  );
}
