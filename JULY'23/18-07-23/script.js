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

// 2
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

// 4
// let multiply = function (a, b) {
//   return a * b;
// };
// console.log(multiply(10, 5));

// 6
// let squareNum = (num) => num * num;
// console.log(squareNum(5));

// 7
// function getFullName(fname, lname) {
//   return fname + " " + lname;
// }
// console.log(getFullName('Vansh', 'Panchal'));

// 10

// with ternary operator
// function maxNum(a, b, c) {
//   return a > b ? (a > c ? a : c) : b > c ? b : c;
// }
// console.log(maxNum(12, 51, 88));

// function maxNum(a, b, c) {
//   console.log(a > b ? (a > c ? a : c) : b > c ? b : c);
// }
// maxNum(25,89,63);

// function maxNum() {
//   let a = 25;
//   let b = 50;
//   let c = 89;
//   return (a > b ? (a > c ? a : c) : b > c ? b : c);
// }
// maxNum();

// function maxNum() {
//   let a = 25;
//   let b = 50;
//   let c = 89;
//   console.log(a > b ? (a > c ? a : c) : b > c ? b : c);
// }
// maxNum();

// with if-else
// function maxNum(a, b, c) {
//   if (a > b) {
//     if (a > c) {
//       console.log(a);
//     } else {
//       console.log(c);
//     }
//   } else {
//     if (b > c) {
//       console.log(b);
//     } else {
//       console.log(c);
//     }
//   }
// }
// maxNum(65, 84, 69);

// 11

// function calculatePrice(price, discount = 10) {
//   return price - (price * discount) / 100;
// }
// console.log(calculatePrice(100, 20));

// let calculatePrice = (price, discount = 10) => {
//   return price - (price * discount) / 100;
// };
// console.log(calculatePrice(800, 50));

// 13
// function calculateMultiply(num1, num2) {
//   if (num1 == undefined && num2 == undefined)  {
//     return 1;
//   } else {
//     return num1 * num2;
//   }
// }
// console.log(calculateMultiply(-12, 2));
// console.log(calculateMultiply());
// console.log(calculateMultiply(5));

// 14
// function greet(input) {
//   if (input == undefined) {
//     console.log("Anonymous");
//   } else {
//     console.log("hello");
//   }
// }
// greet();

// let str = "Vansh";
// let str1 = " Panchal";
// console.log(str.length);
// console.log(str.concat(str1));

// let str = "Hello there my name is vansh";
// console.log(str.slice(-11, -1));
// console.log(str.slice(11));
// console.log(str.substring(0, 11));
// console.log(str.substring("12"));

// let str = "Hello! there ";
// console.log(str.split("!"));

// const sentence = "I love JavaScript!";
// console.log(sentence.indexOf("JavaScript"));

// make a function which which takes two paras in which the first is string and the second is the word or letter which we have to find from the string

// function findLette(str, letter) {
//   if (str.includes(letter)) {
//     return str.search(letter);
//     // return str.split(letter);
//   } else {
//     return "There is no such Character";
//   }
// }
// console.log(findLette("Hello there", "r"));

// const text = "Hello, World!";
// console.log(text.repeat(3));
// const sentence = "The quick brown fox";

// function isStr(input) {
//   return typeof input == 'string';
// };
// console.log(isStr('w3school'));

// function is_Blank(str) {
//   return str.trim().length === 0;
// }
// console.log(is_Blank("")); // true
// console.log(is_Blank("abc")); // false

// 62
// function string_to_array(str) {
//   return str.split(" ");
// }
// console.log(string_to_array("Robin Singh"));

// 63
// function truncate_string(str, value) {
//   return str.slice(0, value);
// }
// console.log(truncate_string("Robin Singh", 4));

// 64
// function protect_email(mail) {
//   return mail.replace(mail.slice(5, mail.indexOf("@")), "*****");
// }
// console.log(protect_email("robin_singh@example.com"));

// 65
// function string_parameterize(str) {
//   return str.replaceAll(" ", "-").toLowerCase();
// }
// console.log(string_parameterize("Robin Singh from USA."));

// 69
let text = "Apple, Banana, Kiwi";
text.slice(-12, -6);
console.log(text);
