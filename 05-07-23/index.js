// const example = ({ a, b, c }, d) => {
//   console.log(a, b, c, d);
// };
// console.log(example(0, 1, 2));

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.reduce((acc, curr, index, array) => {
//   console.log(acc, curr);
//   return curr;
// }, { a:3, b:54});
// console.log(newArr);

// let arr = [
//   { a: 15, b: 20 },
//   { c: 25, d: 30 },
// ];
// let arr1 = arr.sort().reduce((acc, curr) => acc + curr);
// console.log(arr);

// let arrObject = [
//   { a: 10 },
//   { a: 20, b: 20 },
//   { b: 30 },
//   { a: 20, b: 30, c: 40 },
// ];
// let result = arrObject.sort((a, c) => {
//   return Object.values(a).length - Object.values(c).length;
// });
// console.log(result);

// let arr = [
//   { a: 15, b: 20 },
//   { c: 25, d: 30 },
// ];
// let arr1 = arr.reduce((acc, curr) => {
//   return Object.assign(acc, curr);
// });
// console.log(arr1);

// let arr = [
//   { a: 15, b: 20 },
//   { c: 25, d: 30 },
// ];
// let arr1 = arr.reduce((acc, curr) => {
//   return { ...acc, ...curr };
// });
// console.table(arr1);
// console.log(arr1);

// let arr = [10, 12, 15, 100, 11];
// let arr1 = arr.sort((a, c) => a - c);
// console.log(arr);

// let arr1 = [12, 100, 10, 1, 56, 34];
// let arr2 = arr1.sort((a, c) => {
//   debugger;
//   return a - c;
// });
// console.log(arr1);

// let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August"];
// let sortMonths = months.sort();
// console.log(sortMonths);

let details = [
  ["Name", "Vansh Panchal"],
  ["Course", "Computer Engineering"],
  ["Age", 18],
  ["Graduation Year", 2026],
];
let mergeDetails = details.reduce((acc, curr) => {
  const key = curr[0];
  const value = curr[1];
  acc[key] = value;
  return acc;
}, {});
console.log(mergeDetails);