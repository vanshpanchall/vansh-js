// let name = "Vansh Panchal";
// console.log(!typeof name === "object");
// console.log(!typeof name === "string");

// function sum(a, b, c) {
//   return a + b + c;
// }
// console.log(sum(...[1, 2, 3]));
// console.log(sum([...1, 2, 3]));
// console.log(sum([...[1, 2, 3]]));
// console.log(sum([1, 2, 3]));

// const a = { b: 10 };
// const arr = [a];
// console.log(arr);
// a.b = 15;
// console.log(arr);

// let arr = [1, 10, 2, 1000, 100, 20, 200];
// arr.sort();
// console.log(arr);

// let { name } = 'hi';
// console.log({name});

// MATH() OBJECT

// 1 Math.pi()
// console.log(Math.PI);

// 2 Math.abs()
// function diff(a, b) {
//   return Math.abs(a - b);
// }
// console.log(diff(15, 20));

// 3 Math.cbrt()
// console.log(Math.cbrt(5));
// console.log(Math.cbrt(2));

// 4 Math.ceil()
// console.log(Math.ceil(0.8));
// console.log(Math.ceil(1.1));

// 5 Math.floor()
// console.log(Math.floor(0.5));
// console.log(Math.floor(1.8));

// 6 Math.max()
// console.log(Math.max(1, 3, 2));
// console.log(Math.max(-1, -3, -2));
// console.log(Math.max(...[1, 2, 3, 4]));
// console.log(Math.max(-1, 8, -586, 8566, -3, -2));

// 7 Math.min()
// console.log(Math.min(1, 3, 2));
// console.log(Math.min(-1, -3, -2));
// console.log(Math.min(-1, 8, -586, 8566, -3, -2));

// 8 Math.pow()
// console.log(Math.pow(2, 2));
// console.log(Math.pow(2,-2));
// console.log(Math.pow(-22, -2));

// 9 Math.random()
// console.log(Math.random());

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// console.log(getRandomInt(5, 10));

// function getRandom(max) {
//   return Math.floor(Math.random() * max);
// }
// console.log(getRandom(8));

// 10 Math.round()
// console.log(Math.round(0.8));
// console.log(Math.round(0.5));
// console.log(Math.round(1.4));
// console.log(Math.round(1.9));

// 11 Math.sign()
// console.log(Math.sign(-1));
// console.log(Math.sign(-0));
// console.log(Math.sign(0));
// console.log(Math.sign(1));
// console.log(Math.sign(-21));
// console.log(Math.sign(-29));

// 12 Math.sqrt()
// console.log(Math.sqrt(5));
// console.log(Math.sqrt(2));

// 13 Math.trunc()
// console.log(Math.trunc(13.37));
// console.log(Math.trunc(42.84));
// console.log(Math.trunc(0.123));
// console.log(Math.trunc(-0.123));
// console.log(Math.trunc(-5.6546546465423));
// console.log(Math.trunc("0.22546"));

// DATE PRACTICE

// year , month , day , hour , second , minisecond.
// let newDate = new Date(2022, 6, 22, 12, 0, 0, 0);
// let newDate = new Date("3/16/2005");
// console.log(newDate);

// Write a JavaScript function to get the current date

// function curday(sep) {
//   date = new Date();
//   let dt = date.getDate();
//   let mm = date.getMonth()+1;
//   let yr = date.getFullYear();

//   return mm + sep + dt + sep + yr;
// };
// console.log(curday("/"));
// console.log(curday("-"));

// Write a JavaScript function to get the number of days in a month

// function getDaysInMonth(m, y) {
//     return new Date(y, m, 0).getDate();
// }
// console.log(getDaysInMonth(1, 2012));
// console.log(getDaysInMonth(2, 2012));
// console.log(getDaysInMonth(9, 2012));
// console.log(getDaysInMonth(12, 2012));

//  Write a JavaScript function to get the month name from a particular date

// function month_name(date) {
//   months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   return months[date.getMonth()];
// }
// console.log(month_name(new Date("03/16/2005")));
// console.log(month_name(new Date("11/11/2009")));
// console.log(month_name(new Date("11/13/2014")));

// Write a JavaScript function to compare dates (i.e. greater than, less than or equal to)

