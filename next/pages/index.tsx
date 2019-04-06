import React from "react";
import { Layout } from "../components/Layout";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>

      <Layout>
        <div>Index</div>
      </Layout>
    </>
  );
}
