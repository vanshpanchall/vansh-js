const id = document.querySelector("#num");
const name = document.querySelector("#name");
const roll = document.querySelector("#roll");
const branch = document.querySelector("#branch");

const add = document.querySelector(".add");
const table = document.querySelector(".new-tr");

add.addEventListener("click", (e) => {
  if (
    id.value == "" ||
    name.value == "" ||
    roll.value == "" ||
    branch.value == ""
  ) {
    alert("Plaese Enter All Values");
  } else {
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td>${id.value}</td>
    <td>${name.value}</td>
    <td>${roll.value}</td>
    <td>${branch.value}</td>
    `;
    table.appendChild(newRow);

    id.value = "";
    name.value = "";
    roll.value = "";
    branch.value = "";
  }
});
