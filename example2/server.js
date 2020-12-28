const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const userArr = [];
app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("New Connection");
  userArr.push(socket.id);
  console.log(userArr);
});

http.listen(3000, function () {
  console.log("listening..");
});
