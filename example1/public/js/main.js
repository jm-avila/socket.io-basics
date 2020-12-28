const socket = io();
const msg = document.querySelector("#msg");
const sendBtn = document.querySelector("#sendBtn");
const msgContainer = document.querySelector("#container");

const broadcastMsg = document.querySelector("#broadcast");
const broadcastBtn = document.querySelector("#broadcastBtn");
const broadcastContainer = document.querySelector("#broadcastContainer");

sendBtn.addEventListener("click", () => {
  if (msg.value) socket.emit("outgoingMsg", msg.value);
});

broadcastBtn.addEventListener("click", () => {
  if (broadcastMsg.value) socket.emit("outgoingBroadcast", broadcastMsg.value);
});

socket.on("incomingMsg", (data) => {
  const p = document.createElement("p");
  p.innerText = data;
  msgContainer.appendChild(p);
});
