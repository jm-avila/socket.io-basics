document.addEventListener("DOMContentLoaded", () => {
  const socket = io();
  const heading = document.querySelector("#heading");

  socket.on("print", (msg, color) => {
    heading.innerHTML = msg;
    document.body.style.backgroundColor = color;
  });
});
