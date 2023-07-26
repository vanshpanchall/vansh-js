const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  const task = document.querySelector(".task");
  const addTask = document.querySelector(".add-task");

  //   task.value.trim();

  let a = document.createElement("li");
  if (task.value.length > 3 && task.value.trim()) {
    a.innerHTML = task.value;
    let b = confirm("Are You Sure?");

    if (b) {
      addTask.appendChild(a);
    }
  }
  task.value = "";
});
