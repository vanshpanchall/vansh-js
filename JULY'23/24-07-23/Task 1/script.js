const btn = document.querySelector(".btn");
btn.addEventListener("mousedown", (e) => {
  let newSpan = document.createElement("span");

  newSpan.classList.add("ripple");
  btn.appendChild(newSpan);

  let x = e.offsetX;
  let y = e.offsetY;
  // let x = e.clientX - e.target.offsetLeft;
  // let y = e.clientY - e.target.offsetTop;

  console.log(x);
  console.log(y);

  newSpan.style.left = x + "px";
  newSpan.style.top = y + "px";

  setInterval(() => {
    newSpan.remove();
  }, 500);
});

