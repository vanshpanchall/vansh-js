// ARRAY QUESTIONS (REVISION)

// 1
// const names = [
//   { first_name: "Handnm", last_name: "L demo" },
//   { first_name: "Q Wei", last_name: "Alxezx" },
//   { first_name: "Pqwern", last_name: "Ruse" },
//   { first_name: "Wiruyn", last_name: "Ruby" },
//   { first_name: "Erpso", last_name: "Loal" },
//   { first_name: "Demors", last_name: "Poet" },
//   { first_name: "Aleos", last_name: "Lkeu" },
// ];
// let newNames = names.map(
//   (value) => (value.full_name = value.first_name + " " + value.last_name)
// );
// console.log(names);
// console.log(newNames);

// 2
// const users = [
//   { first_name: "Handnm", last_name: "L demo", age: 17 },
//   { first_name: "Q Wei", last_name: "Alxezx", age: 30 },
//   { first_name: "Pdeq Twern", last_name: "Ruse", age: 22 },
//   { first_name: "Widfruyn", last_name: "Ruby", age: 11 },
//   { first_name: "Erdfg Pso", last_name: "Loal", age: 34 },
//   { first_name: "Dedfgmors", last_name: "Poet", age: 60 },
//   { first_name: "Ale4tos", last_name: "Lkeu", age: 16 },
// ];
// let newArr = users.map((value, index) => {
//   if (users[index].age >= 18) {
//     return (value.isMature = "True");
//   } else {
//     return (value.isMature = "False");
//   }
// });
// console.log(users);
// console.log(newArr);

// 5
// const nestedObject = {
//   name: "Vishal Kukreja",
//   age: 32,
//   address: {
//     street: "123 Mumbai fashion St",
//     city: "Midtown",
//     state: "MH",
//   },
//   hobbies: ["reading", "drawing", "gardening"],
// };
// for (let key in nestedObject) {
//   if (typeof nestedObject[key] === "object") {
//     for (let insideKey in nestedObject[key]) {
//       console.log(nestedObject[key][insideKey]);
//     }
//   } else if (Array.isArray(nestedObject[key])) {
//     for (let index in nestedObject[key]) {
//       console.log(nestedObject[key][index]);
//     }
//   } else {
//     console.log(nestedObject[key]);
//   }
// }

// 6
// function containsNum(num) {
//   for (let i = 0; i < num.length; i++) {
//     if (typeof num[i] === "number" && !isNaN(num[i])) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(containsNum([1, 2, 3]));
// console.log(containsNum(["1", "a", "h"]));
// console.log(containsNum(["a", 3, "gh"]));
// console.log(containsNum(["a", "3df", "gh"]));

// 10
// let str1 = "George Raymond Richard Martin";
// let str2 = "george raymond richard martin";
// let str2 = "aayhsug yv udfqwe wqdgiwd *bdiw ";
// function firstChar(str) {
//   let newStr = str.split(" ");
//   let empStr = "";
//   for (let index in newStr) {
//     let result = newStr[index].charAt(0).toUpperCase();
//     empStr += result;
//   }
//   return empStr;
// }
// console.log(firstChar(str1));
// console.log(firstChar(str2));

// 11
// function changeWords(str) {
//   let words = str.split(" ");
//   let a = words.map((word) => {
//     if (word.length >= 4) {
//       return word.at(0) + (word.length - 2) + word.at(-1);
//     }
//     return word;
//   });
//     let b = a.join(" ");
//   return b;
// }
// console.log(
//   changeWords("Every developer likes to mix bubernetes and javascript")
// );

// 18
const input = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];
function groupAlphabetically(arr) {
  let mix = {};
  let firstChar = arr.map((word) => word.name.charAt(0).toUpperCase());
  firstChar.forEach((value) => {
    let charName = arr.filter(
      (word) => word.name.charAt(0).toUpperCase() === value
    );
    mix[value] = charName;
  });
  return mix;
}
console.log(groupAlphabetically(input));
