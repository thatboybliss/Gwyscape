
const app = require("./src/app");
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

require("./src/sockets/bridge.socket")(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("Server running on " + PORT));
