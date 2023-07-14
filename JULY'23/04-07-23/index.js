// REDUCE

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.reduce((acc, curr, index, array) => acc);
// console.log(newArr);

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.reduce((acc, curr, index, array) => {
//     console.log(acc, curr);
//     return curr;
// },5);
// console.log(newArr);

// let details = [
//   {
//     name: "Vansh",
//     age: 18,
//   },
//   {
//     name: "Bhaumik",
//     age: 17,
//   },
//   {
//     name: "Sachin",
//     age: 19,
//   },
//   {
//     name: "Pujan",
//     age: 20,
//   },
//   {
//     name: "Jeel",
//     age: 21,
//   },
// ];

// let newDetails = details.reduce((acc, curr) => {
//   if (curr.age > acc.age) {
//     return curr.age;
//   }
//   return acc;
// });
// console.log(newDetails);

// let products = [
//   { name: "mouse", price: 50 },
//   { name: "keyboard", price: 60 },
//   { name: "monitor", price: 100 },
//   { name: "cpu", price: 150 },
//   { name: "desk", price: 200 },
// ];

// let totalPrice = products.reduce((acc, curr) => {
//   console.log("acc : " + acc);
//   console.log("curr : " + curr.price);
//   return acc + curr.price;
// }, 0);
// console.log(totalPrice);
