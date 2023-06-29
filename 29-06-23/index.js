// for (let i = 1; i <= 5; i++) {
//   console.log(i);
//     continue;
// }

// a
// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1);

// b
// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// obj1.c.f = 30;
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
// console.log(arr1);
// console.log(arr2);
// console.log(obj1);

// g
// let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
// let obj2 = Object.assign({}, obj1);
// let obj3 = Object.assign({ ...obj2 }, { c: { k: 44 } });
// obj2.c.h = 67;
// console.log(obj1, obj2, obj3);

// questions

// let obj1 = { a: 10, b: 20 };
// let obj2 = { c: 25 };
// let obj3 = Object.assign(obj1, obj2);
// obj2.c = 30;
// console.log(obj1);
// console.log((obj3));

// let arr1 = [{ a: 12, b: 20 }];
// let arr2 = [...arr1[0]];
// console.log(arr1);
// console.log(arr2);
