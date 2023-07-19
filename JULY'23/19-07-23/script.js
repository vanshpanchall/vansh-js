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
// const obj1 = { a: 12, b: 23 };
// const obj2 = obj1;
// const obj3 = { ...obj1 };
// obj1.c = 23;
// console.log(obj1.c, obj2.c, obj3.c);
// it will change in obj1 only bc only the values are passed

// 3
// const obj1 = { a: 12, b: 23 };
// const obj2 = { a: 44, b: 45 };
// const obj3 = Object.assign(obj1, obj2);
// obj2.a = 22;
// console.log(obj1, obj2, obj3);
// it won't change both objects because we have used assign method

// 4
// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign(obj1, obj2);
// obj1.a = 22;
// console.log(obj3);
// it will change because we have given the reference of obj1 to obj3

// 5
// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign({}, obj1, obj2);
// obj1.a = 22;
// console.log(obj3);
// it won't be changed in obj bc we have only passed the value

// 6
// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, source);
// console.log(target);
// same as given

// 7
// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, JSON.parse(JSON.stringify(source)));
// // source.a.b = 2;
// target.a.b = 2;
// console.log(target);

// 8
// const source = { a: 1 };
// const target = Object.assign({}, source);
// delete target.a;
// console.log(source);
// we have printed source here

// 9
// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === source);
// here target and result are equal

// 10
// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === { a: 1, b: 2 });
// console.log(result);
// false bc the reference is different

// 11
// const target = { a: 1 };
// const source = { b: 2 };
// Object.assign(target, source);
// target.b = 234;
// console.log(source);
// here we have printed source (its reference havent changed)

// 12
// const target = {};
// const source = { a: 1 };
// const result = Object.assign(target, source);
// source.a = 2;
// console.log(result);
// here source has given the value

// 13
// const target = {};
// const source = { a: { b: 1 } };
// const result = Object.assign(target, source);
// result.a.b = 2;
// console.log(source);
// the value will be changed because it is of 2nd level nested

// 14
// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// console.log(result);
// result has the reference of target

// 15
// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// target.a[2] = 90;
// console.log(result);

// 16
// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(target);
// console.log(result);
// only one property was copied from second object to first

// 17
// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// console.log(Object.entries(student));

// 18
// delete property will be used

// 19

// function operationObj(obj) {
//   obj = {...obj, c: 12}
// }
// let a = {  x: 34,  y: 56 }
// operationObj(a);
// console.log(a);
// we havent returned anything here

// 20
// function operationObj(obj) {
//   obj.z = { ...obj, c: 12 };
// }
// let a = {
//   x: 34,
//   y: 56,
// };
// operationObj(a);
// console.log(a);
// we have created a new property here (z) so all the values will be passed into the object

// 21
// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(source);

// 22
// function assign(obj1, obj2) {
//   for (let value in obj2) {
//     obj1[value] = obj2[value];
//   }
//   return obj1;
// }
// let obj1 = { a: 10, b: 20 };
// let obj2 = { b: 30, c: 40 };
// let obj3 = assign(obj1, obj2);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// 23

// a
// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1);
// it will add a new property c

// b
// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// obj1.c.f = 30;
// console.log(arr1);
// we have given the reference of arr2 so it will change but obj1 wont

// c
// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// obj1.c.f = 30;
// console.log(arr1);
// it will change because it is 2nd level nested

// d
// let obj1 = { a: 23, b: 45 };
// let arr1 = Object.assign([], [{ ...obj1 }]);
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1);
// it will change

// e
// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], arr1);
// arr2[0].c = 5;
// console.log(arr1);

// f
// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], [{ ...arr1[0] }]);
// arr2[0].c = 5;
// console.log(arr1);

// g
// let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
// let obj2 = Object.assign({}, obj1);
// let obj3 = Object.assign({ ...obj2 }, { c: { k: 44 } });
// obj2.c.h = 67;
// console.log(obj1, obj2, obj3);
// we have only added value k in obj3

// -------- CONTROL STATEMENTS --------

// 2
// function getDay(day) {
//   switch (day) {
//     case 1:
//       console.log("Monday");
//       break;
//     case 2:
//       console.log("Tuesday");
//       break;
//     case 3:
//       console.log("Wednesday");
//       break;
//     case 4:
//       console.log("Thursday");
//       break;
//     case 5:
//       console.log("Friday");
//       break;
//     case 6:
//       console.log("Saturday");
//       break;
//     case 7:
//       console.log("Sunday");
//       break;
//     default:
//       console.log("None");
//   }
// }
// getDay(7);

// 6

// let bunch1 = [1, 3, 5, 7, 8, 10, 12];
// let bunch2 = [4, 6, 9, 11];

// function getNumberOfDays(num) {
//   if (bunch1.includes(num)) return 31;
//   else if (bunch2.includes(num)) return 30;
//   else return 28;
// }
// console.log(getNumberOfDays(2));
// // console.log(getNumberOfDays(3));

// 15
// function isStringContainsNum(pass_string) {
//   for (let i = 0; i < pass_string.length; i++) {
//     if (pass_string[i] >= 0 && pass_string[i] <= 9) {
//       return true;
//     }
//   }
//   return false;
// }
// let one = isStringContainsNum("assad");
// let two = isStringContainsNum("agfh1");
// let three = isStringContainsNum("a22g 55 sdf");
// let four = isStringContainsNum("111");
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);

// 16

// function isStringContainsNum(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= 0 && str[i] <= 9) {
//       return true;
//     }
//   }
//   return false;
// }

// function checkStr(str) {
//   if (str == Number(str)) {
//     return "String is Number";
//   } else if (isStringContainsNum(str)) {
//     return "String containes Number";
//   } else {
//     return "String does not containes a numnber";
//   }
// };
// console.log(checkStr(2146));
// console.log(checkStr('6546'));
// console.log(checkStr('356f5d4e'));
// console.log(checkStr('feehsdi'));


// function printNums(num1, num2) {
//     let empArr = [];
//     for (i = num1; i < num2; i++) {
//         return i;
//     }
//     return empArr.push(i);
// }
// console.log(printNums(2, 4));

// ------- ARRAY --------

