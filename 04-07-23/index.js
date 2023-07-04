// REDUCE

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.reduce((acc, curr, index, array) => acc);
// console.log(newArr);

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.reduce((acc, curr, index, array) => {
//     console.log(acc, curr);
//     return curr;
// },5);
// console.log(newArr);

let details = [
  {
    name: "Vansh",
    age: 18,
  },
  {
    name: "Bhaumik",
    age: 17,
  },
  {
    name: "Sachin",
    age: 19,
  },
];

let newDetails = details.reduce((acc, curr) => {
  if (curr.age > acc.age) {
    return curr.age;
  }
  return acc;
});
console.log(newDetails);
