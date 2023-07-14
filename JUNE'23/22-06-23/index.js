// console.log("4" * 2);
// const a ={b:10};
// const arr = [a];
// console.log(arr);
// a.b = 15;
// console.log(arr);

// function square(num) {
// return num * num;
//   return arguments.length;
// }
// square();
// console.log(arguments.length);
// console.log(square(2,5));
// console.log(square(10));

// let obj1 = {
//   fname: "Vansh",
//   lname: "Panchal",
//   age: 16,
//   hobbies: {
//     first: "Reading",
//     second: "Travelling",
//   },
//   edu: "Pursuing Bachelors",
//   branch: "BTech",
//   uni: function () {
//     return `${this.edu} from Silver Oak University`;
//   },
// };
// console.log(obj1);
// console.log(obj1.fname);
// console.log(obj1.lname);
// console.log(obj1.lname[0]);
// console.log(obj1.age);
// console.log(obj1.hobbies.first);
// // console.log(obj1.hobbies.second);
// // console.log(obj1.hobbies["second"]);
// console.log(obj1.uni());

// declaring objects

// literal method
// let user1 = {
//   fname: "Vansh",
//   age: 18,
// };

// // Object.create method
// let user2 = Object.create(user1);
// console.log(user2.fname);

//spread operator
// let p1 = {
//   fname: "Vansh",
//   age: 18,
// };

// let p2 = { ...p1 };
// p2.age = 19;

// console.log(p1);
// console.log(p2);

// console.log([..."hello"]); //it will spread the value

//accessing the objects

//dot notation
// let obj1 = {
//   book: "Atomic Habits",
// };
// console.log(obj1.book);

// // bracket notation
// console.log(obj1["book"]);

// // variable as property name
// let bookName = "book";
// console.log(obj1[bookName]);

// //object destruction
// let { book } = obj1;
// console.log(book);

//nested object
// let student = {
//   fname: "Vansh Panchal",
//   uni: "SOU",
//   course: {
//     course1: {
//       branch: "Btech",
//       bname: "CE",
//     },
//     course2: "BCA",
//   },
// };

// console.log(student.course.course1.bname);
// console.log(student.bname);

// destructuring operator
// let car = {
//   cname: "Supra",
//   engine: "E90",
// };

// let { cname, engine } = car;
// console.log(cname, engine);

// object methods

let car = {
  cname: "Supra",
  engine: "E90",
};
let car2 = {
  cname: "Dodge",
  engine: "E95",
};
let car3 = Object.assign(car, car2);

// //object keys
// console.log(Object.keys(car));

// //object values
// console.log(Object.values(car));

//object.is
// console.log(Object.is(1, "2"));

//object.entries
// console.log(Object.entries(car));

//object.assign
console.log(car3);

let obj1 = { a: 1 };
let obj2 = { b: 2 };
let obj3 = Object.assign(obj1, obj2);
console.log(obj3);
