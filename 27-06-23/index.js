// function assign(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }
// let obj1 = { a: 15 };
// let obj2 = { b: 20 };

// let obj3 = assign(obj1, obj2);
// obj3.a = 20;
// console.log(obj1);
// console.log(obj3);

// ARRAY METHODS

// push()
// let toons = ["Doraemon", "Tom", "Jerry", "Mickey Mouse"];
let moreToons = ["Nobita", "Chhota Bheem"];
// toons.push("Nobita");
// toons.push("Nobita", "Chota Bheem", "Motu Patlu", "Shinchan");
// toons.push(10);
// toons.push(true);
// toons.push({ a: 15 });
// toons.push(...moreToons);
// console.log(toons);

// pop()
// let popped = toons.pop();
// console.log(toons);
// console.log(popped);

// shift()
// let shift = toons.shift();
// console.log(toons)
// console.log(shift)

// unshift()
// toons.unshift("Nobita");
// toons.unshift("Nobita", "Chota Bheem", "Motu Patlu", "Shinchan");
// toons.unshift(10);
// toons.unshift(true);
// toons.unshift({ a: 15 });
// toons.unshift(...moreToons);
// console.log(toons);

// forEach()

// map()
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = arr1.map((a) => a * 2);
// let arr2 = arr1.map((a) => a * 2 + 2 - 2 / 2);
// console.log(arr2);

// filter()
// let num = [21, 4, 2, 43, 12, 11, 1, 4, 8, 54, 7, 63];
// let num0 = num.filter((num1) => num1 >= 5 && num1 < 10);
// let num0 = num.filter((num1) => num1 <= 10);
// let num0 = num.filter((num1) => num1 <= 15 && num1 > 10);
// console.log(num0);

// let animals = ["Cat", "Cow", "Lion", "Tiger", "Dog", "Crocodile", "Dragon"];
// let domesticAnimals = animals.filter((a) => a.length > 4);
// console.log(domesticAnimals);

let countries = [
  { name: "USA", cities: 69 },
  { name: "India", cities: 29 },
  { name: "Australia", cities: 15 },
  { name: "NZ", cities: 9 },
  { name: "China", cities: 53 },
];
// let city = countries.filter((cityname) => cityname.cities > 15);
// let city = countries.filter((value, index) => {
//   console.log(value, index);
// return value + index;
// });
// console.log(city);

// reduce()

// join()
// let item = ["one", "two", "three"];
// console.log(item.join(" > "));
// console.log(item.join(" * "));
// console.log(item.join(" ^ "));
// console.log(item.join(" (lol) "));

// let abc = ["hi"];
// console.log(abc.join());

// reverse()
// console.log(toons.reverse());
// console.log(countries.reverse());
// let num = [1, 2, 3, 4, 5, 6, 7, 89];
// console.log(num.reverse());

// sort()
// let num = [65, 4, 46, 54, 32, 1, 7, 4, 65, 464, 3, 7, 1231, 7, 12, 1, 0, 74];
// let word = [
//   "hello",
//   "Vansh",
//   "Aayush",
//   "bhaumik",
//   "Dhruv",
//   "Bhoot",
//   57,
//   2,
//   0,
//   1,
// ];
// console.log(num.sort());
// console.log(word.sort());

// splice()
let toons = ["Doraemon", "Tom", "Jerry", "Mickey Mouse"];
// console.log(toons.splice(1, 0,"Oggy"));
// console.log(toons);

// find()
let num = [20, 30, 56, 89, 51];
// let num1 = num.find((a) => a > 50);
// console.log(num1);

// findIndex()
// let num1 = num.findIndex((a) => a > 50);
// let num1 = num.findIndex((a) => a < 50);
// console.log(num1);

// findLastIndex()
// let num1 = num.findLastIndex((a) => a > 50);
// console.log(num1);

// include
// console.log(toons.includes("Tom"));

//concat()
// let fname = "Vansh";
// let lname = " Panchal";
// let age = " 18";
// let full_name = fname.concat(lname, age);
// console.log(full_name);

// at()
// console.log(num.at(1));
// console.log(num.at(-1));

// some()
