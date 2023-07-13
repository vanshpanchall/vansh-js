// let arr = [5, 8, [1, 2, 3], [6], [2, 34, 2], [1, 2, 3, 4, 5, [5]]];
// function maxArr(arr) {
//   let emptyArr = 0;
//   arr.forEach((value) => {
//     if (Array.isArray(arr) && emptyArr < value.length)
//       return (emptyArr = value.length);
//   });
//   return emptyArr;
// }
// console.log(maxArr(arr));

// function maxArr(array) {
//   let arr1 = arr.reduce((acc, item) => {
//     if (Array.isArray(array) && acc < item.length) {
//       return (acc = item.length);
//     }
//   }, 0);
//   return acc;
// }
// console.log(maxArr(arr));

// let arr1 = arr.map((item) => {
//   if (Array.isArray(item)) {
//     return item.length;
//   }
//   Math.max(...arr1);
// });
// console.log(arr1);

// Write a JavaScript function to count the number of days passed since the year began

// function days_passed(date) {

// }
// console.log(days_passed(new Date(2015, 0, 15)));
// console.log(days_passed(new Date(2015, 11, 14)));

// The isFinite() & isNaN() methods are Global Methods in JS

// let num1 = 10;
// console.log(isFinite(num1));
// console.log(Number.isFinite(num1));
// let num2 = "20";
// console.log(isFinite(num2)); // true
// console.log(Number.isFinite(num2)); // false
// let num3 = Infinity;
// console.log(isFinite(num3));
// console.log(Number.isFinite(num3));
// let num4 = NaN;
// console.log(isFinite(num4));
// console.log(Number.isFinite(num4));
// let num5 = [1, 2, 3];
// console.log(isFinite(num5));
// console.log(Number.isFinite(num5));
// let num6 = ["1", "2", "3"];
// console.log(isFinite(num6));
// console.log(Number.isFinite(num6));
// let num7 = (0.546 / 2) * 5;
// console.log(isFinite(num7));
// console.log(Number.isFinite(num7));
