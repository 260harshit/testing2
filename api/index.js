import gqlServer from "#root/server";
const port = process.env.PORT || 4e3;
const server = await gqlServer();
server.listen({ port: Number(port) }, () => {
  console.log(`server started on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map