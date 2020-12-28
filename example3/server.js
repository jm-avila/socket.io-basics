const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static(__dirname + "/public"));

const teacher_ns = io.of("/teacher-names");
const students_ns = io.of("/students-names");

teacher_ns.on("connection", (socket) => {
  socket.emit("hello_msg", "Hi to all teachers.");
});

students_ns.on("connection", (socket) => {
  socket.emit("hello_msg", "Hi to all students.");
});

http.listen(3000, function () {
  console.log("listening..");
});
