// 1
// function sayHello() {
//   console.log("Hello");
// }
// sayHello();

// 2
// w-a, w-r
// function calculateSum(num1, num2) {
//   return num1 + num2;
// }
// console.log(calculateSum(5, 5));

// w-a, wo-r
// function calculateSum(num1, num2) {
//   console.log(num1 + num2);
// }
// calculateSum(5, 5);

// wo-a, w-r
// function calculateSum(num1, num2) {
//   num1 = 5;
//   num2 = 5;
//   return num1 + num2;
// }
// let sum = calculateSum();
// console.log(sum);

// wo-a, wo-r
// function calculateSum(num1, num2) {
//   let z = 5;
//   let y = 5;
//   console.log(z + y);
// }
// calculateSum();

// 3
// function printArray(arr) {
//   return arr;
// }
// let arr = [11, 12, 13];
// let ans = printArray(arr);
// console.log(ans);

// 4
// let multiply = function (a, b) {
//   return a * b;
// };
// console.log(multiply(5, 5));

// 5
// function myFunction() {}
// myFunction();

// 6
// let squareNumber = (num) => num * num;
// console.log(squareNumber(5));

// 7
// function getFullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }
// console.log(getFullName("Vansh", "Panchal"));

// 8
// function calculateArea(length, width) {
//   return length * width;
// }
// console.log(calculateArea(10, 20));

// 9
// function isEven(num) {
//   if (num % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEven(8));

// 10
// function maxNum(a, b, c) {
//   return a > b ? (a > c ? a : c) : b > c ? b : c;
// }
// console.log(maxNum(10, 12, 13));

// function maxNum(a, b, c) {
//   console.log(a > b ? (a > c ? a : c) : b > c ? b : c);
// }
// maxNum(21, 31, 41);

// function maxNum(a, b, c) {
//   a = 10;
//   b = 15;
//   c = 20;
//   return a > b ? (a > c ? a : c) : b > c ? b : c;
// }
// let highNum = maxNum();
// console.log(highNum);

// function maxNum(a, b, c) {
//   let x = 15;
//   let y = 25;
//   let z = 35;
//   console.log(x > y ? (x > z ? x : z) : y > z ? y : z);
// }
// maxNum();

// function maxNum(a, b, c) {
//   if (a > b) {
//     if (a > c) {
//       return a;
//     } else {
//       return c;
//     }
//   } else {
//     if (b > c) {
//       return b;
//     } else {
//       return c;
//     }
//   }
// }
// console.log(maxNum(10,15,21));

// function maxNum(a, b, c) {
//   if (a > b) {
//     if (a > c) {
//       console.log(a);;
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
// maxNum(10,15,21);

// function maxNum(a, b, c) {
//     a = 10;
//     b = 15;
//     c = 21;
//   if (a > b) {
//     if (a > c) {
//       return a;
//     } else {
//       return c;
//     }
//   } else {
//     if (b > c) {
//       return b;
//     } else {
//       return c;
//     }
//   }
// }
// let highNum = maxNum();
// console.log(highNum);

// function maxNum(a, b, c) {
//   a = 10;
//   b = 15;
//   c = 21;
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
//  maxNum();

// 11
// const calculatePrice = (price, discount = 10) =>
//   price - (price * discount) / 100;
// console.log(calculatePrice(200, 10));

// function calculatePrice(price, discount = 10) {
//   return price - (price * discount) / 100;
// }
// console.log(calculatePrice(200, 10));

// 12 - same as 9

// 13
// function calculateMultiply(num1, num2) {
//   if (num1 == undefined && num2 == undefined) {
//     return 1;
//   } else {
//     return num1 * num2;
//   }
// }
// console.log(calculateMultiply(12, 2));
// console.log(calculateMultiply());

// function calculateMultiply(num1, num2) {
//   if (num1 == undefined && num2 == undefined) {
//     console.log("1");
//   } else {
//     console.log(num1 * num2);
//   }
// }
// calculateMultiply(12, 2);

// function calculateMultiply(num1, num2) {
//   let a = 12;
//   let b = 2;
//   if (a == undefined && b == undefined) {
//     return 1;
//   } else {
//     return a * b;
//   }
// }
// console.log(calculateMultiply());

// function calculateMultiply(num1, num2) {
//   let a = 12;
//   let b = 2;
//   if (a == undefined && b == undefined) {
//     console.log("1");
//   } else {
//     console.log(a * b);
//   }
// }
// calculateMultiply();

// const calculateMultiply = (num1, num2) => {
//   if (num1 == undefined && num2 == undefined) {
//     return 1;
//   } else {
//     return num1 * num2;
//   }
// };
// console.log(calculateMultiply(12, 2));
// console.log(calculateMultiply());

// const calculateMultiply=(num1, num2) => {
//   if (num1 == undefined && num2 == undefined) {
//     console.log("1");
//   } else {
//     console.log(num1 * num2);
//   }
// }
// calculateMultiply(12, 2);

// const calculateMultiply=(num1, num2) =>{
//   let a = 12;
//   let b = 2;
//   if (a == undefined && b == undefined) {
//     return 1;
//   } else {
//     return a * b;
//   }
// }
// console.log(calculateMultiply());

// const calculateMultiply = (num1, num2) => {
//   let a = 12;
//   let b = 2;
//   if (a == undefined && b == undefined) {
//     console.log("1");
//   } else {
//     console.log(a * b);
//   }
// };
// calculateMultiply();

14
function greet(hi) {
  if (hi == undefined) {
    console.log("Anonymous");
  } else {
    console.log("Hello");
  }
}
greet();

// 15
