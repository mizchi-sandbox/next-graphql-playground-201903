import React from "react";
import { Layout } from "../components/Layout";
import Head from "next/head";
import { useUsersQuery } from "../gen/graphql-client-api";

export default function Apollo() {
  const { loading, data } = useUsersQuery();

  return (
    <>
      <Head>
        <title>apollo</title>
      </Head>
      <Layout>
        <div>
          {!loading && (
            <pre>
              <code>{JSON.stringify(data)}</code>
            </pre>
          )}
        </div>
      </Layout>
    </>
  );
}
