// GENERATING RANDOM PASSWORD

let getBtn = document.querySelector("random");
let chars =
  "abcdemghijklmnopqrstuvxyz012345678@#$&" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
random.addEventListener("click", (e) => {
  var pass = "";
  for (let i = 1; i <= 8; i++) {
    let char = Math.floor(Math.random() * chars.length);
    pass += chars.charAt(char);
  }
  document.querySelector("#pass").textContent = pass;
});

// CHECKING WHETHER THE CHECKBOX IS CHECKED OR NOT

check.addEventListener("click", (e) => {
  if (e.target.checked) {
    alert("Checked");
  } else {
    alert("Unchecked");
  }
});

// GENERATING SPECIFIED PASSWORD

let getPass = document.querySelector("#gene-random");
getPass.addEventListener("click", (e) => {
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let specialChars = "@#$%&*";
  let allChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

  let result = "";

  if (!document.querySelector("#upper").unchecked && 
    !document.querySelector("#lower").unchecked &&
    !document.querySelector("#num").unchecked &&
    !document.querySelector("#special").unchecked) {
    result += allChars;
    
    }
  if (document.querySelector("#upper").checked) {
    result += upperCase;
  }

  if (document.querySelector("#lower").checked) {
    result += lowerCase;
  }

  if (document.querySelector("#num").checked) {
    result += numbers;
  }
  if (document.querySelector("#special").checked) {
    result += specialChars;
  }

  let newPassword = "";

  for (i = 0; i <= 8; i++) {
    let randomPass = Math.floor(Math.random() * result.length);
    newPassword += result[randomPass];
    // newPassword += result.charAt(randomPass);
  }
  document.querySelector("#random-str").textContent = newPassword;
});

// GETTING THE NAME OF THE ID WHICH IS CLICKED

let mainDiv = document.querySelector("#main");
let parentDiv = document.querySelector("#parent");
let childDiv = document.querySelector("#child");

mainDiv.addEventListener("click", (e) => {
  console.log(e.target.id);
});
parentDiv.addEventListener("click", (e) => {
  console.log(e.target.id);
});
childDiv.addEventListener("click", (e) => {
  console.log(e.target.id);
});

// GETTING ID OF ANY ELEMENT

// document.addEventListener("click", function (e) {
//   if (!e == "") {
//     console.log("ID = ", e.target.id);
//   }
// });

// FORM SUBMIT EVENT AND VALIDATION

let submitted = document.querySelector("#form-submit");
let getName = document.querySelector("#name");
let getAge = document.querySelector("#age");

let date = new Date().toLocaleString();
submitted.addEventListener("submit", (e) => {
  if (getName.value == "" && getAge.value == "") {
    document.querySelector("#required").textContent =
      "Name and Age is Required!";
    document.querySelector("#required").style.color = "red";
    // alert("Name and Age is Required");
  } else if (getName.value == "") {
    document.querySelector("#req-name").textContent = " Name is Required!";
    document.querySelector("#req-name").style.color = "red";
    // alert("Name is Required!");
  } else if (getAge.value == "") {
    document.querySelector("#req-age").textContent = " Age is Required!";
    document.querySelector("#req-age").style.color = "red";
    // alert("Age is required");
  } else {
    document.querySelector("#txt").textContent =
      "The Form Submitted Successfully on: " + date;
    // alert("The Form Submitted Successfully");
    confirm("Name: " + getName.value + " " + "Age: " + getAge.value);
  }
  e.preventDefault();
});

// FORM FOCUS EVENT

getName.addEventListener("focus", (e) => {
  e.target.style.backgroundColor = "lightblue";
  console.log("Focused");
});

getAge.addEventListener("focus", (e) => {
  e.target.style.backgroundColor = "lightgreen";
  console.log("Focused");
});

// FORM BLUR EVENT

getName.addEventListener("blur", (e) => {
  e.target.style.backgroundColor = "beige";
  console.log("Blurred");
});

getAge.addEventListener("blur", (e) => {
  e.target.style.backgroundColor = "gainsboro";
  console.log("Blurred");
});

// FORM INPUT EVENT

getName.addEventListener("input", (e) => {
  e.target.style.backgroundColor = "khaki";
  console.log("Input added");
});

getAge.addEventListener("input", (e) => {
  e.target.style.backgroundColor = "thistle";
  console.log("Input added");
});
