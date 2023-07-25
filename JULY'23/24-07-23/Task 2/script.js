let show = document.querySelector(".show");
let getMain = document.querySelector(".msg");
let getNoti = document.querySelectorAll(".random-msg");

const showNotification = () => {
  let newSpan = document.createElement("span");
  newSpan.innerHTML =
    getNoti[Math.floor(Math.random() * getNoti.length)].innerHTML;
  newSpan.style.display = "block";
  getMain.appendChild(newSpan);
};

show.addEventListener("click", showNotification);
setInterval(() => {
  getMain.children[0].remove();
  console.log(getMain);
}, 1000);
