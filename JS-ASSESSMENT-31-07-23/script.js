let code = document.querySelector("#code");
let check = document.querySelector(".check");
let newAmt = document.querySelector(".main-amount");
let getAMt = document.querySelector("#enterAmt");
let error = document.querySelector(".invalid");
let finalAmount = document.querySelector(".final-amount");
let withGST = document.querySelector(".withGST");
let addDiv = document.querySelector(".addDiv");
let discount = document.querySelector("#discount");

code.addEventListener("input", (e) => {
  if (e.target.value.length == 0) {
    console.log(e.target.value.length);
    check.disabled = true;
  } else {
    check.disabled = false;
    check.style.backgroundColor = "salmon";
    check.style.cursor = "pointer";
  }
});

check.addEventListener("click", (e) => {
  let a = code.value.split(" ").join("").toUpperCase().trim();

  if (getAMt.value < 200) {
    error.textContent =
      "Sorry, This Coupon Code is for Amount Greater than 199!";
    error.style.color = "red";
  } else if (getAMt.value >= 200 && getAMt.value < 500) {
    if (a == "OFF25") {
      let gst = Number(getAMt.value) + (getAMt.value * 18) / 100;
      newAmt.textContent = gst - (gst * 25) / 100;
      error.textContent = "OFF25 Applied Successfully!";
      error.style.color = "green";
      discount.textContent = "- 25%";
    } else {
      error.textContent = "This Promo Code is Not Applicable!";
      error.style.color = "red";
    }
  } else if (getAMt.value >= 500 && getAMt.value <= 1000) {
    if (a == "OFF25") {
      let gst = Number(getAMt.value) + (getAMt.value * 18) / 100;
      newAmt.textContent = gst - (gst * 25) / 100;
      error.textContent = "OFF25 Applied Successfully!";
      error.style.color = "green";
      discount.textContent = "- 25%";
    } else if (a == "OFF50") {
      let gst = Number(getAMt.value) + (getAMt.value * 18) / 100;
      newAmt.textContent = gst - (gst * 50) / 100;
      error.textContent = "OFF50 Applied Successfully!";
      error.style.color = "green";
      discount.textContent = "- 50%";
    } else {
      error.textContent = "This Promo Code is Not Applicable!";
      error.style.color = "red";
    }
  } else if (getAMt.value > 1000) {
    if (a == "OFF25") {
      let gst = Number(getAMt.value) + (getAMt.value * 18) / 100;
      newAmt.textContent = gst - (gst * 25) / 100;
      error.textContent = "OFF25 Applied Successfully!";
      error.style.color = "green";
      discount.textContent = "- 25%";
    } else if (a == "OFF50") {
      let gst = Number(getAMt.value) + (getAMt.value * 18) / 100;
      newAmt.textContent = gst - (gst * 50) / 100;
      error.textContent = "OFF50 Applied Successfully!";
      error.style.color = "green";
      discount.textContent = "- 50%";
    } else if (a == "OFF75") {
      let gst = Number(getAMt.value) + (getAMt.value * 18) / 100;
      newAmt.textContent = gst - (gst * 75) / 100;
      error.textContent = "OFF75 Applied Successfully!";
      error.style.color = "green";
      discount.textContent = "- 75%";
    } else {
      error.textContent = "This Promo Code is Not Applicable!";
      error.style.color = "red";
    }
  } else {
    error.textContent = "Invalid Amount!";
    error.style.color = "red";
  }

  withGST.textContent = Number(getAMt.value) + (getAMt.value * 18) / 100;
  finalAmount.textContent = newAmt.textContent;
});
