// 1
// let arr = [10, 20, 30, 40, 50];
// let arr1 = arr.map((value) => value);
// console.log(arr1);

// 2
// let arr = [10, 20, 30, 40, 50];
// let arr1 = arr.map((value,index) => index);
// console.log(arr1);

// 3
// let arr = [10, 20, 30, 40, 50];
// let arr1 = arr.map((value,index,arr) => arr);
// console.log(arr1);

// 4
// let arr = [10, 20, 30, 40, 50];
// let arr1 = arr.map((value, index) => value * index);
// console.log(arr1);

// 5
// const arr1 = [{ fname: "Vansh", lname: "Patel" }];
// const arr2 = [{ ...arr1 }];
// let newArr = arr2.map((value) => (value.lname = "Panchal"));
// console.log(arr1);
// console.log(arr2);
// console.log(newArr);

// 6
// const names = ["vansh", "bhaumik", "meet", "jack"];
// const upperCase = names.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
// console.log(names);
// console.log(upperCase);

// 7
// let arr = [1, 2, 3, 4, 5];
// let square = arr.map((num =>num ** 2));
// console.log(square);

// 8
// let fahrenheitTemp = [56, 68, 32];
// let celsiusTemp = fahrenheitTemp.map((temp) => temp - (32 * 5) / 9);
// console.log(celsiusTemp);

// 9
// let arr = [1, 2, 3, 4, 5];
// let arr1 = arr.map((num, index, arr) => arr[arr.length - index - 1]);
// console.log(arr1);

// 10
// let words = ["Python", "JavaScript", "Java", "Reach"];
// let cutWords = words.map((word) => word.slice(0, 4));
// console.log(cutWords);

// 11
// let words = ["Python", "JavaScript", "Java", "Reach"];
// let countWords = words.map(word => word.length);
// console.log(countWords);

// 12
// let arr = [1, 5, 4, 94, 1, 9, 41, 1, 961, 65, 9, 94, 961, 9, 46, 16, 48, 6];
// let checkArr = arr.map((check) => check >= 50);
// console.log(checkArr);

// 13
// let users = [{ name: "Vansh" }, { age: 18 }, { uni: "SOU" }];
// let names = users.map((user) => user.name);
// console.log(names);

// 14
// let arr = [
//   { a: 10, b: 20, c: [{ a: 11, b: 21, d: ["p", "q"] }] },
//   { a: 12, b: 18, c: [{ a: 8, b: 25, d: [1, 2, "p"] }] },
//   { a: 16, b: 29, c: [{ a: 5, b: 10, d: ["q", "r", "s"] }] },
//   { a: 15, b: 20, c: [{ a: 11, b: 21, d: 5 }] },
// ];

// 15
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const flattenedArray = matrix.map((row) => [...row]);
// console.log(flattenedArray);
// console.log(matrix);

// 16
const products = [
  { name: "iPhone", category: "Electronics" },
  { name: "Chair", category: "Furniture" },
  { name: "Shirt", category: "Clothing" },
];
const productsByCategory = products.map((product) => ({
  //   ...product
  category: product.category.toUpperCase() + " " + product.name,
}));
console.log(productsByCategory);
