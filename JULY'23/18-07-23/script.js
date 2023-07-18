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

// parent cannot access their child but childs can access their parents
// {
//   let a = 15;
//   {
//     let b = 10;
//     console.log(a);
//     {
//       let c = 5;
//       console.log(b);
//     }
//     console.log(c);
//   }
// //   console.log(b);
// }

// it will not run
// function abc() {
//   let x = "hello";
//   console.log("hey");
//   console.log(x);
// }
// console.log(abc(x));

// it will run for both cases (x is defined outside or inside)

// function abc() {
//   let x = "hello";
//   console.log("hey");
//   console.log(x);
// }
// console.log(abc());

// let x = "hello";
// function abc() {
//   console.log("hey");
//   console.log(x);
// }
// console.log(abc());

// const x = "declared outside function";

// exampleFunction();

// function exampleFunction() {
//   console.log("Inside function");
//   console.log(x);
// }

// console.log("Outside function");
// console.log(x);

// this is block scope
// {
//   function demo() {
//     let a = "hii";
//     console.log(a);
//   }
//   // console.log(a);
// }
// {
//   demo();
// }

// {
//   let a = 10;
//   var b = 20;
//   console.log(a);
// }
// console.log(b);

// UNDEFINED vs NOT-DEFINED

// let a;
// console.log(a);  // UNDEFINED in which it is initialized but not declared
// console.log(b);  // NOT-DEFINED in which it is neither initialized nor declared

// this is GLOBAL scope
// let a = 15;
// {
//   let b = 10;
//   console.log(b);
// }
// console.log(a);

// this is local scope
// abc();
// function abc() {
//   var c = 23;
//   console.log(c);
// }
// abc();

// let a = "hello";
// let b = a;
// a = "something else";
// console.log(a);
// console.log(b);

// let a = {
//   name: "vansh",
//   age: 18,
// };
// let b = a;
// b.name = "bhaumiik";
// console.log(a.name);
// console.log(b.name);

// FUNCTIONS

// with para with return
// function calculateSum(num1, num2) {
//   return num1 + num2;
// };
// console.log(calculateSum(10,20));

// with para without return
// function calculateSum(num1, num2) {
//    console.log(num1+num2);
// };
// calculateSum(10,20);

// without para with return
// function calculateSum() {
//   let a = 10;
//   let b = 20;
//   return a + b;
// }
// console.log(calculateSum());

// without para without return
// function calculateSum() {
//   let a = 10;
//   let b = 20;
//   console.log(a+b);
// }
// calculateSum();

// let multiply = function (a, b) {
//   return a * b;
// };
// console.log(multiply(10, 5));
