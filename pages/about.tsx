import React from "react";
import { Layout } from "../components/Layout";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Layout>
        <div>About</div>
      </Layout>
    </>
  );
}
