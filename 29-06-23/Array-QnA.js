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
// for (i = 0; i < names.length; i++) {
//   let fullName = names[i].first_name + " " + names[i].last_name;
//   names[i].fullname = fullName;
// }
// console.log(names);

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
// let newArray = users.map((value, i) => {
//   if (users[i].age >= 18) {
//     value.isMature = "True";
//   } else {
//     value.isMature = "False";
//   }
// });
// console.log(users);

// 3
// let arr = [1, 2, 3, 5];
// console.log(arr[-1]);

// 4
// const nestedArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let newArray = nestedArray.flat();
// console.log(newArray);
// for (let value of newArray) {
//     console.log(value)
// }
// console.log(nestedArray);

// 5
const nestedObject = {
  name: "Vishal Kukreja",
  age: 32,
  address: {
    street: "123 Mumbai fashion St",
    city: "Midtown",
    state: "MH",
  },
  hobbies: ["reading", "drawing", "gardening"],
};

for (let values of nestedObject) {
  console.log(values);
}

// console.log(nestedObject.name);
// console.log(nestedObject.age);
