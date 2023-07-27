const btn = document.querySelector(".btn");

const task = document.querySelector(".task");
const addTask = document.querySelector(".add-task");

btn.addEventListener("click", (e) => {
  let input = task.value.trim();

  let a = document.createElement("li");

  // ADDING AN ELEMENT INSIDE <li></li>

  let textSpan = document.createElement("span");
  a.appendChild(textSpan);

  if (input.length >= 3) {
    textSpan.textContent = input;
    let b = confirm("Are You Sure?");

    if (b) {
      addTask.appendChild(a);
    }
  }
  task.value = "";

  // let newDiv = document.createElement("div");

  // ADDING DONE BUTTON

  let check = document.createElement("span");
  check.innerHTML = `<i class="fa-solid fa-check"></i>`;
  check.classList.add("check");
  a.appendChild(check);

  // ADDING DELETE BUTTON

  let span = document.createElement("span");
  span.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  //   span.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  //   span.style.fontSize = "15px";
  span.style.cursor = "pointer";
  span.style.color = "tomato";
  a.appendChild(span);
  // a.appendChild(newDiv);

  // DONE FUNCTIONALITY

  check.addEventListener("click", () => {
    // textSpan.classList.toggle("text");

    // ON CLICK REMOVE AND ADD

    // it will run

    if (textSpan.classList.contains("text")) {
      textSpan.classList.remove("text");
    } else {
      textSpan.classList.add("text");
    }

    // the code is not running

    // if ((textSpan.style.textDecoration = "line-through")) {
    //   textSpan.style.color = "yellow";
    //   textSpan.style.textDecoration = "none";
    // } else {
    //   textSpan.style.textDecoration = "line-through";
    //   textSpan.style.textDecorationColor = "grey";
    //   textSpan.style.textDecorationThickness = "2px";
    //   textSpan.style.color = "grey";
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

  edit.addEventListener("click", (e) => {
    let updated = prompt("Enter New Task:").trim();
    console.log(`Updated text: ${updated}`);
    if (updated.length >= 3) {
      textSpan.textContent = updated;
    }
  });
  a.appendChild(edit);

  // DELETING FUNCTIONALITY

  span.addEventListener("click", (e) => {
    a.remove();
  });
});
