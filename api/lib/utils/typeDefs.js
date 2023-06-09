var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { gql } from "apollo-server-koa";
import { readFile } from "node:fs/promises";
const importGraphQL = /* @__PURE__ */ __name(async (file) => readFile(file, { encoding: "utf8" }), "importGraphQL");
const gqlFileWrapper = /* @__PURE__ */ __name((...files) => gql`
  ${files}
`, "gqlFileWrapper");
const graphqlDir = new URL("../../../graphql/", import.meta.url);
const enums = await importGraphQL(new URL("enums.graphql", graphqlDir));
const resolvers = await importGraphQL(new URL("resolvers.graphql", graphqlDir));
const schema = await importGraphQL(new URL("schema.graphql", graphqlDir));
const RootTypedef = gqlFileWrapper(enums, schema, resolvers);
export {
  RootTypedef
};
//# sourceMappingURL=typeDefs.js.map