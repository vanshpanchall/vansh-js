// KEYBOARD EVENTS

// btn.addEventListener("keyup", (e) => {
//   let msg = document.querySelector("#messege");
//   msg.textContent = alert("This is Keyup");
// });

// btn.addEventListener("keydown", (e) => {
//   let msg = document.querySelector("#messege");
//     msg.textContent = alert("This is keydown");
//   console.log("This is keydown");
// });

// document.addEventListener("keydown", (e) => {
//   let msg = document.querySelector("#messege");
//   //   msg.textContent = alert("This is keydown");
//   console.log("This is keydown");
// });

// btn.addEventListener("keypress", (e) => {
//   let msg = document.querySelector("#messege");
//   msg.textContent = alert("This is keypress");
// });

// MOUSE EVENTS 

enter.addEventListener("mouseenter", (e) => {
  let msg = document.querySelector(".message");
  msg.textContent = alert("The Mouse Entered");
});

leave.addEventListener("mouseleave", (e) => {
  let msg = document.querySelector(".message");
  msg.textContent = alert("The Mouse Left");
});

move.addEventListener("mousemove", (e) => {
  let msg = document.querySelector(".message");
  msg.textContent = alert("The Mouse Moved");
});