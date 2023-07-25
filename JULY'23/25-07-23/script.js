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

btn.addEventListener("pointerenter", e => {
    console.log("Pointer Entered");
    console.log(e);
    // alert("Pointer Entered")
})
btn.addEventListener("mouseenter", e => {
    console.log("Mouse Entered");
    console.log(e);
    // alert("Mouse Entered")
})

// ------ DRAG AND DROP EVENTS ------

const item = document.querySelector(".item");
item.addEventListener("dragstart", e => {
    e.dataTansfer.setData("text", e.target.id);
    
})