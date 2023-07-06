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

// let filterChocolate = mainDonut.filter((value) =>
//   value.topping.find((value) => value.type == "Chocolate")
// );
// console.log(filterChocolate);

// 2
// const batter_topping = mainDonut.filter(
//   (donut) =>
//     donut.batters.batter.some((batter) => batter.type === "Regular") &&
//     donut.topping.some((topping) => topping.type === "Chocolate")
// );
// console.log(batter_topping);

// let choAndRegular = mainDonut.filter(
//   (value) =>
//     value.batters.batter.find((value) => (value.type = "Regular")) &&
//     value.topping.find((value) => value.type == "Chocolate")
// );
// console.log(choAndRegular);

// 3
// const resultOfTopping = mainDonut.filter(
//   (donut) =>
//     donut.batters.batter.some((batter) => batter.type === "Regular") &&
//     donut.topping.some((topping) => topping.type === "Chocolate")
// );
// console.log(result);

// let chocoAndSugar = mainDonut.filter(value=>value.topping.find(value=>value.type=="Chocolate")&&value.topping.find(value=>value.type=="Sugar"));
// console.log(chocoAndSugar);

// 4
// function filter_ppu() {
//   let filterppu = mainDonut.filter((value) => value.ppu > 0.5);
//   console.log(filterppu);
// }
// filter_ppu();

// function filter_ppu() {
//   let filterppu = mainDonut.find((value) => value.ppu > 0.5);
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
// function printAllBatters(array) {
//   let a = mainDonut.map((value) => value.batters);
//   return a;
// }
// console.log(printAllBatters(mainDonut));

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
//   console.log(typeof c);
// }
// addNumber(str);

// function changeWords(str) {
//   let words = str.split(" ");
//   let a = words.map((word) => {
//     if (word.length >= 4) {
//       return word.at(0) + (word.length - 2) + word.at(-1);
//     }
//     return word;
//   });
//   let b = a.join(" ");
//   return b;
// }
// console.log(
//   changeWords("Every developer likes to mix kubernetes and javascript")
// );

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
//   { name: "Product 9", price: 70, category: "Bag" },
// ];

// function mainArray(arrName) {
//   let emptyObj = {};
//   let clothes = arrName.filter((value) => value.category == "Clothes");
//   let electronics = arrName.filter((value) => value.category == "Electronics");
//   let a = clothes.length;
//   let b = electronics.length;
//   emptyObj.clothes = a;
//   emptyObj.electronics = b;
//   return emptyObj;
// }
// let secObj = mainArray(products);
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
// const employees = [
//   { name: "John", salary: 50000, department: "IT" },
//   { name: "Jane", salary: 60000, department: "HR" },
//   { name: "Bob", salary: 55000, department: "IT" },
//   { name: "Sophie", salary: 75000, department: "HR" },
//   { name: "Mike", salary: 65000, department: "IT" },
//   { name: "Emily", salary: 80000, department: "HR" },
//   { name: "David", salary: 70000, department: "IT" },
//   { name: "David", salary: 70000, department: "IT" },
//   { name: "Dravid", salary: 75000, department: "ITI" },
// ];

// function avgSalary(arr) {
//   let mix = {};
//   let employees = arr.map((emp) => emp.department);
//   employees.forEach((department) => {
//     let deptName = arr.filter((value) => value.department == department);
//     let sum = 0;
//     deptName.forEach((value) => (sum += value.salary));
//     mix[ " Average Salary of "+ department] = sum / deptName.length;
//   });
//   return mix;
// }
// console.log(avgSalary(employees));

// first try
// function averageSalary(employees) {
//     let a = 0;
//     let b = 0;
//     let c = 0;
//     let d = 0;
//     for (let i = 0; i < employees.length; i++) {
//         if (employees[i].department == "HR") {
//             a += employees[i].salary;
//             b++;
//         } else if (employees[i].department == "IT") {
//             c +=employees[i].salary;
//             d++;
//         }
//     }
//     return { IT: a / b, HR: c / d }
// }
// let avgObject = averageSalary(employees);
// console.log(avgObject);

// function averageSalary(employees) {
//     let obj = {};
//     let HR = [];
//     let IT = [];
//     for (let i = 0; i < employees.length; i++) {
//         if (employees[i].department == "HR") {
//             HR.push(employees[i].salary);
//         } else if (employees[i].department == "IT") {
//             IT.push(employees[i].salary);
//         }
//     }
//     obj = { HR, IT }
//     return obj;
// }
// let aveObject = averageSalary(employees);
// console.log(aveObject);

// second try

// function avgSalary(arr) {
//   let mix = {};
//   let employees = arr.map((emp) => emp.department);
//   employees.forEach((department) => {
//     let deptName = arr.filter((value) => value.department == department);
//     let salaries = deptName.map((value) => value.salary);
//     mix[department] = salaries;
//   });
//   return mix;
// }
// console.log(avgSalary(employees));

// 14
// let names = [
//   "Jeel",
//   "Prakhar",
//   "Bhakti",
//   "Vansh",
//   "Meghana",
//   "Bhuamik",
//   "Pujan",
//   "Rudra",
//   "Sachin",
//   "Dhruval",
// ];
// function groupAlphabetically(arr) {
//   let mix = {};
//   let firstChar = arr.map((word) => word.charAt(0).toUpperCase());
//   firstChar.forEach((value) => {
//     let charName = arr.filter((word) => word.charAt(0) === value);
//     mix[value] = charName;
//     // mix.value = charName;
//   });
//   return mix;
// }
// console.log(groupAlphabetically(names));

// 15
// Without Depth
// let nestedArr = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]];
// let newArr = [];
// function flatArr(arr) {
//     arr.map(value => {
//         if (Array.isArray(value)) {
//             flatArr(value);
//         } else {
//             newArr.push(value);
//         }
//     });
//     return newArr;
// }
// console.log(flatArr(nestedArr));

// With Depth
// let nestedArr = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]];
// let newArr = [];
// function flatArr(arr, depth = 1) {
//   arr.map((value) => {
//     if (Array.isArray(value) && depth > 0) {
//       flatArr(value, depth - 1);
//     } else {
//       newArr.push(value);
//     }
//   });
//   return newArr;
// }
// // console.log(nestedArr.flat(8));
// console.log(flatArr(nestedArr, 10));

// 16
// let arr1 = [1, 2, 3, 4, 5];
// function myFilter(arr) {
//   let emptyArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 2) {
//       emptyArr.push(arr[i]);
//     }
//   }
//   return emptyArr;
// }
// console.log(myFilter(arr1))
// let filtered = myFilter(arr1);
// console.log(filtered);

// 17
// let arr = [1, 2, 3, 4, 5];
// var numbers = [1, 2, 3, 4, 5];
// function myMap(array) {
//   var newArr = [];
//   for (var i = 0; i < array.length; i++) {
//     newArr.push(numbers[i]);
//   }

//   return newArr;
// }
// console.log(myMap(numbers));

// var doubled = myMap(numbers, function (num) {
//   return num * 2;
// });

// console.log(doubled);

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

// function groupAlphabetically(arr) {
//   let mix = {};
//   let firstChar = arr.map((word) => word.name.charAt(0).toUpperCase());
//   firstChar.forEach((value) => {
//     let charName = arr.filter(
//       (word) => word.name.charAt(0).toUpperCase() === value
//     );
//     mix[value] = charName;
//   });
//   return mix;
// }
// console.log(groupAlphabetically(input));

// function groupByDepartment(arr){
//     let mix = {};
//     let employees = arr.map((employee) => employee.department);
//     employees.forEach((department) => {
//         let deptName = arr.filter((value) => value.department === department);
//         mix[department] = deptName;
//     });
//     return mix;
// };
// console.log(groupByDepartment(input));

// 19
// let arr1 = [{ a: 34 }, { a: 45 }, { a: 12 }, { a: 5 }, { a: 78 }];
// let arr2 = arr1.map((item) => item);
// arr2[2].b = 45;
// console.log(arr1);
// console.log(arr2); // new property will be added

// 20
// let arr1 = [{ a: 34 }, { a: 45 }, { a: 12 }, { a: 5 }, { a: 78 }];
// let arr2 = arr1.map((item) => item.a * 2);
// console.log(arr1);
// console.log(arr2); // it will give the doubled value of a

// 21
// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.reduce((a, c) => a + c).map((item) => item);
// console.log(arr2); // it will give error because reduce returns total

// 22
// const example = ({ a, b, c }) => {
//   console.log(a, b, c);
// };
// example(0, 1, 2);

// 23
// let arr = [1, 2, 3, 4, 5];
// let nerArr = arr.reduce((acc, curr) => acc + curr ** 2);
// console.log(nerArr);

// 24
const students = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 18, grade: "B" },
  { name: "Charlie", age: 19, grade: "A" },
  { name: "David", age: 20, grade: "C" },
];
// let sortAge = students.sort((a, c) => a.age - c.age);
// console.log(sortAge);

// let sortGrade = students.sort((a, c) =>
// if (a.grade < c.grade) {
//   return -1;
// } else if (a.grade > c.grade) {
//   return 1;
// } else {
//   return 0;
// }

// a.grade < c.grade ? -1 : 0;
// a.grade > c.grade ? 1 : 0
// );
// console.log(sortGrade);

// let sortName = students.sort((a, c) => a.name - c.name);
// console.log(sortName);

// let avgAge = students.reduce((acc, curr) => acc / 2 + curr.age / 2);
// console.log(avgAge);

// function avgArr(arr) {
//   let tempLen = 0;
//   let sum = arr.reduce((acc, curr) => {
//     tempLen++;
//     return acc + curr.age;
//   }, 0);
//   return sum / tempLen;
// }
// console.log(avgArr(students));

// let sumAges = students.reduce((acc, curr) => acc + curr.age,0);
// console.log(sumAges);

// 25
// const nestedArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// const flatArr = nestedArray.reduce((acc, curr) => {
//   return acc.concat(curr);
//   // return [acc + "," + curr];
// }, []);
// console.log(flatArr);

// 26
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let emptyArr = [];
// let evenNum = numbers.reduce((acc, curr) => {
//   if (curr % 2 == 0) {
//     emptyArr.push(curr * curr);
//   }
//   return emptyArr;
// });
// console.log(evenNum);

// 27
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// let filteredNum = numbers.reduce((acc, curr) => {
//   if (!acc.includes(curr)) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);
// console.log(filteredNum);

// 28
// const words = ["apple", "banana", "orange"];
// let findA = words.find((value) => value.includes("a"));
// console.log(findA);

// 29
// const numbers = [2, 4, 3, 6, 8, 9, 10];
// let findOdd = numbers.findIndex((value) => {
//   return value % 2 !== 0;
//   // return index;
// });
// console.log(findOdd);

// 30
// function factorial(num) {
//   let result = 1;
//   for (let i = 2; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(factorial(2));

// function factorial(num) {
//   if (num == 0 || num == 1) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }
// console.log(factorial(6));

// 31
// const people = [
//   { name: "Alice", age: 18 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 19 },
//   { name: "David", age: 21 },
// ];
// let findPerson = people.findIndex(
//   (value) => value.name.includes("A") && value.age < 20
// );
// console.log(findPerson);

// 32
// function fun_name(arrayOfArray, array) {
//   let a = arrayOfArray.some((val) =>
//     val.sort().every((ele, i) => ele == array.sort()[i])
//   );
//   console.log(a);
// }
// fun_name(
//   [
//     [1, 2],
//     [34, 67],
//     [67, 77],
//     [88, 90],
//   ],
//   [1, 2]
// );
// fun_name(
//   [
//     [1, 2],
//     [34, 67],
//     [67, 77],
//     [88, 90],
//   ],
//   [2, 1]
// );
// fun_name(
//   [
//     [1, 2],
//     [34, 67],
//     [67, 77],
//     [88, 90],
//   ],
//   [22, 15]
// );
// fun_name(
//   [
//     [1, 2],
//     [34, 67],
//     [67, 77],
//     [22, 90, 15],
//     [88, 90],
//   ],
//   [22, 15, 90]
// );

// 33
// function fun_name(arrayOfArray, array) {
//   let a = arrayOfArray.some((value) => value.every((ele, i) => ele == array[i]));
// console.log(a)
// };

// fun_name(
//   [
//     [1, 2],
//     [34, 67],
//     [67, 77],
//     [88, 90],
//   ],
//   [1, 2]
// );
// fun_name(
//   [
//     [1, 2],
//     [34, 67],
//     [67, 77],
//     [88, 90],
//   ],
//   [2, 1]
// );
// fun_name(
//   [
//     [1, 2],
//     [34, 67],
//     [67, 77],
//     [88, 90],
//   ],
//   [22, 15]
// );
// fun_name(
//   [
//     [1, 2],
//     [34, 67],
//     [67, 77],
//     [22, 90, 15],
//     [88, 90],
//   ],
//   [22, 15, 90]
// );

// 34

// 35

// 36
// function returnSumInteger(arr, sum) {
//   let a = arr.reduce((acc, curr) => {
//     for (let i = 0; i < arr.length; i++) {
//       if (curr + arr[i] === sum) {
//         acc.push([curr, arr[i]]);
//       }
//     }
//     return acc;
//   }, []);
//   return a[2];
// }
// console.log(returnSumInteger([10, 20, 10, 40, 50, 60, 70], 50));

// 37
// let arr = [NaN, 0, 15, false, -22, "", undefined, 47, null];
// let onlyNum = arr.filter(
//   (value) => typeof value == "number" && value !== 0 && !isNaN(value)
// );
// console.log(onlyNum);

// 38

// 39
// function remove_array_element(a, b) {
//   return a.filter(val => val != b);
// }
// console.log(remove_array_element([2, 5, 9, 6], 5));

// 40
function contains(a, b) {
  return a.includes(b);
}
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
console.log(contains(arr, 10));