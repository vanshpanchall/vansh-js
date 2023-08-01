const input = document.querySelector(".task");
const submit = document.querySelector(".btn");
const taskList = document.querySelector(".addTask");

function addTask() {
  if (input.value == "") {
    alert("Please Enter a Task");
  } else {
    const li = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = input.value;
    li.appendChild(taskSpan);
    taskList.appendChild(li);
    input.value = "";
  }
}
