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

  let result = "";

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

let submitted = document.querySelector("#form-submit");

submitted.addEventListener("submit", (e) => {
  document.querySelector("#txt").textContent =
        "The Form Submitted Successfully";
    // alert("The Form Submitted Successfully");
});
