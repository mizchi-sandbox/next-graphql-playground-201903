import React from "react";
import Renderer from "react-test-renderer";
import { Layout } from "../Layout";

test("snapshot example", () => {
  const tree = Renderer.create(
    <Layout>
      <h1>Hello</h1>
    </Layout>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
