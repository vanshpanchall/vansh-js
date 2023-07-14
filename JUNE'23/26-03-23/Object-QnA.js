// 1
// const source = { a: 1 };
// const target = { b: 2 };
// Object.assign(target, source);
// console.log(target);

// 2
// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === source);

// 3
// const obj1 = { a: 12, b: 23 };
// const obj2 = { a: 44, b: 45 };
// const obj3 = Object.assign(obj1, obj2);
// obj2.a = 22;
// console.log(obj1, obj2, obj3);

// 4
// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign(obj1, obj2);
// obj1.a = 22;
// console.log(obj3);

// 5
// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign({}, obj1, obj2);
// obj1.a = 22;
// console.log(obj3);

// 6
// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, source);
// console.log(target);

// 7
// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, JSON.parse(JSON.stringify(source)));
// source.a.b = 2;
// console.log(target);
// console.log(source);

// 8
// const source = { a: 1 };
// const target = Object.assign({}, source);
// delete target.a;
// console.log(source);

// 9
// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === source);

// 10
// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result);
// console.log(result === { a: 1, b: 2 });\

// 11
// const target = { a: 1 };
// const source = { b: 2 };
// Object.assign(target, source);
// target.b = 234;
// console.log(source);

// 12
// const target = {};
// const source = { a: 1 };
// const result = Object.assign(target, source);
// source.a = 2;
// console.log(result);

// 13
// const target = {};
// const source = { a: { b: 1 } };
// const result = Object.assign(target, source);
// result.a.b = 2;
// console.log(source);
// console.log(target);

// 14
// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// console.log(result);

// 15
// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// source.a[2] = 90;
// console.log(result);

// 16
// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(target);
// console.log(source);

// 17
// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// console.log(Object.entries(student));

// 18
// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// console.log(student);
// delete student.rollno;
// console.log(student);

// 19
// function operationObj(obj) {
//   obj = { ...obj, c: 12 };
// }
// let a = { x: 34, y: 56 };
// operationObj(a);
// console.log(a);

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

// 21
// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(source);
// console.log(result);

// 22

// chatGPT
// function customAssign(target, source) {
//   const merged = {};

//   // Copy properties from target object
//   for (let key in target) {
//     if (target.hasOwnProperty(key)) {
//       merged[key] = target[key];
//     }
//   }

//   // Copy properties from source object
//   for (let key in source) {
//     if (source.hasOwnProperty(key)) {
//       merged[key] = source[key];
//     }
//   }

//   return merged;
// }

// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };

// const result = customAssign(target, source);
// console.log(result);

// 23

// a
// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// // obj1.c = 5;
// console.log(arr1);
// console.log(arr2);
// console.log(obj1); // arr1 and arr2 will change, abj1 won't

// b
// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// // obj1.c.f = 30;
// console.log(obj1);
// console.log(arr1);
// console.log(arr2);

// c
// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// obj1.c.f = 30;
// console.log(arr1);

// d
// let obj1 = { a: 23, b: 45 };
// let arr1 = Object.assign([], [{ ...obj1 }]);
// let arr2 = arr1;
// arr2[0].c = 5;
// obj1.a = 20;
// console.log(arr1);
// console.log(arr2);
// console.log(obj1);

// e
// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], arr1);
// arr2[0].c = 5;
// obj1.a = 15;
// console.log(arr1);
// console.log(arr2);
// console.log(obj1);

// f
// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], [{ ...arr1[0] }]);
// arr2[0].c = 5;
// // arr1[0].c = 5;
// obj1.a = 20;
// console.log(arr1);
// console.log(arr2);
// console.log(obj1);

// g
// let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
// let obj2 = Object.assign({}, obj1);
// let obj3 = Object.assign({ ...obj2 }, { c: { k: 44 } });
// obj2.c.h = 67;
// console.log(obj1, obj2, obj3);
