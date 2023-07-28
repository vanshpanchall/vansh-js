let input = document.querySelector("#userInput");

let buttons = document.querySelectorAll("button");

let str = "";
let arr = Array.from(buttons);

arr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      str = eval(str);
      input.value = str;
    } else if (e.target.innerHTML == "AC") {
      str = "";
      input.value = str;
    } else {
      str += e.target.innerHTML;
      input.value = str;
    }
  });
});
