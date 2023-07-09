// const students = [
//   { name: "Vansh", grade: 15 },
//   { name: "Bhaumik", grade: 15 },
//   { name: "Rudra", grade: 13 },
//   { name: "Sachin", grade: 14 },
//   { name: "Pujan", grade: 14 },
// ];
// students.sort((a, b) => a.grade - b.grade);
// students.sort((a, b) => b.grade - a.grade);
// console.log(students);

// let toons = ["Tom", "Jerry", "Power Rangers", "Mickey Mouse"];
// let newToons = toons.fill("Doraemon", 2, -1);
// let newToons = toons.fill("Doraemon", 2, 1);
// let newToons = toons.fill("Doraemon", 1, -3);
// let newToons = toons.fill("Doraemon", 3, 1);
// console.log(newToons);

// let num = [1, 2, 3, 4, 5, 4, 98, 58, 68, 52];
// let newNum = num.every((a) => a < 100);
// console.log(newNum); // it will return boolean value

//finding the highest age
// const people = [
//   { name: "Alice", age: 18 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 19 },
//   { name: "David", age: 21 },
// ];
// let highestAge = people.reduce((acc, curr) => {
//   if (curr.age > acc) {
//     return curr.age;
//   }
//   return acc;
// }, 0);
// console.log(highestAge);

// let lang = ["JS", "CSS", "JQuery", "Next"];
// let newLang = lang.reduce((a, c) => a+c);
// console.log(newLang);

// let a = ["JS", "CSS", "JQuery"];
// let result = '"' + a.join('","') + '"';
// let result = a.reduce((accu, curr) => {
//     return accu + '","' + curr;
// })
// result = '"' + result + '"';
// console.log(result);

const d = {
  name: "Vansh",
  //   label: lang.find((e) => e.id === "JS").label,
  //   label: lang.filter((e) => e.id === "JS").label,
  //   label: lang.map((e) => e.id === "JS").label,
  label: lang.forEach((e) => e.id === "JS")["sdf"].label
};
console.log(d);

// let abc = "Hello World";
// let newAbc = abc.split("").reverse().join("");
// abc.reverse();
// let sec = newAbc.reverse();
// console.log(newAbc);

// function reverseStr(str) {
//   return str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }
// console.log(reverseStr("Hello World"));

// function fun_name(arrayOfArray, array) {
//     let arr = arrayOfArray.flat(Infinity);
//     let a = array.map(e => {
//         for (let i = 0; i < arr.length; i++) {
//             if (e == arr[i]) {
//                 return true;
//             }
//         }
//     });
//     let result = a.every(e => e == true)
//     return result;
// }
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]));                      //true
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]));                      //true
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]));                    //false
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90]));  //true

// let a = " ".concat({});
// console.log(a); //DOUBT

// function returnSumInteger(array, sum) {
//   let a = array.reduce((acc, cur) => {
//     for (let i = 0; i < array.length; i++) {
//       if (cur + array[i] === sum) {
//         acc.push([cur, array[i]]);
//       }
//     }
//     return acc;
//   }, []);
//   return a[1];
// }
// console.log(returnSumInteger([2, 3, 5, 4, 8, 9], 7));

// ARRAY METHODS REVISION

// 1. at()
// let toons = ["Tom and Jerry", "Doraemon", "Mickey Mouse", "Motu Patlu"];
// // let findToons = toons.at(2);
// let findToons = toons.at(-2);
// console.log(findToons);

// 2. concat();
// const toons = ["Tom and Jerry", "Doraemon", "Mickey Mouse", "Motu Patlu"];
// const moreToons1 = ["Shinchan", "Power Rangers"];
// const moreToons2 = ["Oggy and the Cockroaches", "Dora"];
// const mergeToons = toons.concat(moreToons1, moreToons2);
// console.log(mergeToons);
// console.log(toons);

// 3. every();
// let num = [1, 2, 54, 6, 3, 4, 5, 6, 56, 10, 12, 13];
// let newNum = num.every((a) => a > 10);
// let newNum = num.every((a) => a < 100);
// console.log(newNum);

// 4. filter();
// let num = [1, 2, 54, 6, 3, 4, 5, 6, 56, 10, 12, 13];
// let filterNum = num.filter((a) => a > 10);
// console.log(filterNum);

// const toons = ["Tom and Jerry", "Doraemon", "Mickey Mouse", "Motu Patlu"];
// let filteredToons = toons.filter((toon, i) => toon[i] > 1);
// console.log(filteredToons);

// const fruits = ["apple", "banana", "grapes", "mango", "orange",'apple sauce'];
// function filterItems(arr, query) {
//   return arr.filter((value) => value.toLowerCase().includes(query.toLowerCase()));
// }
// console.log(filterItems(fruits, "ap"));

// 5. find();
// const toons = ["Tom and Jerry", "Doraemon", "Mickey Mouse", "Motu Patlu"];
// let abc = function isDoraemon(value) {
//   return value === "Doraemon";
// };
// // let findToons = toons.find((a) => a.length > 2);
// let findToons = toons.find(abc);
// console.log(findToons);

// let num = [1, 2, 54, 6, 3, 4, 5, 6, 56, 10, 12, 13];
// let findNum = num.find((a) => a > 10);
// console.log(findNum);

// 6. findIndex();
// let num = [1, 2, 54, 6, 3, 4, 5, 6, 56, 10, 12, 13];
// let findNum = num.findIndex((a) => a > 10);
// console.log(findNum);

// const toons = ["Tom and Jerry", "Doraemon", "Mickey Mouse", "Motu Patlu"];
// let abc = function isDoraemon(value) {
//   return value === "Doremon";
// };
// let findToons = toons.findIndex(abc);
// console.log(findToons);

// 7. findLast();
// let num = [1, 2, 54, 6, 3, 4, 5, 6, 56, 10, 12, 13];
// let findNum = num.findLast((a) => a > 10);
// console.log(findNum);

// const toons = ["Tom and Jerry", "Doraemon", "Mickey Mouse", "Motu Patlu"];
// let abc = function isDoraemon(value) {
//   return value === "Doremon";
// };
// let findToons = toons.findLast(abc);
// console.log(findToons);

// 8. findLastIndex();
// let num = [1, 2, 54, 6, 3, 4, 5, 6, 56, 10, 12, 13];
// let findNum = num.findLastIndex((a) => a > 10);
// console.log(findNum);

// const toons = ["Tom and Jerry", "Doraemon", "Mickey Mouse", "Motu Patlu"];
// let abc = function isDoraemon(value) {
//   return value === "Doremon";
// };
// let findToons = toons.findLastIndex(abc);
// console.log(findToons);

// flat();
// let arr = [10, [9, [8, [7, [6, [5, [4, [3, [2, [1]]]]]]]]]];
// let flatArr = arr.flat(Infinity).reverse();
// console.log(flatArr);

// forEach();
// includes();
// indexOf();
// isArray();
// join();
// lastIndexOf();
// map();
// pop();
// push();
// reduce();
// reverse();
// shift();
// slice();
// some();
// sort();
// splice();
