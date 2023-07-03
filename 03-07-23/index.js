// let a = [];
// let b = a.map((value) => value);
// console.log(b);

// let num = [1, 2, 3, 4, 5];
// let newNum = num.map((value,index, arr) => arr[value + 1]);
// console.log(newNum);

// let num = [{ a: 15 }, { c: { b: 20 } }];
// let newArr = num.map((value) => value?.b.map((value) => value * 2));
// console.log(newArr); //error

// flat() logic
// const nestedArray = [1, [2, [3, [[4]]], 5], 6];
// function flat(arr) {
//   let flattenedArray = [];

//   function flatten(array) {
//     for (let values of array) {
//       if (Array.isArray(values)) {
//         flatten(values);
//       } else {
//         flattenedArray.push(values);
//       }
//     }
//   }

//   flatten(arr);
//   return flattenedArray;
// }
// console.log(flat(nestedArray));

// let a = [[[[["hi"]]]]];
// let b = a.flat(Infinity);
// console.log(b);

// QUESTIONS WITH finc()

// 9
// let mainDonut = [
//   {
//     id: "0001",
//     type: "donut",
//     name: "Cake",
//     ppu: 0.55,
//     batters: {
//       batter: [
//         { id: "1001", type: "Regular" },
//         { id: "1002", type: "Chocolate" },
//         { id: "1003", type: "Blueberry" },
//         { id: "1004", type: "Devil's Food" },
//       ],
//     },
//     topping: [
//       { id: "5001", type: "None" },
//       { id: "5002", type: "Glazed" },
//       { id: "5005", type: "Sugar" },
//       { id: "5007", type: "Powdered Sugar" },
//       { id: "5006", type: "Chocolate with Sprinkles" },
//       { id: "5003", type: "Chocolate" },
//       { id: "5004", type: "Maple" },
//     ],
//   },
//   {
//     id: "0002",
//     type: "donut2",
//     name: "Raised",
//     ppu: 0.55,
//     batters: {
//       batter: [{ id: "1001", type: "Regular" }],
//     },
//     topping: [
//       { id: "5001", type: "None" },
//       { id: "5002", type: "Glazed" },
//       { id: "5005", type: "Sugar" },
//       { id: "5003", type: "Chocolate" },
//       { id: "5004", type: "Maple" },
//     ],
//   },
//   {
//     id: "0003",
//     type: "donut3",
//     name: "Old Fashioned",
//     ppu: 0.55,
//     batters: {
//       batter: [
//         { id: "1001", type: "Regular" },
//         { id: "1002", type: "Chocolate" },
//       ],
//     },
//     topping: [
//       { id: "5001", type: "None" },
//       { id: "5002", type: "Glazed" },
//       { id: "5003", type: "Chocolate" },
//       { id: "5004", type: "Maple" },
//     ],
//   },
//   {
//     id: "0004",
//     type: "donut1",
//     name: "Old Fashioned",
//     ppu: 0.55,
//     batters: {
//       batter: [{ id: "1001", type: "Regular" }],
//     },
//     topping: [
//       { id: "5001", type: "None" },
//       { id: "5002", type: "Glazed" },
//       { id: "5003", type: "Chocolate" },
//       { id: "5004", type: "Maple" },
//     ],
//   },
// ];

// function filter_ppu() {
//   let filterppu = mainDonut.find((value) => value.ppu > 0.5);
//   console.log(filterppu);
// }
// filter_ppu();

// let filterChocolate = mainDonut.filter((value) =>
//   value.topping.find((value) => value.type == "Chocolate")
// );
// console.log(filterChocolate);

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

// names.forEach(
//   (value) => (value.full_name = value.first_name + " " + value.last_name)
// );
// console.log(names);

// 10
// const products = [
//   { name: "Product 1", price: 20, category: "Electronics" },
//   { name: "Product 2", price: 30, category: "Clothes" },
//   { name: "Product 3", price: 40, category: "Electronics" },
//   { name: "Product 4", price: 50, category: "Clothes" },
//   { name: "Product 5", price: 60, category: "Clothes" },
//   { name: "Product 6", price: 70, category: "Electronics" },
//   { name: "Product 7", price: 80, category: "Clothes" },
//   { name: "Product 8", price: 90, category: "Electronics" },
// ];

// function anyArray(arrName) {
//   let emptyObj = {};
//   let clothes = arrName.find((value) => value.category == "Clothes");
//   let electronics = arrName.find((value) => value.category == "Electronics");
//   let a = clothes.length;
//   let b = electronics.length;
//   emptyObj.clothes = a;
//   emptyObj.electronics = b;
//   return emptyObj;
// }
// let secObj = anyArray(products);
// console.log(secObj);

// let arr = [
//   { a: 15, b: [15, 20] },
//   { a: 15, b: 15 },
// ];
// let arr2 = arr.map((value) => {
//   if (Array.isArray(value.b)) {
//     let abc = value.b.map((value) => value * 2);
//     return { ...value, b: abc };
//   } else {
//     return value;
//   }
// });
// console.log(arr2);

// let obj = { a: 10, b: 20, c: 10 };
// function abc({ a, b }) {
//   return { a, b };
// }
// console.log(abc(obj));

let names = [
  "vansh",
  "bhaumik",
  "Amara",
  "prakhar",
  "pujan",
  "rudra",
  "sachin",
  "Andrew",
  "Clark",
];
let emptyObj = {};
names.forEach((name) => {
  let firstChar = name[0];
  if (emptyObj[firstChar]) {
    emptyObj[firstChar].push(name);
  } else {
    emptyObj[firstChar] = [name];
  }
});
console.log(emptyObj);
