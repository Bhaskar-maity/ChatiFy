const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
   cors: {
      origin: "*",
      methods: ["GET", "POST"],
   },
});
const PORT = 7000;
io.on("connection", (socket) => {
   console.log("socket connected at id " + socket.id);
});

httpServer.listen(PORT, () => {
   console.log("server listining at port " + PORT);
});
