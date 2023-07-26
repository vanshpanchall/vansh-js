// ------ POP-UP ------

// let img = document.querySelector(".img");
// img.addEventListener("click", (e) => {
//   img.style.width = "100%";
// });

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  let pop = document.querySelector(".pop-up");
  pop.style.display = "flex";
});

const close = document.querySelector(".close");
close.addEventListener("click", (e) => {
  let closePop = document.querySelector(".pop-up");
  closePop.style.display = "none";
});
