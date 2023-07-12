// function abcd() {
//   return () => {
//     return "15";
//   };
// }
// let ab = abcd();
// console.log(ab);
// console.log(ab());

// function curday(sep) {
//   date = new Date();
//   let dt = date.getDate();
//   let mm = date.getMonth() + 1;
//   let yr = date.getFullYear();

//   return yr + sep + mm + sep + dt;
// }
// console.log(curday("/"));
// console.log(curday("-"));

// let arr = [0, 1, 2, 3, 4, 5];
// arr.reduce((a) => a) || arr.map((i) => i * 3);
// let newArr = arr.reduce((a) => a) || arr.map((i) => i * 3);
// console.log(newArr);
// console.log(arr);

// function adddays(year, month, day) {
//   var result = new Date();
//   if (!year) {
//     result.getFullYear();
//   } else {
//     result.setFullYear(result.getFullYear() + year);
//   }
//   if (!month) {
//     result.getMonth();
//   } else {
//     result.setMonth(result.getMonth() + month);
//   }
//   if (!day) {
//     result.getDate();
//   } else {
//     result.setDate(result.getDate() + day);
//   }

//   return result.toLocaleString();
// }
// console.log(adddays(7, 3, 2));

// JS Number Object

//Number
// console.log(Number("3987"));
// console.log(Number(null));
// console.log(Number(NaN));

// Number.isFinite()
// method returns true if the value passed is a finite number, otherwise false
// console.log(Number.isFinite(5));
// console.log(Number.isFinite(5 / 10));
// console.log(Number.isFinite(10 / 5));
// console.log(Number.isFinite(null / null));
// console.log(Number.isFinite(null / undefined));
// console.log(Number.isFinite(NaN / NaN));
// console.log(Number.isFinite(Number / Number));
// console.log(Number.isFinite(88 / 0));
// console.log(Number.isFinite('5df' / "98"));
// console.log(Number.isFinite(Infinity / "98"));

//Number.isInteger()
// - checks whether given argument is an integer or not and return boolean result
// console.log(Number.isInteger(5));
// console.log(Number.isInteger(501.56));
// console.log(Number.isInteger(NaN));
// console.log(Number.isInteger(false));
// console.log(Number.isInteger(false));
// console.log(Number("123abc"));
// console.log(Number(null));
// console.log(Number.parseInt("123abc"));
// console.log(Number.parseInt(null));

// Number.isNaN()
// check for Not-A-Number (NaN), it will be returned as True when input
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(5));
// console.log(Number.isNaN("58"));
// console.log(Number.isNaN("xyx"));
// console.log(Number.isNaN(null));
// console.log(Number.isNaN("nu54"));
// console.log(Number.isNaN(54));

// Number.parseFloat()
// parse string to float using parseFloat(), which converts any numeric strings into floating point numbers.
// console.log(Number("0.004hkih"));
// console.log(Number.parseFloat("5.354546"));
// console.log(Number.parseFloat("0.004"));
// console.log(Number.parseFloat("0.004hkih"));
// console.log(typeof Number.parseFloat('4564.6354wds'));

// Number.parseInt()
// console.log(Number.parseInt("54"));
// console.log(Number.parseInt("54.6546"));
// console.log(Number.parseInt("0.004"));
// console.log(Number.parseInt("5.004gregewr"));
// console.log(Number.parseInt("5 37 93"));
// console.log(Number.parseInt(NaN));

// Number.toFixed();
// let num = 157.6584465;
// console.log(num.toFixed(4));
// console.log(num.toFixed(2));
// console.log(typeof num.toFixed(2));

// Number.toPrecision();
// let num = 123.1536556;
// console.log(num.toPrecision(5));
// num = 1.354;
// console.log(num.toPrecision(2));
// console.log(typeof num.toPrecision(2));

// console.log(num.toString());

// console.log(typeof num.toString());

// console.log(num.valueOf(2));

// console.log(typeof num.valueOf(2));

