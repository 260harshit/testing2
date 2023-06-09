var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { RootResolver } from "#resolvers/RootResolver";
import { defaultDocument, defaultVariables } from "#root/defaultDocument";
import { RootTypedef } from "#utils/typeDefs";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { ApolloServer } from "apollo-server-koa";
import Koa from "koa";
const gqlServer = /* @__PURE__ */ __name(async () => {
  const app = new Koa();
  const apolloServer = new ApolloServer({
    resolvers: RootResolver,
    typeDefs: RootTypedef,
    introspection: true,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({
        footer: false,
        document: defaultDocument,
        variables: defaultVariables,
        embed: true
      })
    ]
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/", cors: true });
  return app;
}, "gqlServer");
var server_default = gqlServer;
export {
  server_default as default
};
//# sourceMappingURL=server.js.map