//STRINGS

//using single inverted commas
// let str = "Hello there";

//using double inverted commas
let str = "Hello there!";

//using backtick
let str1 = ` How are you?`;

// console.log(str, str1;

//string length
// console.log(str.length);

//accessing characters
// console.log(str[0]);

//concatenating the strings
// console.log(str + " " + str1);

//converting values to strings

//string() constructor
// let num = 45;
// let numStr = String(num);
// console.log(typeof numStr);

// //toString() method
// let numtoStr = num.toString();
// console.log(typeof numtoStr);

// //string concatenation
// let concNum = "" + num;
// console.log(typeof concNum);

//string comparison

// console.log("hi" == "hi");
// console.log("hi" === "hi");
// console.log("hi" != "hii");
// console.log("hi" !== "hii");
// console.log("a" > "b");
// console.log("a" >= "b");
// console.log("a" < "b");
// console.log("a" < 1);
// console.log("a" <= "b");

//string methods

let smtg = "Hello there! My name is Vansh!";

//string.at()
console.log(smtg.at(-6));

//string.charAt()
console.log(smtg.charAt(0));
// console.log(smtg.charAt(-1)); //can't add negative value

//string.charCodeAt()
console.log(smtg.charCodeAt(0));

//concat
let newStr = str.concat(str1);
console.log(newStr);

//String.endsWith()
console.log(smtg.endsWith("Vansh!"));

//String.startsWith()
console.log(smtg.startsWith("Hello"));

//includes
console.log(smtg.includes("My"));

// index.of
console.log(smtg.indexOf("h"));

//lastindexof()
console.log(smtg.lastIndexOf("h"));

//padStart
console.log(smtg.padStart(35, "."));

//padEnd
console.log(smtg.padEnd(35, "."));

//replace
console.log(smtg.replace("Vansh", "Bhaumik"));

//replaceAll
console.log(smtg.replaceAll("!", "."));

//search
console.log(smtg.search("Vansh"));

//slice
console.log(smtg.slice(-6, -1));

//split
console.log(smtg.split("there!"));

//substring
console.log(smtg.substring(24, 30));

//toUpperCase
console.log(smtg.toLowerCase());
console.log(smtg.slice(-6, -1).toLowerCase());

//toLowerCase
console.log(smtg.toUpperCase());
console.log(smtg.slice(-6, -1).toUpperCase());

let whitespace = "     Hii!     ";
console.log(whitespace);
//trim
console.log(whitespace.trim());

// trimEnd, trimStart
console.log(whitespace.trimEnd());
console.log(whitespace.trimStart());

// object inside the function
// function greet() {
//   let obj1 = {
//     a: 10,
//     b: 20,
//   };
//   return obj1;
// }
// console.log(greet());

// let a = "hello";
// let b = a.slice(-2, -1);
// console.log(b);

// let abc = { a: 10, b: 15 };
// var a = 15;
// console.log(a);
// let { a: d, b } = abc;
// console.log(a);

// let obj1 = {
//   a: 10,
//   b: 20,
//   c: {
//     d: 30,
//     e: {
//       f: 40,
//       g: 50,
//     },
//   },
// };
// console.log(obj1);
