const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  let newSpan = document.createElement("span");

  newSpan.classList.add("ripple");
  btn.appendChild(newSpan);

  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;

  newSpan.style.left = x;
  newSpan.style.top = y;
  
});
