const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  socket.on("outgoingMsg", (msg) => {
    io.emit("incomingMsg", msg);
  });
  socket.on("outgoingBroadcast", (msg) => {
    socket.broadcast.emit("incomingMsg", msg);
  });

  // socket.emit("msg", "Hello World");
});

http.listen(3000, function () {
  console.log("listening..");
});
