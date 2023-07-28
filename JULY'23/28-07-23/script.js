const slider = document.querySelectorAll(".slide");
const main = document.querySelector(".main");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const active = document.querySelector(".active");
const indicator = document.querySelector(".indicator");

var count = 0;

slider.forEach((value, index) => {
  value.style.left = `${index * 100}% `;

  const active = document.createElement("span");
  active.classList.add("active");
  indicator.appendChild(active);
  
  // active.forEach((indi, i) => {
  //   if (i === index) {
  //     indi.classList.add("active");
  //   } else {
  //     indi.classList.remove("main-active");
  //   }
  // });
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
    // active[i].classList.replace("main-active");
  });
};
