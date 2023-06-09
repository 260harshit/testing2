// import app from "./api/server.js";
// import consola from "consola";
// import dotenv from "dotenv";

// dotenv.config();

// app.listen(3000, () => consola.info("Server started"));
import gqlServer from "./api/server.js";
const port = process.env.PORT || 4e3;
const server = await gqlServer();
server.listen({ port: Number(port) }, () => {
  console.log(`server started on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map