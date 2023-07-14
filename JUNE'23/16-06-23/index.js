// DATA TYPES

// Undefined
let und;
und = undefined;
console.log(und);

// Null
let age = null;
console.log(age);

//Boolean
let num1 = true;
// num1 = 10;
console.log(num1);

let num2 = false;
// num2 = 15;
console.log(num2);

//Number
let number1 = 121;
let number2 = 0.22;
console.log(number1);
console.log(number2);

//String
let Str = '"Hey there" How are you!';
console.log("This is String" + " " + Str);

// Object
let name = {
  fname: "Vansh",
  lname: "Panchal",
  age: {
    age: 18,
  },
  clg: {
    uni: "Silver Oak University",
    course: [(BTech = ["CE", "IT"]), "BCA", "Law"],
  },
};
console.log(
  name.fname +
    " " +
    name.lname +
    " " +
    "My Age is" +
    " " +
    name.age.age +
    " " +
    name.clg.uni
);
console.log(name.clg.course[0][0]);

// Array
let arr = ["Hey", "This ia an Array"];
console.log(arr);
console.log(arr[1]);

// pass by value
let num = 10;
let num0 = num + 5;

console.log(num);
console.log(num0);

// pass by reference
let obj = {
  id: "vansh",
  pw: 12345,
};

let obj0 = obj;
obj0.id = "bhaumik";

console.log(obj);
console.log(obj0);
