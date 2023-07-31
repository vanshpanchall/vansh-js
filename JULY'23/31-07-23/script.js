let input = document.querySelector("#addTask");
let submit = document.querySelector(".add-btn");
let tasks = document.querySelector(".todo-tasks");

submit.addEventListener("click", (e) => {
  //   if ((input.value = "")) {
  //     alert("Please enter a task");
  //   }
  let tr = document.createElement("tr");
  tr.innerHTML = `<td>${input.value}</td>`;
  tasks.appendChild(tr);
  e.preventDefault();
  input.value = "";
});
