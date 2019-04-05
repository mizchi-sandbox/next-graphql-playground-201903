// import setup from "./setup";
import "@babel/polyfill";
import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import fs from "fs";
import path from "path";
import { resolvers } from "./resolvers";
import cors from "cors";

const typeDefs = fs
  .readFileSync(path.join(__dirname, "../graphql/schema.graphql"))
  .toString();

const PORT = 3030;
const app = express();

const apolloServer = new ApolloServer({
  typeDefs: gql`
    ${typeDefs}
  `,
  resolvers: resolvers as any
});

apolloServer.applyMiddleware({ app });

app.use(cors());
app.get("/", (_req, res) => {
  res.send("It works");
});

app.listen(PORT, () => {
  console.log(
    `🚀 Server ready at http://localhost:3030${apolloServer.graphqlPath}`
  );
});
