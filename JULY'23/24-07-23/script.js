const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", (e) => {
  toggle.classList.add('on');
  document.body.classList.add("bg")
//   toggle.classList.toggle("on");
//   document.body.classList.toggle("bg");
});
