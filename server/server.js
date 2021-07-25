const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);
const PORT = 7000;
io.on("connection", (socket) => {
   console.log("socket connected" + socket.id);
});

httpServer.listen(PORT, () => {
   console.log("server listining at port " + PORT);
});
