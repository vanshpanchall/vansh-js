// for loop

// for (let i = 0; i <= 15; i++) {
//   console.log(i);
// }
// for (i = 0; i <= 15; i++) {
//   console.log(i);
// }

// for (i = 10; i <= 100; i = i + 10) {
//   console.log(i);
// }
// {
//   console.log(i);
// }

// for (i = 10; i <= 100; i = i + 10) {
//   if (i == 50) {
//     break;
//   }
//   console.log(i);
// }
// {
//   console.log(i);
// }

// let num = "";
// for (let i = 0; i < 10; i++) {
//   num = num + i;
//   console.log(num);
// }
// console.log(num);

// let obj = {
//   fname: "Vansh",
//   enr: "2302021",
// };
// for (let details in obj) {
//   console.log(details);
//   console.log(obj[details]);
// }

// let arr1 = ["vansh", "panchal"];
// for (let details of arr1) {
//   console.log(details);
// }

// let a = 0;
// while (a < 10) {
//   a++;
//   console.log(a);
// }

// let a = 1;
// do {
//   console.log(a);
//   a++;
// } while (a <= 10);

//object.assign
let course = {
  name: "CE",
};

let marks = {
  grade: 9.5,
};

let finalResult = Object.assign(course, marks);
finalResult.grade = 8.9;
console.log(finalResult);

// questions

// let abc = "Hello world";
// let a = abc.replace("world", " ");
// console.log(a);

// console.log(20 > 10 > 5);

// let obj1 = { a: 12, b: 30 };
// let obj2 = { a: 20 };
// let obj3 = Object.assign(obj1, obj2);
// obj3.a = 25;
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// let obj1 = {
//   a: 20,
//   b: 20,
// };
// let obj2 = {
//   a: 20,
// };
// let obj3 = Object.assign(obj1, obj2);
// obj1.a = 25;
// console.log(obj1.a);

// let obj1 = {
//   a: 12,
//   b: 30,
// };
// let obj2 = Object.assign({ a: 12 }, obj1);
// obj2.a = 20;
// console.log(obj2.a);

// let obj1 = { a: 12, b: 30 };
// let obj2 = Object.assign({ a: 12 }, obj1);
// obj1.a = 20;
// console.log(obj2.a);

// let obj3 = { a: 15, b: 20 };
// let obj4 = { a: 20, b: 60 };
// let obj5 = Object.assign(obj3, obj4);
// console.log(obj3.a);
// obj3.a = 25;
// console.log(obj5 === obj3);
