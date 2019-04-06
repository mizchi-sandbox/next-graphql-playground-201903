import React from "react";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { useUsersQuery, useAddUserMutation } from "../gen/client-api";

export default function Apollo() {
  const usersQuery = useUsersQuery();
  const addUser = useAddUserMutation();

  return (
    <>
      <Head>
        <title>apollo</title>
      </Head>
      <Layout>
        <button
          onClick={async _ev => {
            await addUser({ variables: { name: "foo" } });
            usersQuery.refetch();
          }}
        >
          addUser
        </button>
        <div>
          {!usersQuery.loading && (
            <pre>
              <code>{JSON.stringify(usersQuery.data, null, 2)}</code>
            </pre>
          )}
        </div>
      </Layout>
    </>
  );
}
