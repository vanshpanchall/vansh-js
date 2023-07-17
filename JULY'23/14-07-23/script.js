// const a = [
//   {
//     id: 1,
//     slot: [{ dosage: "" }, { dosage: "hi" }],
//   },
//   {
//     id: 2,
//     slot: [{ dosage: "hi" }, { dosage: "3" }],
//   },
// ];
// function checkStr(input) {
//   return !input.some((a) => a.slot.some((b) => !a.dosage));
// }
// console.log(checkStr(a));

// let firstEle = document.body;
// const newHeading = document.createElement("h1");
// newHeading.textContent=("Hello There");
// firstEle.appendChild(newHeading)
// firstEle.append(newHeading)

// let newElement = document.getElementById("box-1");
// newH2 = document.createElement("h2");
// newH2.textContent = "This is DOM!";
// newElement.appendChild(newH2);

// document.write("This is Document Write");

// let range = document.createRange();
// console.log(range);

// console.log(document.getElementById("box-1").class);
// console.log(document.getElementById("box-1").className);
// console.log(document.getElementById("box-1").getAttribute("class"));
// console.log(document.getElementById("box-1").classList);

// let getTitle = document.querySelector("#box-3 .heading span");
// let getTitle = document.querySelector("#box-3 .heading span").textContent;
// let getTitle = document.querySelector("#box-3 .heading span").innerText;
// console.log(getTitle);

// let getText = document.getElementById("box-3").innerText;
// let getText = document.getElementById("box-3").textContent;
// console.log(getText);

// let getUl=document.querySelector("li")
// getUl.style.backgroundColor="blue"
// getUl.style.padding="10px"
// console.log(getUl);

// let getLi = document.querySelectorAll("ul li");
// for (let i = 0; i < getLi.length; i++) {
//   getLi[i].style.backgroundColor = "red";
//   getLi[i].style.margin = "5px";
// }
// console.log(getLi);

// console.log(Array.from(getLi));
// console.log(getLi);

// let getAt=document.getElementById("box-3")
// console.log(getAt.getAttribute("data"));
// console.log(getAt.hasAttribute("data"));
// getAt.setAttribute("class", 'border');
// getAt.attributes;
// console.log(getAt);

// document.getElementById("box-3").onclick = function () {
//     alert("This is Onclick");
// confirm("This is Onclick");
// }

document.getElementById("box-2").addEventListener("click", function (e) {
  // alert("This is onclick on box-2");
  // console.log("This is onclick on box-2");
  // document.write("This is onclick on box-2");
});

document.getElementById("box-3").addEventListener("click", function (e) {
  // alert("This is onclick on box-3");
  console.log("This is onclick on box-3");
});
