const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

let count = 0;

app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  count++;
  if (count % 2 == 0) {
    socket.join("room2");
    io.to("room2").emit("print", "You are in room 2.", "green");
  } else {
    socket.join("room1");
    io.to("room1").emit("print", "You are in room 1.", "red");
  }
});

http.listen(3000, function () {
  console.log("listening..");
});
