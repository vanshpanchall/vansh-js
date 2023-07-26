const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  const task = document.querySelector(".task");
  const addTask = document.querySelector(".add-task");

  let input = task.value.trim();

  let a = document.createElement("li");
  if (input.length >= 3) {
    a.innerHTML = input;
    let b = confirm("Are You Sure?");

    if (b) {
      addTask.appendChild(a);
    }
  }
  task.value = "";

  let span = document.createElement("span");
  span.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  span.style.cursor = "pointer";
  a.appendChild(span);

  span.addEventListener("click", (e) => {
    a.remove();
  });
});
