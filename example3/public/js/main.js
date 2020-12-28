document.addEventListener("DOMContentLoaded", () => {
  const teacherDiv = document.querySelector("#teachers");
  const studentsDiv = document.querySelector("#students");
  const teacherSocket = io("/teacher-names");
  const studentsSocket = io("/students-names");

  teacherSocket.on("hello_msg", (msg) => {
    teacherDiv.innerHTML = msg;
  });
  studentsSocket.on("hello_msg", (msg) => {
    studentsDiv.innerHTML = msg;
  });
});
