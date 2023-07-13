// Write a JavaScript function to count the number of days passed since the year began

// function days_passed(date) {

// }
// console.log(days_passed(new Date(2015, 0, 15)));
// console.log(days_passed(new Date(2015, 11, 14)));

// The isFinite() & isNaN() methods are Global Methods in JS

let num1 = 10;
console.log(isFinite(num1));
console.log(Number.isFinite(num1));
let num2 = "20";
console.log(isFinite(num2)); // true
console.log(Number.isFinite(num2)); // false
let num3 = Infinity;
console.log(isFinite(num3));
console.log(Number.isFinite(num3));
let num4 = NaN;
console.log(isFinite(num4));
console.log(Number.isFinite(num4));
let num5 = [1, 2, 3];
console.log(isFinite(num5));
console.log(Number.isFinite(num5));
let num6 = ["1", "2", "3"];
console.log(isFinite(num6));
console.log(Number.isFinite(num6));
let num7 = (0.546 / 2) * 5;
console.log(isFinite(num7));
console.log(Number.isFinite(num7));
