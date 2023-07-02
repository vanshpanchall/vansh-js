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

// 1
// function toppingChocolate(array) {
//   let filteredChoco = mainDonut.filter((value, index, arr) => {
//     let topping = value.topping;
//     for (let i = 0; i < topping.length; i++) {
//       if (topping[i].type == "Chocolate") {
//         // console.log(value.type + ":");
//         // console.log(value);
//         return value.type;
//       }
//     }
//   });
//   console.log(filteredChoco);
// }
// toppingChocolate(mainDonut);

// let a = mainDonut.filter((item) =>
//   item.topping.filter((topp) => topp.type == "Chocolate").length
// );
// console.log(a);
// console.log(mainDonut);

// 2
// const batter_topping = mainDonut.filter(
//   (donut) =>
//     donut.batters.batter.some((batter) => batter.type === "Regular") &&
//     donut.topping.some((topping) => topping.type === "Chocolate")
// );
// console.log(batter_topping);

// 3
// const resultOfTopping = mainDonut.filter(
//   (donut) =>
//     donut.batters.batter.some((batter) => batter.type === "Regular") &&
//     donut.topping.some((topping) => topping.type === "Chocolate")
// );
// console.log(result);

// 4
// function filter_ppu() {
//   let filterppu = mainDonut.filter((value) => value.ppu > 0.5);
//   console.log(filterppu);
// }
// filter_ppu();

// let arrs = mainDonut.filter((value, i, arr) => {
//   if (arr[i].ppu > 0.5) {
//     return mainDonut;
//   }
// });
// console.log(arrs);

// 5

// 6
// const result = mainDonut.filter((donut) => donut.batters.batter.length >= 2);
// console.log(result);

// const result = mainDonut.map((donut) => donut.batters.batter);
// console.log(result);

// wrong method
// const filteredChoco = mainDonut.filter(
//   (choco) => choco.topping.type === "Chocolate"
// );
// console.log(filteredChoco);

// 10
// let str1 = "George Raymond Richard Martin";
// let str2 = "george raymond richard martin";
// function getnameInitials(str0) {
//   let str3 = str0.split(" ");
//   let emptyStr = "";
//   for (let index in str3) {
//     let strResult = str3[index].charAt(0).toUpperCase();
//     emptyStr += strResult;
//   }
//   return emptyStr;
// }
// console.log(getnameInitials(str1));
// console.log(getnameInitials(str2));

// 11
// let str = "Every developer likes to mix kubernetes and javascript";
// let string = "Every developer likes to mix kubernetes and javascript";
// function addNumber(string) {
//   let a = str.split(" ");
//   let c = "";
//   for (let value in a) {
//     if (a[value].slice(1, a[value].length - 1).length === 0) {
//       c += a[value].charAt(0) + a[value].charAt(a[value].length - 1) + " ";
//     } else if (a[value].slice(1, a[value].length - 1).length === 1) {
//       c +=
//         a[value].charAt(0) +
//         a[value].slice(1, 2) +
//         a[value].charAt(a[value].length - 1) +
//         " ";
//     } else {
//       c +=
//         a[value].charAt(0) +
//         a[value].slice(1, a[value].length - 1).length +
//         a[value].charAt(a[value].length - 1);
//       (" ");
//     }
//   }
//   console.log(c);
//   console.log(typeof(c));
// }
// addNumber(str);

// 12
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
//   let clothes = arrName.filter((value) => value.category == "Clothes");
//   let electronics = arrName.filter((value) => value.category == "Electronics");
//   let a = clothes.length;
//   let b = electronics.length;
//   emptyObj.clothes = a;
//   emptyObj.electronics = b;
//   return emptyObj;
// }
// let secObj = anyArray(products);
// console.log(secObj);

// function avg(arr) {
//   let a = 0;
//   let b = 0;
//   let c = 0;
//   let d = 0;
//   arr.filter((value) => {
//     if (value.category == "Clothes") {
//       c += value.price;
//       a++;
//     } else if (value.category == "Electronics") {
//       d += value.price;
//       b++;
//     }
//   });
//   return { CLothes: a / c, Electronics: d / b };
//   //   return { CLothes: c / a, Electronics: d / b };
// }
// console.log(avg(products));

// 13
const employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];
