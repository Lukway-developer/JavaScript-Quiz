// import {GraphQLSchema} from "graphql";
import {typeDefs} from "./typedefs.js";
import {resolvers} from "./resolvers.js";

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import path from "path";
// import { graphql } from "graphql";

const Server = new ApolloServer({ typeDefs, resolvers });

const app = express();
Server.applyMiddleware({ app });

app.use(express.static("public"))

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "/public", "index.html"))
})

app.listen(process.env.PORT || 3100, () =>
  console.log(process.env.PORT + Server.graphqlPath)
);
