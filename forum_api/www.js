import spdy from "spdy";
import fs from "fs";

import normalizePort from "./utils/normalizePort.js";
import application from "./src/main.js";

const options = {
  key: fs.readFileSync("./keys/server.key"),
  cert: fs.readFileSync("./keys/server.crt"),

  spdy: {
    protocols: ["h2", "spdy/3.1", "spdy/3", "spdy/2", "http/1.1", "http/1.0"],
    plain: false,
    "x-forwarded-for": true,
  },
};

const port = normalizePort(process.env.PORT || 443);
application.set("port", port);
application.set("title", "API V1.0");

const server = spdy.createServer(options, application);

server.listen(port, (error) => {
  if (error) return process.exit(1);

  console.log("Server is started at port 443");
});
