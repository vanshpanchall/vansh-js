// 1
// const a = 3;
// const b = 4;
// let sumOFAB = sum(a, b);
// const sum = (d1, d2) => d1 + d2;
// console.log(sumOFAB());

//3
// let text1;
// console.log(typeof text1);

// 4
// function getName(obj, key) {
//   return obj.key;
// }
// const obj1 = { name: "demo", age: 23 };
// let name = getName(obj1, "name");
// console.log(name);

// 5
// function abc() {
//     const ab = () => 40;
//     abcd(() => ab());
// }
// function abcd(cb) {
//     let a = cb();
//     console.log(a);
// }
// console.log(abc());

// 7
// function numOFArr(arr) {
//   return arr.filter((a) => a.length).length;
// }
// console.log(numOFArr([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]]));

// 11
// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// const result = {...target, ...source}
// console.log(result === target);

// 14
// var animal = { weight: 23, sound: 'woof' };
// function makeSound(options) {
//     var species = options.species || 'animals';
//     var sound = options.sound;
//     return ('The ' + species + ' says ' + sound + "!");
// }
// console.log(makeSound(animal));

// 15
// const names = ['10', '150', '56', '1', '4', '55', '67'];
// function sortArr(arr) {
//     let newArr = arr.sort((a, b) => b - a);
//     return newArr;
// };
// console.log(sortArr(names));

// 16
// let arr1 = [1, 2, 3];
// let arr2 = [100, 2, 1, 10];

// function unionArr(arr1, arr2) {}

// 18
// let obj = { df: 56 };
// let { a: df = 45 } = obj;
// console.log(df);

// 19

// my solution (wrong)
// function numArr(str) {
//     let emptyArr = [];
//     let
//   for (var i = 0; i < str.length; i++) {
//     if (typeof str[i] === "number") {
//       return str[i];
//     }
//   }
//   return emptyArr.push(i);
// }
// console.log(numArr("ad4f5s3ee5"));

// solution
// function fun(str) {
//   let a = str.split("");
//   let b = [];
//   a.forEach((value) => {
//     if (Number(value)) {
//       b.push(Number(value));
//     }
//   });
//   return b;
// }
// console.log(fun("ab34bb43b"));

// QUESTIONS

// 1

// function device() {
//     console.log(name);
//     console.log(price);
//     var name = 'mobile';
//     let price = 50000;
// }
// device(); // Output - mobile undefined

// 2
// console.log(+true);
// console.log(typeof +true);

// 3

// let type = "clothes";
// const newClothes = {
//   clothes: "shirt",
// };
// console.log(newClothes[type]);
// console.log(newClothes["clothes"]);
// console.log(newClothes.type);
// console.log(newClothes.clothes);

// 4
// let a = { name: "Vansh" };
// let b;
// b = a;
// a.name = "Bhaumik";
// console.log(b.name);

// 5
// let a = 5;
// let b = new Number(5);

// console.log(a == b);
// console.log(a === b);

// 6
// function device() {
//     console.log('laptop');
// }
// device.name = 'mobile';
// console.log(device());

// 7
// function age(...a) {
//   console.log(typeof a);
// }
// age(18);

// 8
// console.log(typeof typeof true);
// console.log(typeof typeof 5);
// console.log(typeof []);

// 9
// console.log(!true - true);

// 10
// function greet() {
//   return () => 0;
// }
// console.log(typeof greet());

// 11
const num = [1, 2, 3];
num[5] = num;
console.log(num);