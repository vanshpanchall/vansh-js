let clickBtn = document.querySelector("#btn");

let btn = document.querySelector("#btn");

// clickBtn.onclick = function () {
//   alert("Hello There!")
// };

// clickBtn.addEventListener(
//   "click",
//   function (event) {
//     // alert("Hii");
//     console.log('hii');
//   },
//   true
// );

// clickBtn.addEventListener(
//   "dblclick",
//   function (event) {
//     // alert("Hii");
//     console.log('hii');
//   },
//   false
// );

// clickBtn.removeEventListener(
//   "click",
//   function (event) {
//     // alert("Hii");
//     console.log('hii');
//   },
//   false
// );

// MOUSE EVENTS

// btn.addEventListener("mouseenter", (e) => {
//   let msg = document.querySelector("#messege");
//  msg.textContent = alert("The Mouse Entered");
// });

// btn.addEventListener("mouseleave", (e) => {
//   let msg = document.querySelector("#messege");
//   msg.textContent = alert("The Mouse Left");
// });

// btn.addEventListener("mousemove", (e) => {
//   let msg = document.querySelector("#messege");
//   msg.textContent = alert("The Mouse Moved");
// });

// btn.addEventListener("mouseup", (e) => {
//   let msg = document.querySelector("#message");
//   switch (e.button) {
//     case 0:
//       msg.textContent = "Left mouse button clicked.";
//       break;
//     case 1:
//       msg.textContent = "Middle mouse button clicked.";
//       break;
//     case 2:
//       msg.textContent = "Right mouse button clicked.";
//       break;
//     default:
//       msg.textContent = `Unknown mouse button`;
//   }
// });

// btn.addEventListener("mousedown", (e) => {
//   let msg = document.querySelector("#message");
//   switch (e.button) {
//     case 0:
//       msg.textContent = "Left mouse button clicked.";
//       break;
//     case 1:
//       msg.textContent = "Middle mouse button clicked.";
//       break;
//     case 2:
//       msg.textContent = "Right mouse button clicked.";
//       break;
//     default:
//       msg.textContent = `Unknown mouse button`;
//   }
// });

// KEYBOARD EVENTS 

btn.addEventListener("keyup", (e) => {
  let msg = document.querySelector("#messege");
  msg.textContent = alert("This is Keyup");
});