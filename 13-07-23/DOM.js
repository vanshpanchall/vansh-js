// ROOT NODE
// console.log(document.documentElement);

// let myBody = document.head;
// let myBody = document.body;

// CHILDRENS
// let myBody = document.body.childNodes;
// let myBody = document.body.children;
// let myBody = document.body.firstChild;
// let myBody = document.body.lastChild;
// let myBody = document.body.firstElementChild;
// let myBody = document.body.lastElementChild;

// // myBody.style.backgroundColor='yellow'

// SIBLINGS
let myBody = document.body.children[0];
console.log(myBody);
console.log(myBody.nextSibling);
console.log(myBody.nextSibling.nextSibling);
// console.log(myBody.nextElementSibling);

// console.log(myBody);

// let box2 = document.getElementById("box-2");
// console.log(box2);

// const h1 = document.getElementsByTagName("h1");
// console.log(h1);

// const black = document.getElementsByClassName("bg-black");
// console.log(black);

// const query1 = document.querySelector("#box-2 .heading");
// const query2 = document.querySelectorAll(".bg-black .heading");
// console.log(query1, query2);

const box1 = document.getElementById("box-1");
// box1.innerHTML = "<h1> Hello There </h1> <p>How are you?</p>";
// box1.style.backgroundColor = "lime";

// box1.classList.add("border");

// const black = document.getElementsByClassName("bg-black");
// for (let i = 0; i < black.length; i++) {
//   black[i].classList.add("border");
// }

// box1.classList.remove("border");

