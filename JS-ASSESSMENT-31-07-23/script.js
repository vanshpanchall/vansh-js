const code = document.querySelector("#code");
const check = document.querySelector(".check");
const newAmt = document.querySelector(".main-amount");
const getAMt = document.querySelector("#enterAmt");
const error = document.querySelector(".invalid");
const finalAmount = document.querySelector(".final-amount");
const withGST = document.querySelector(".withGST");
const addDiv = document.querySelector(".addDiv");
const discount = document.querySelector("#discount");

check.disabled = true;

code.addEventListener("input", (e) => {
  if (getAMt.value.length == 0) {
    error.textContent = "Please Enter Amount!";
    error.style.color = "red";
    if (e.target.value.length == 0) {
      console.log(e.target.value.length);
      check.disabled = true;
      // check.classList.add("check");
      check.style.backgroundColor = "rgba(250, 128, 114, 0.382)";
      check.style.cursor = "no-drop";
      newAmt.textContent = Number(getAMt.value) + (getAMt.value * 18) / 100;
      finalAmount.textContent = newAmt.textContent;
      error.textContent = "";
      error.style.color = "red";
      discount.textContent = "- 0%";
    }
  } else {
    check.disabled = false;
    check.style.backgroundColor = "salmon";
    check.style.cursor = "pointer";
    error.textContent = "";
  }
});

check.addEventListener("click", (e) => {
  let a = code.value.split(" ").join("").toUpperCase().trim();

  let gst = Number(getAMt.value) + (getAMt.value * 18) / 100;

  if (getAMt.value < 200) {
    error.textContent = "Please Enter a Valid Amount (Greater than ₹199)";
    error.style.color = "red";
  } else if (getAMt.value >= 200 && getAMt.value < 500) {
    if (a == "OFF25") {
      newAmt.textContent = gst - (gst * 25) / 100;
      error.textContent = "OFF25 Applied Successfully!";
      error.style.color = "green";
      discount.textContent = "- 25%";
    } else {
      error.textContent = "This Promo Code is Not Applicable!";
      error.style.color = "red";
      discount.textContent = "- 0%";
      newAmt.textContent = gst;
    }
  } else if (getAMt.value >= 500 && getAMt.value <= 1000) {
    if (a == "OFF25") {
      newAmt.textContent = gst - (gst * 25) / 100;
      error.textContent = "OFF25 Applied Successfully!";
      error.style.color = "green";
      discount.textContent = "- 25%";
    } else if (a == "OFF50") {
      newAmt.textContent = gst - (gst * 50) / 100;
      error.textContent = "OFF50 Applied Successfully!";
      error.style.color = "green";
      discount.textContent = "- 50%";
    } else {
      error.textContent = "This Promo Code is Not Applicable!";
      error.style.color = "red";
      discount.textContent = "- 0%";
      newAmt.textContent = gst;
    }
  } else if (getAMt.value > 1000) {
    if (a == "OFF25") {
      newAmt.textContent = gst - (gst * 25) / 100;
      error.textContent = "OFF25 Applied Successfully!";
      error.style.color = "green";
      discount.textContent = "- 25%";
    } else if (a == "OFF50") {
      newAmt.textContent = gst - (gst * 50) / 100;
      error.textContent = "OFF50 Applied Successfully!";
      error.style.color = "green";
      discount.textContent = "- 50%";
    } else if (a == "OFF75") {
      newAmt.textContent = gst - (gst * 75) / 100;
      error.textContent = "OFF75 Applied Successfully!";
      error.style.color = "green";
      discount.textContent = "- 75%";
    } else {
      error.textContent = "This Promo Code is Not Applicable!";
      error.style.color = "red";
      discount.textContent = "- 0%";
      newAmt.textContent = gst;
    }
  } else {
    error.textContent = "Invalid Amount!";
    error.style.color = "red";
  }

  withGST.textContent = Number(getAMt.value) + (getAMt.value * 18) / 100;
  finalAmount.textContent = newAmt.textContent;
});
