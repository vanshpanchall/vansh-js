const srNum = document.querySelector("#num");
const studName = document.querySelector("#name");
const rollNo = document.querySelector("#roll");
const branch = document.querySelector("#branch");

const add = document.querySelector(".add");
const table = document.querySelector(".new-tr");

let store = null;

function addTask(e) {
  if (srNum.value.trim() != "") {
    if (store) {
      update(store);
        store = null;
      //   alert("Enter below Fields");
    } else {
      const newTr = document.createElement("tr");
      newTr.classList.add("taskTr");
      newTr.innerHTML = `
      <td>${srNum.value}</td>
      <td>${studName.value}</td>
      <td>${rollNo.value}</td>
      <td>${branch.value}</td>
    `;

      const edit = document.createElement("span");
      edit.innerHTML = `<i onclick="editTask(this)" class="fa-solid fa-pen-to-square"></i>`;
      edit.classList.add("editBtn");
      newTr.appendChild(edit);

      const deleteRow = document.createElement("span");
      deleteRow.innerHTML = `<i onclick="deleteTask(this)" class="fa-solid fa-xmark"></i>`;
      deleteRow.classList.add("delBtn");
      newTr.appendChild(deleteRow);

      table.appendChild(newTr);
    }
    reset();
  }
}

function editTask(e) {
  let a = e.parentElement.parentElement;
  store = a;
  // console.log(a);
  // console.log(e);
  // console.log(store);
  // console.log(a.children[0].innerText);
  srNum.value = a.children[0].innerText;
  studName.value = a.children[1].innerText;
  rollNo.value = a.children[2].innerText;
  branch.value = a.children[3].innerText;
}

function deleteTask(e) {
  let confirmDel = confirm("Are You Sure?");
  if (confirmDel) {
    let targetRow = e.parentElement.parentElement;
    targetRow.remove();
  }
}

function update(e) {
  e.children[0].textContent = srNum.value;
  e.children[1].textContent = studName.value;
  e.children[2].textContent = rollNo.value;
  e.children[3].textContent = branch.value;
}

function reset() {
  srNum.value = "";
  studName.value = "";
  rollNo.value = "";
  branch.value = "";
}
