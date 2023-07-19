// console.log(Number.isFinite(-5.005 / 5));
// console.log(Number.parseFloat("8.256"));
// console.log(Number.parseInt("5.256"));

//  Write a function that takes a currency_code and amount as an argument and returns the amount of money in INR. (operator QnA - 12)

// using if else if
// let convertToINR = function (code, amount) {
//   let a = code.toUpperCase();
//     if (a === "USD") {
//       return amount * 82.08;
//       // return Number.parseInt(amount * 82.08);
//     } else if (a === "EUR") {
//       return amount * 92.15;
//     }
//     else {
//         return 'There is no such Currency'
//     }
// };

// using switch case
// let convertToINR = function (code, amount) {
//   let a = code.toUpperCase();
//   switch (a) {
//     case "USD":
//       return amount * 82.08;
//     case "EUR":
//       return amount * 92.15;
//       default:
//           return "There is no such Currency";
//     }
// };

// console.log(convertToINR("USD", 250) + " INR");
// console.log(convertToINR("EUR", 250) + " INR");
// console.log(convertToINR("eur", 250) + " INR");

// function calculateAllIntegerSum(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof i === "number") {
//       return arr[i];
//     }
//   }
// } //wrong

// console.log(calculateAllIntegerSum([2, "11", 3, "a2", false, 5, 7, 1])); // 18
// console.log(calculateAllIntegerSum([2, 3, 0, 5, 7, 8, true, false])); // 25

// -------- OBJECT --------

// let obj = new Object();
// obj.name = "Vansh Panchal";
// console.log(obj);
// console.log(obj.name);

// let target = { a: 10 };
// let source = { b: 20 };
// // let result = Object.assign(target, source);
// let result = { ...target, ...source };
// target.b = 15;
// console.log(result);
// console.log(target);
// console.log(source);

// OBJECT DESTRUCTURING

// let obj1 = { name: "vansh", age: 18 };
// let { age } = obj1;
// console.log(age);

// let details = {
//   id: 1,
//   title: "JavaScript",
//   resource: "mdn",
// };

// let { title } = details;
// console.log(title);

// let arr = [1, 2, 4, 5, 68, 48];
// let [a, , , b, ...rest] = arr;
// console.log(a,b, rest);

// for changing only one property in object
// let obj1 = {
//   fname: "Aman",
//   lname: "Patel",
//   age: "19",
// };
// const updateObj = { ...obj1, lname: "Panchal" };
// console.log(updateObj);
// console.log({ ...obj1, lname: "Panchal" });
// console.log({ lname: "Panchal", ...obj1 }); // it will override the lname

// filtering out the same id

// let arr1 = [
//   { id: 1, name: "hi" },
//   { id: 2, name: "hi" },
// ];
// let arr2 = [
//   { id: 1, name: "hi" },
//   { id: 2, name: "hi" },
//   { id: 3, name: "hi" },
// ];
// function getFiltered(arr1, arr2) {
//   let a = arr2.filter((value) => {
//     if (!arr1.some((element) => element.id == value.id)) return value;
//   });
//   return a;
// }
// console.log(getFiltered(arr1, arr2));

// OBJECT QUESTIONS

// 1
// const source = { a: 1 };
// const target = { b: 2 };
// Object.assign(target, source);
// console.log(target);
// it will give the values of source to target and returns modified source

// 2
const obj1 = { a: 12, b: 23 };
const obj2 = obj1;
const obj3 = { ...obj1 };
obj1.c = 23;
console.log(obj1.c, obj2.c, obj3.c);
