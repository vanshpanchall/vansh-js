// Invoking/calling a function inside a function

// function a() {
//   // b();
//   console.log(b());
// }
// function b() {
//   return "hi";
// }
// console.log(a());

// function add(a, b) {
//   return a + b;
// }

// function average(a, b) {
//   return add(a, b) / 2;
// }

// let x = average(10, 20);
// console.log(x);

// HOISTING

// function greetings() {
//     console.log(a);
//     let a = "hello"
// };
// greetings(); // initialization or reference error

// console.log(a); //undefined
// console.log(b); // initialization error
// var a = 1;
// let b = 2;

// function test() {
//   var a = 1;
//   {
//     var a = 2;
//     console.log(a);
//   }
//   console.log(a);
// }
// test();

// function test() {
//   let a = 1;
//   {
//     let a = 2;
//     console.log(a);
//   }
//   console.log(a);
// }
// test();

// function hoisting

// let a = 10;
// let b = 20;

// let result = add(a, b);
// console.log(result);

// function add(x, y) {
//     return x + y;
// }


// function expression cannot perform hoisting

// let a = 10;
// let b = 20;

// let result = add(a, b);
// console.log(result);

// let add = function(x, y) {
//     return x + y;
// }

// arrow function also does not perform hoisting

// let a = 10;
// let b = 20;

// let result = add(a, b);
// console.log(result);

// let add = (x, y) => x + y;

