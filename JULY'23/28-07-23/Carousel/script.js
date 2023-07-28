let slider = document.querySelectorAll(".slide");
let main = document.querySelector(".main");

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let indicator = document.querySelector(".indicator");

var count = 0;

slider.forEach((value, index) => {
  value.style.left = `${index * 100}% `;

  let span = document.createElement("span");
  span.classList.add("active");
  indicator.appendChild(span);
});

prev.addEventListener("click", (e) => {
  if (count == 0) {
    count = slider.length - 1;
    slideImg();
  } else {
    count--;
    slideImg();
  }
  //   count--;
  //   slideImg();
});

next.addEventListener("click", (e) => {
  if (count == slider.length - 1) {
    count = 0;
    slideImg();
  } else {
    count++;
    slideImg();
  }
  //   count++;
  //   slideImg();
});

const slideImg = () => {
  slider.forEach((value) => {
    value.style.transform = `translateX(-${count * 100}%)`;
  });
};

// slider.forEach((val, index) => {
//   let indicator = document.querySelector(".indicator");
//   let span = document.createElement("span");
//   span.classList.add("active");

// span.forEach((indi, i) => {
//   if (i === index) {
//     indi.classList.add("active");
//   } else {
//     indi.classList.replace("main-active");
//   }
// });
//   indicator.appendChild(span);
// });

// removing the extra space

// console.log(
//   "       dsds              sdsdsd       ".split(" ").filter(Boolean).join(" ")
// );
