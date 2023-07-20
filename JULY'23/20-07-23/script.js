// KEYBOARD EVENTS

var x = 0;
var y = 0;
var z = 0;

// KEYUP
document.addEventListener("keyup", (e) => {
  let msg = (document.querySelector("#up span").textContent = x += 1);
  // console.log(e);
  //   msg.textContent = alert("This is Keyup");
  //   console.log('This is Keyup');
});

// KEYDOWN
document.addEventListener("keydown", (e) => {
  let msg = (document.querySelector("#down span").textContent = y += 1);
  // console.log(e);
  //     msg.textContent = alert("This is keydown");
  //   console.log("This is keydown");
});

// KEYPRESS
document.addEventListener("keypress", (e) => {
  let msg = (document.querySelector("#press span").textContent = z += 1);
  // console.log(e);
  //   msg.textContent = alert("This is keypress");
  //   console.log("This is keypress");
});

// MOUSE EVENTS

var a = 0;
var b = 0;
var c = 0;
var d = 0;
var i = 0;
var f = 0;
var h = 0;

// MOUSE CLICK
click.addEventListener("click", (e) => {
  let msg = (document.querySelector("#click span").textContent = i += 1);
  // console.log(e);
  // msg.textContent = alert('The Mouse CLicked');
  //   console.log("The Mouse CLicked");
});

// MOUSE DOUBLE CLICK
dblclick.addEventListener("dblclick", (e) => {
  let msg = (document.querySelector("#dblclick span").textContent = f += 1);
  // console.log(e);
  // msg.textContent = alert('The Mouse CLicked');
  //   console.log("The Mouse Double CLicked");
});

// MOUSE ENTER
enter.addEventListener("mouseenter", (e) => {
  let msg = (document.querySelector("#enter span").textContent = a += 1);
  // console.log(e);
  //   msg.textContent = alert('The Mouse Entered');
});

// MOUSE OVER
over.addEventListener("mouseover", (e) => {
  let msg = (document.querySelector("#over span").textContent = b += 1);
  // console.log(e);
  // msg.textContent = alert("The Mouse overed");
});

// MOUSE MOVE
move.addEventListener("mousemove", (e) => {
  let msg = (document.querySelector("#move span").textContent = c += 1);
  // console.log(e);
  //   msg.textContent = alert("The Mouse Moved");
});

// MOUSE LEAVE
leave.addEventListener("mouseleave", (e) => {
  let msg = (document.querySelector("#leave span").textContent = d += 1);
  // console.log(e);
  // msg.textContent = alert("The Mouse Left");
});

// MOUSE OUT
out.addEventListener("mouseout", (e) => {
  let msg = (document.querySelector("#out span").textContent = h += 1);
  //   console.log(e);
  // msg.textContent = alert("The Mouse Out");
});

// CREATING AN ELEMENT AND APPENDING IT

const body = document.body;
const div = document.createElement("div");
div.innerText = "This div is created using JS!";
div.textContent = "This div is created again using JS!";
// div.innerHTML = "<h1>This div is created again using JS!</h1>";
// body.append(div);
body.appendChild(div);

// ADDING NEW CLASS
div.classList.add("font");

// DIFFERENCE BETN textContent & innerText
const span = document.querySelector(".sample");
// console.log(span.textContent); // it displays the whole content including the white spaces even if it is has display none
// console.log(span.innerText); // it will display only the visible text
// console.log(span.innerHTML);

const divSample = document.querySelector(".sample");
const spanRemove = document.querySelector("#remove");

// REMOVING AND APPENDING AN ELEMENT
spanRemove.remove();
divSample.append(spanRemove);

// CHANGING THE TITLE OF HTML

// let title = document.title;
// // alert(`Title of this page: ` + title);
// title.textContent='This is new Title'
// title.innerHTML='new'

// let changeTitle = document.querySelector("title");
// changeTitle.textContent = "JS Events";

// GETTING DATASET

// console.log(spanRemove.dataset);

// spanRemove.dataset.newName = "Bhaumik";

// CHECKING WHETHER THE CLICKED TARGET IS DIV OR NOT

// const divs = document.querySelectorAll("div");
// document.addEventListener("click", (e) => {
//   if (e.target.matches("div")) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// });

// GETTING X/Y POSITION OF MOUSE

// let bodyXY = document.querySelector("#position");
// document.addEventListener("mousemove", (e) => {
//   let a = e.screenX;
//   let b = e.screenY;
//   let c = e.clientX;
//   let d = e.clientY;
//   bodyXY.innerText = a + b + c + d;
// });

// GETTING THE KEY WHICH WE PRESS

// document.addEventListener("keydown", e => {
//     document.querySelector("#key").textContent =
// e.key;
// console.log(e.key);
// });
