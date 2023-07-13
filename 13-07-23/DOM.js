// ROOT NODE
// console.log(document.documentElement);

// let myBody = document.head;
// let myBody = document.body;

// ASSESSING CHILDRENS
// let myBody = document.body.childNodes;
// let myBody = document.body.children;
// let myBody = document.body.firstChild;
// let myBody = document.body.lastChild;
// let myBody = document.body.firstElementChild;
// let myBody = document.body.lastElementChild;

// // myBody.style.backgroundColor='yellow'

// ACCESSING SIBLINGS
// let myBody = document.body.children[0];
// console.log(myBody);
// console.log(myBody.nextSibling);
// console.log(myBody.nextSibling.nextSibling);
// console.log(myBody.nextElementSibling);

// console.log(myBody.previousSibling.textContent);
// console.log(myBody.previousElementSibling);

// console.log(myBody);

// ID SELECTOR
// let box2 = document.getElementById("box-2");
// console.log(box2);

// TAG SELECTOR
// const h1 = document.getElementsByTagName("h1");
// console.log(h1);
const red = document.getElementsByTagName("span");
red[0].style.color = "red";
console.log(red);

// CLASS SELECTOR
// const black = document.getElementsByClassName("bg-black");
// console.log(black);

// QUERY SELECTOR
// const query1 = document.querySelector("#box-2 .heading");
// const query1 = document.querySelector("#box-3 .heading span");
// console.log(query1);
// const query2 = document.querySelectorAll(".bg-black .heading");
// console.log(query1, query2);

// CHANGING STYLE AND TEXT
const box1 = document.getElementById("box-1");
// box1.innerHTML = "<h1> Hello There </h1> <p>How are you?</p>";
box1.style.backgroundColor = "lime";

const box2 = document.getElementById("box-2");
box2.style.backgroundColor = "coral";

const box3 = document.getElementById("box-3");
box3.style.backgroundColor = "teal";

const box4 = document.getElementById("box-4");
box4.style.backgroundColor = "violet";
// box4.style.fontFamily = "verdana";

box1.classList.add("border");
box2.classList.add("border");
box3.classList.add("border");
box4.classList.add("border");

let changeBorder = document.getElementsByClassName("border");
// for (let i = 0; i < changeBorder.length; i++) {
    changeBorder.style.border="8px"
    changeBorder.style.borderStyle = "solid";
    changeBorder.style.borderColor = "white";
//  }

// ADDING CLASSES
// const black = document.getElementsByClassName("bg-black");
// for (let i = 0; i < black.length; i++) {
//   black[i].classList.add("border");
// }

// REMOVING CASSES
// box1.classList.remove("border");

// box1.style.backgroundColor = 'red';

// ASSESSING ATTRUBUTES
console.log(box1.getAttribute("height"));
// console.log(box1.getAttributeNS("height"));
console.log(box1.getAttributeNames("height"));
