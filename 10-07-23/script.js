// let date = new Date();
// console.log(date);

// let month = date.getMonth();
// console.log("Current Month is " + month);
// // in javascript months start from 0 to 11

// let seconds = date.getSeconds();
// console.log("Current Second is " + seconds);

// let minutes = date.getMinutes();
// console.log("Current Minute is " + minutes);

// let hours = date.getHours();
// console.log("Current Hour is " + hours);

// let day = date.getDay();
// console.log("Day is " + day);

// let newDate = date.getDate();
// console.log("Current Date is " + newDate);

// let year = date.getFullYear();
// console.log("Current Year is " + year);

// const customDate = new Date("3-16-2005"); //mm-dd-yy
// const customDate = new Date("3/16/5"); //mm-dd-yy
// const customDate = new Date("3/16/5 01:16:45"); //mm-dd-yy
// console.log(customDate);

// let months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// console.log(months[customDate.getMonth()]);

// let days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// console.log(days[customDate.getDay()]);

// const date1 = new Date("December 17, 1995 03:24:00");
// const date2 = new Date("12-17-1995 03:24:00");
// console.log(date1 === date2);
// console.log(date1 - date2);

// let date = new Date(1111000000000);
// console.log(date);

// ---------DATE METHODS---------

//FullYear()

// const firstDay = new Date("12/12/5 10:00:18");
// console.log(firstDay.getFullYear());

// let bday = new Date("03/16/23 01:00:56");
// bday.setFullYear(2005);
// console.log(bday);

// let date1 = new Date("12/31/23, 23:30:30 GMT+11:00");
// let date2 = new Date("12/31/23, 23:30:30 GMT-11:00");
// console.log(date1.getUTCFullYear());
// console.log(date2.getUTCFullYear());
// let date3 = new Date("12/31/23, 23:30:30");
// date3.setUTCFullYear(2020);
// console.log(date3);
// console.log(date3.toUTCString());

//Month()

// const firstDay = new Date("04/20/23 10:00:18");
// console.log(firstDay.getMonth()); // returns NaN is Invalid

// const firstDay = new Date("02/20/23 10:00:18");
// firstDay.setMonth(3);
// firstDay.setMonth(true);
// console.log(firstDay);
// console.log(firstDay.setMonth(4));

// let date1 = new Date("12/31/23, 23:30:30 GMT+11:00");
// let date2 = new Date("12/31/23, 23:30:30 GMT-11:00");
// console.log(date1.getUTCMonth());
// console.log(date2.getUTCMonth());

// let date3 = new Date("12/31/23, 23:30:30");
// date3.setUTCMonth(2);
// console.log(date3);
// console.log(date3.toUTCString());

// Indian Standard Time is 5 hours and 30 minutes ahead of Coordinated Universal Time

// let date3 = new Date("12/31/23, 23:30:30");
// date3.setUTCMonth(2);
// console.log(date3);

// Date()

// let date = new Date();
// console.log(date.getDate());

// date.setDate(21);
// console.log(date.toDateString());

// console.log(date.getUTCDate());

// date.setUTCDate(16);
// console.log(date.toDateString());

// let date = new Date();
// console.log(date);
// console.log(date.getUTCDate());

// Hours()

// let date = new Date();
// console.log(date.getHours());
// console.log(date.getUTCHours());

// date.setHours(4);
// console.log(date)

// date.setUTCHours(11);
// console.log(date);

// Minutes()

// let minutes = new Date();
// console.log(minutes.getMinutes());
// console.log(minutes.getUTCMinutes());

// minutes.setMinutes(35);
// console.log(minutes);

// minutes.setUTCMinutes(30);
// console.log(minutes);

// Seconds()

// let sec = new Date();
// console.log(sec.getSeconds());
// console.log(sec.getUTCSeconds());

// sec.setSeconds(16);
// console.log(sec);

// sec.setUTCSeconds(16);
// console.log(sec);

// Milliseconds()

// let mSec = new Date();
// console.log(mSec.getMilliseconds());
// console.log(mSec.getUTCMilliseconds());
// 0 to 999

// mSec.setMilliseconds(569);
// console.log(mSec.getMilliseconds());

// mSec.setUTCMilliseconds(569);
// console.log(mSec.getUTCMilliseconds());

// Day()

// let day = new Date();
// console.log(day.getDay());
// console.log(day.getUTCDay());

// toLocale()
// let date = new Date();
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());

// Now()
// let date = Date.now();
// console.log(date);

// parse()
// let date = Date.parse("04 Dec 1995 00:12:00 GMT");
// console.log(date);
