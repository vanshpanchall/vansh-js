const a = [
  {
    id: 1,
    slot: [{ dosage: "" }, { dosage: "hi" }],
  },
  {
    id: 2,
    slot: [{ dosage: "hi" }, { dosage: "3" }],
  },
];
function checkStr(input) {
  return !input.some((a) => a.slot.some((b) => !a.dosage));
}
console.log(checkStr(a));

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
