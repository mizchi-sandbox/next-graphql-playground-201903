import React from "react";
import Renderer from "react-test-renderer";
import { Header } from "../Header";

test("snapshot example", () => {
  const tree = Renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
