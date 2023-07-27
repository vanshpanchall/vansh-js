const btn = document.querySelector(".btn");

const task = document.querySelector(".task");
const addTask = document.querySelector(".add-task");

btn.addEventListener("click", (e) => {
  let input = task.value.trim();

  let a = document.createElement("li");
  if (input.length >= 3) {
    a.textContent = input;
    let b = confirm("Are You Sure?");

    if (b) {
      addTask.appendChild(a);
    }
  }
  task.value = "";

  let newDiv = document.createElement("div");

  // ADDING DONE BUTTON

  let check = document.createElement("span");
  check.innerHTML = `<i class="fa-solid fa-check"></i>`;
  check.style.marginRight = "25px";
  check.style.cursor = "pointer";
  check.style.color = "lightgreen";

  newDiv.appendChild(check);

  // ADDING DELETE BUTTON

  let span = document.createElement("span");
  span.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  //   span.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  //   span.style.fontSize = "15px";
  span.style.cursor = "pointer";
  span.style.color = "tomato";
  newDiv.appendChild(span);
  a.appendChild(newDiv);

  // DONE FUNCTIONALITY

  check.addEventListener("click", () => {
    a.classList.toggle("text");

    // ON CLICK REMOVE AND ADD

    // if ((a.style.textDecoration = "line-through")) {
    //   a.style.color = "yellow";
    //   a.style.textDecoration = "none";
    // } else {
    //   a.style.textDecoration = "line-through";
    //   a.style.textDecorationColor = "grey";
    //   a.style.textDecorationThickness = "2px";
    //   a.style.color = "grey";
    // }

    // FOR UNDO BUTTON

    // let undo = document.createElement("span");
    // undo.innerHTML = `<i class="fa-solid fa-rotate-left"></i>`;
    // undo.style.position = "absolute";
    // undo.style.top = "16px";
    // undo.style.right = "-35px";
    // undo.style.color = "yellow";
    // undo.style.cursor = "pointer";
    // a.appendChild(undo);

    // undo.addEventListener("click", (e) => {
    //   a.style.color = "yellow";
    //   a.style.textDecoration = "none";
    //   undo.remove();
    // });
  });

  // ADDING EDIT FUNCTIONALITY

  const edit = document.createElement("span");
  // edit.innerHTML = `<i class="fa-solid fa-pen"></i>`;
  edit.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
  edit.classList.add("edit");
  a.appendChild(edit);



  // DELETING FUNCTIONALITY

  span.addEventListener("click", (e) => {
    a.remove();
  });
});
