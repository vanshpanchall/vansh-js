// 1
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],10;
// let evenNum = arr.filter((num => num % 2 == 0));
// console.log(evenNum);

// 2
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
// let oddNum = arr.filter((num) => num % 2 !== 0);
// console.log(oddNum);

// 3
// const words = ["apple", "banana", "kiwi", "mango", "orange"];
// const longWords = words.filter((word) => word.length > 5);
// console.log(longWords);

// 4
// const cars = [
//   { make: "Toyota", model: "Camry", year: 2020 },
//   { make: "Honda", model: "Civic", year: 2018 },
//   { make: "Ford", model: "Fusion", year: 2019 },
// ];
// const toyotas = cars.filter((car) => car.make === "Toyota");
// console.log(toyotas);

// 5
// const numbers = [5, -2, 10, -6, 3, -9, 0];
// const positiveNumbers = numbers.filter((num) => num > 0);
// console.log(positiveNumbers);

// 6
// const sentence = ["HeLLo WorLD", "HII"];
// const uppercaseLetters = sentence.filter((letter) => letter === letter.toUpperCase());
// console.log(uppercaseLetters);

// 7
// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// const primes = numbers.filter((num) => {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// });
// console.log(primes);

// 8
// const values = [0, "apple", "", true, false, 10, undefined, NaN];
// const printValues = values.filter(Boolean);
// console.log(printValues);

// 9
// const words = ["apple", "banana", "kiwi", "pear", "orange",'blueberry'];
// const filteredWords = words.filter((word) => word.startsWith("b"));
// console.log(filteredWords);

// 10
// const products = [
//   { name: "apple", category: "fruit" },
//   { name: "banana", category: "fruit" },
//   { name: "desktop", category: "electronics" },
// ];
// const allowedCategories = ["fruit", "vegetable"];
// const filteredProducts = products.filter((product) =>
//   allowedCategories.includes(product.category)
// );
// console.log(filteredProducts);

// 11
// const products = [
//   { name: "apple", details: { category: "fruit", origin: "USA" } },
//   { name: "banana", details: { category: "fruit", origin: "Brazil" } },
//   { name: "desktop", details: { category: "electronics", origin: "China" } },
// ];
// const brazilianFruits = products.filter(
//   (product) =>
//     product.details.origin === "Brazil" && product.details.category === "fruit"
// );
// console.log(brazilianFruits);

// 12
