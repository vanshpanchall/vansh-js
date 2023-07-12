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

// let date = Date();
// console.log(date);
// date = new Date();
// console.log(date);

// function transform(date, sep) {
//   let currDate = new Date();
//   date = date.toUpperCase();
//   let dateObj = {
//     "YYYY/MM/DD":
//       currDate.getFullYear() +
//       sep +
//       (currDate.getMonth() + 1) +
//       sep +
//       currDate.getDate(),
//     "YYYY/DD/MM":
//       currDate.getFullYear() +
//       sep +
//       currDate.getDate() +
//       sep +
//       (currDate.getMonth() + 1),
//     "DD/MM/YYYY":
//       currDate.getDate() +
//       sep +
//       (currDate.getMonth() + 1) +
//       sep +
//       currDate.getFullYear(),
//     "MM/DD/YYYY":
//       currDate.getMonth() +
//       1 +
//       sep +
//       currDate.getDate() +
//       sep +
//       currDate.getFullYear(),
//     "HH:MM:SS":
//       currDate.getHours() +
//       ":" +
//       currDate.getMinutes() +
//       ":" +
//       currDate.getSeconds(),
//   };
//   return dateObj[date];
// }
// console.log(transform("YYYY/MM/DD", "/"));
// console.log(transform("YYYY/DD/MM", "/"));
// console.log(transform("DD/MM/YYYY", "/"));
// console.log(transform("MM/DD/YYYY", "/"));
// console.log(transform("mm/dd/yyyy", "/"));
// console.log(transform(`HH:MM:SS`));

// let date = new Date();
// console.log(date.getHours());
// console.log(date.getUTCHours());

// GENERAL FUNCTION
// function genDateFn(type, add) {
//   let date = new Date();
//   type = type.toUpperCase();
//   switch (type) {
//     case "DD":
//       date.setDate(add);
//       break;
//     case "MM":
//       date.setMonth(add - 1);
//       break;
//     case "YYYY":
//       date.setFullYear(add);
//       break;
//     case "YY":
//       date.setFullYear(add);
//       break;
//     case "DAY":
//       date.setDate(add * 7);
//       break;
//     default:
//       break;
//   }
//   return date;
// }
// console.log(genDateFn("dd", 5));
// console.log(genDateFn("mm", 3));
// console.log(genDateFn("yyyy", 2005));
// console.log(genDateFn("yy", 2005));
// console.log(genDateFn("day", 5));

// let arr = [0, 1, 2, 3, 4, 5];
// let arr = "0, 1, 2, 3, 4, 5";
// console.log(Math.max(arr));

// console.log(Date.UTC(2005, 2, 16));

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

// PRACTICE QUESTIONS

// Write a JavaScript function to compare dates (i.e. greater than, less than or equal to)

// function compare_dates(d1, d2) {
//   if (d1 > d2) {
//     return "Date1 is greater than Date2";
//   } else if (d1 < d2) {
//     return "Date1 is less than Date2";
//   } else {
//     return "Date1 is equal to Date2";
//   }
// }
// console.log(
//   compare_dates(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:00"))
// );
// console.log(
//   compare_dates(new Date("11/14/2013 00:01"), new Date("11/14/2013 00:00"))
// );
// console.log(
//   compare_dates(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:01"))
// );

// Write a JavaScript function to add specified minutes to a Date object
// function add_minutes(date, min) {
//   return new Date(date.getTime() + min * 60000);
// }
// console.log(add_minutes(new Date(2014, 10, 2), 30).toString());

// Write a JavaScript function to test whether a date is a weekend

// function is_weekend(date) {
//   let currDate = new Date(date);
//   if (currDate.getDay() == 6 || currDate.getDay() == 0) {
//     return "Weekend";
//   }
//   return "Not a Weekend";
// }

// console.log(is_weekend("Nov 15, 2014"));
// console.log(is_weekend("22/02/3"));
// console.log(is_weekend("2005/03/19"));
// console.log(is_weekend("Nov 16, 2014"));
// console.log(is_weekend("Nov 17, 2014"));

//  Write a JavaScript function to get the difference between two dates in days

// function date_diff_indays(date1, date2) {
//   dt1 = new Date(date1);
//   dt2 = new Date(date2);
//   return (
//     (dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
//     (dt1.getFullYear(), dt1.getMonth(), dt1.getDate())
//   );
// }

// console.log(date_diff_indays("04/02/2014", "11/04/2014"));
// console.log(date_diff_indays("12/02/2014", "11/04/2014"));

// maybe wrong

// Write a JavaScript function to get the last day of a month

// function lastday(year, month) {
//   return new Date(year, month + 1, 0);
//   //   return new Date(year, month + 1, 0).getDate();
// }

// console.log(lastday(2014, 0));
// console.log(lastday(2014, 1));
// console.log(lastday(2014, 11));

//  Write a JavaScript function to calculate 'yesterday's day

// function yesterday(date) {
//   let currDate = new Date(date);
//   return new Date(currDate.setDate(currDate.getDate() - 1));
// }

// console.log(yesterday("Nov 15, 2014"));
// console.log(yesterday("Nov 16, 2015"));
// console.log(yesterday("Nov 17, 2016"));

// Write a JavaScript function that returns the number of minutes in hours and minutes

function timeConvert(mins) {}

console.log(timeConvert(200));
