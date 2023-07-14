// assignment operators

// let a = 50;

// a += 5;
// a -= 5;
// a *= 10;
// a /= 5;
// a %= 3;
// a **= 2;

// console.log(a);

//comparison operator

// let a = 10;
// let b = 10;
// let c = "2";

// console.log(a == b);
// console.log(a > b);
// console.log(a < b);
// console.log(b != a);
// console.log(a <= b);
// console.log(b >= a);
// console.log(b !== a);
// console.log(c === a);
// console.log(c * a);

// let a = 10.0000000000000001;
// let b = 10;
// console.log((a > b));

// logical operator

// let a = 2 == 2 && 1 == 0;
// let a = 2 > 3 || 1 == 1;
// let a = !(2 == 3);
// let a = !(5 == 6) || 5 > 6;
// let a = !(5 == 6) && !(5 > 6);

// console.log(a);

// const a = 0 || 1;
// const a = !(2 || 3);
// const a = 2 || 3;
// const a = 52 && 33;
// console.log(a);

// ternary operator

// let a = 5;
// let b = 10;
// b = a > 5 ? "Yes" : "No";
// console.log(b);

// FUNCTIONS

// function firstFunc(x, y) {
//   return x * y;
// }
// // console.log(firstFunc(5,8));
// let z = firstFunc(5, 8);
// console.log("The Multiplication is " + z);

// FUNCTION EXPRESSION
// const funcName = function (a, b) {
//   console.log("This is Function Expression");
//   return a + b;
// };
// funcName();
// console.log(funcName(5, 10));

// Function Hoisting

// console.log(funcHoisting(5, 5));

// function funcHoisting(x, y) {
//   return x * y;
// }

let funcName = (a, b) => {
  return a / b;
};
console.log(funcName(10, 5));
