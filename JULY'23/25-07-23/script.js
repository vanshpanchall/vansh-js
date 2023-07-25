const copy = document.querySelector(".copy");
const btn = document.querySelector(".btn");

document.addEventListener("copy", (e) => {
  console.log(e);
  alert("Item Copied");
});
document.addEventListener("paste", (e) => {
  console.log(e);
  alert("Item Pasted");
});
document.addEventListener("cut", (e) => {
  console.log(e);
  alert("Item Cut");
});

btn.addEventListener("pointerenter", (e) => {
  console.log("Pointer Entered");
  console.log(e);
  // alert("Pointer Entered")
});
btn.addEventListener("mouseenter", (e) => {
  console.log("Mouse Entered");
  console.log(e);
  // alert("Mouse Entered")
});

// ------ DRAG AND DROP EVENTS ------

const dragItem = document.querySelector(".drag-item");
const items = document.querySelectorAll(".item");

// EventListeners for draggable items

dragItem.addEventListener("dragstart", (e) => {
  console.log("drag start");
  e.target.style.border = "2px solid red";

  setTimeout(() => {
    e.target.style.display = "none";
  }, 0);
});

dragItem.addEventListener("dragend", (e) => {
  console.log("drag end");
  //   dragItem.remove();
  e.target.style.removeProperty("border");
  e.target.style.display = "block";
});

// for (value of items) {
//   value.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     console.log("drag over");
//   });

//   value.addEventListener("dragenter", (e) => {
//     console.log("drag enter");
//     e.target.style.border = "2px dashed red";
//   });

//   value.addEventListener("dragleave", (e) => {
//     console.log("drag leave");
//     e.target.style.removeProperty("border");
//   });

//   value.addEventListener("drop", (e) => {
//     console.log("drop");
//     e.target.append(dragItem);
//   });
// }

// ------ LARGER FORMAT IMAGE ------

let img = document.querySelector(".img");
img.addEventListener("click", e => {
    img.style.width = "100%"
});