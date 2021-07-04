import { Server, Request, ResponseToolkit } from "@hapi/hapi";
import { connection } from "./connection";
const dotenv = require("dotenv");
dotenv.config({ path: "./.env", slient: true });

const init = async () => {
  const server: Server = new Server({
    port: process.env.PORT || 5000,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ["*"], // an array of origins or 'ignore'
      },
    },
  });

  const result = dotenv.config();
  if (result.error) throw result.error;

  const io = require("socket.io")(server.listener, {
    cors: {
      origins: "http://localhost:8000",
    },
  });
  global["io"] = io;

  const routes = require("./routes");
  server.route(routes);

  connection();

  io.on("connection", function (socket) {
    if (
      process.env.LIMIT_CLIENT &&
      io.engine.clientsCount >= process.env.LIMIT_CLIENT
    ) {
      socket.disconnect();
      console.log(socket.id, "disconnected", io.engine.clientsCount);
    }
    console.log(socket.id, "someone connected");
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
