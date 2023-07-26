const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  const task = document.querySelector(".task");
  const addTask = document.querySelector(".add-task");

  let input = task.value.trim();

  let a = document.createElement("li");
  if (input.length >= 3) {
    a.innerHTML = input;
    // let b = confirm("Are You Sure?");

    // if (b) {
    addTask.appendChild(a);
    // }
  }
  task.value = "";

  let newDiv = document.createElement("div");

  let check = document.createElement("span");
  check.innerHTML = `<i class="fa-solid fa-check"></i>`;
  check.style.marginRight = "25px";
  check.style.cursor = "pointer";
  check.style.color = "lightgreen";

  newDiv.appendChild(check);

  let span = document.createElement("span");
  span.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  //   span.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  //   span.style.fontSize = "15px";
  span.style.cursor = "pointer";
  span.style.color = "tomato";
  newDiv.appendChild(span);
  a.appendChild(newDiv);

  check.addEventListener("click", (e) => {
    a.style.textDecoration = "line-through";
    a.style.textDecorationColor = "grey";
    a.style.textDecorationThickness = "2px";
    a.style.color = "grey";

    let undo = document.createElement("span");
    undo.innerHTML = `<i class="fa-solid fa-rotate-left"></i>`;
    undo.style.position = "absolute";
    undo.style.top = "29%";
    undo.style.right = "-4%";
    undo.style.color = "yellow";
    undo.style.cursor = "pointer";
    a.appendChild(undo);

    undo.addEventListener("click", (e) => {
      a.style.color = "yellow";
      a.style.textDecoration = "none";
      undo.remove();
    });
  });

  span.addEventListener("click", (e) => {
    a.remove();
  });
});
