document.addEventListener("DOMContentLoaded", () => {
  const socket = io();
  const discBtn = document.querySelector("#disconnected");
  const conBtn = document.querySelector("#connect");

  socket.on("connect", () => {
    document.body.style.background = "green";
  });

  socket.on("disconnect", () => {
    document.body.style.background = "red";
  });

  discBtn.addEventListener("click", () => {
    socket.emit("disconnect");
  });

  conBtn.addEventListener("click", () => {
    socket.emit("connect");
  });
});
