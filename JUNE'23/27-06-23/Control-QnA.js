// 1
//  var currentTime= new Date().getHours();
// if(currentTime<12){
//     console.log("Good Morning");
// }
// else if(currentTime<17){
//     console.log("Good Afternoon");
// }
// else if(currentTime<22){
//     console.log("Good evening") ;
// }
// else{
//     console.log("Good night") ;
// }

//  let today = new Date();
// if (today.getHours() >= 6 && today.getHours() < 12) {
//     console.log("Good Morning!");
// } else if (today.getHours() >= 12 && today.getHours() < 16) {
//     console.log("Good Afternoon!");
// } else if (today.getHours() >= 16 && today.getHours() < 19) {
//     console.log("Good Evening!");
// }else{
//     console.log("Good Night!");
// }
// let time = today.getHours() + ":" + today.getMinutes();
// console.log("Time is = "+time);

// 2
// let day = 7;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("None");
// }

// 3
// for (let i = 0; i <= 4; i++) {
//   let pattern = "";
//   for (let j = 0; j < 5; j++) {
//     pattern += "* ";
//   }
//   // pattern += "\n";
//   console.log(pattern);
// }

// 4
// for (let i = 1; i <= 5; i++) {
//   let pattern = "";
//   for (let j = 1; j <= i; j++) {
//     pattern += "* ";
//   }
//   console.log(pattern);
// }
// pattern += "\n";

// 5
// for (let i = 5; i > 0; i--) {
//   let pattern = "";
//   for (let j = i; j > 0; j--) {
//     pattern += "* ";
//   }
//   console.log(pattern);
// }
// pattern += "\n";

// for (i = 1; i < 6; i++){
//   if (i == 2) {
//     break;
//   }
//   console.log(i)
// }

// for (i = 1; i < 6; i++) {
//   if (i == 2) {
//     continue;
//   }
//   console.log(i);
// }

// 6
// function getNumberOfDays(num) {
//   if (
//     num == 1 ||
//     num == 3 ||
//     num == 5 ||
//     num == 7 ||
//     num == 8 ||
//     num == 10 ||
//     num == 12
//   ) {
//     return 31;
//   } else if (num == 4 || num == 6 || num == 9 || num == 11) {
//     return 30;
//   } else if (num == 2) {
//     return 28;
//   } else {
//     return "Invalid Month!";
//   }
// }
// console.log("Number of Days is " + getNumberOfDays(12));

// 7
// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 8
// function printOddNumbers(num1, num2) {
//   for (let i = num1; i <= num2; i++) {
//     if (i % 2 == 1) {
//       console.log(i);
//     }
//   }
// }

// printOddNumbers(1, 10);

// 9
// function printEvenNumbers(num1, num2) {
//   for (let i = num1; i <= num2; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
// }
// printEvenNumbers(1, 10);

// 10

// a
// const names = [
//   { first_name: "Asndnm", last_name: "L demo" },
//   { first_name: "Qpweui", last_name: "Alxezx" },
//   { first_name: "Pqwern", last_name: "Ruse" },
//   { first_name: "Wiruyn", last_name: "Ruby" },
//   { first_name: "Erpso", last_name: "Loal" },
//   { first_name: "Demors", last_name: "Poet" },
//   { first_name: "Aleos", last_name: "Lkeu" },
// ];

// for(let i=0; i<names.length; i++){
//     names[i].full_name = names[i].first_name + ' ' + names[i].last_name;
// }
// console.log(names);

// for(i=0; i<names.length; i++){
//    console.log(names[i]);
// }

// b
// function calculate(operation, num1, num2) {
//   switch (operation) {
//     case "+":
//       console.log(num1 + num2);
//       break;
//     case "-":
//       console.log(num1 - num2);
//       break;
//     case "*":
//       console.log(num1 * num2);
//       break;
//     case "/":
//       console.log(num1 / num2);
//       break;
//     case "%":
//       console.log(num1 % num2);
//       break;
//     default:
//       console.log("Invalid input");
//   }
// }
// calculate("+", 5, 6);
// calculate("-", 10, 6);
// calculate("*", 3, 9);
// calculate("/", 6, 8);
// calculate("%", 7, 3);
// calculate();

// 11
// function getGrade(totalMarks) {
//   if (totalMarks >= 90) {
//     return "Grade A";
//   } else if (totalMarks >= 75 && totalMarks < 90) {
//     return "Grade B";
//   } else if (totalMarks >= 60 && totalMarks < 75) {
//     return "Grade C";
//   } else if (totalMarks >= 45 && totalMarks < 60) {
//     return "Grade D";
//   } else {
//     return "Fail";
//   }
// }
// console.log(getGrade(90));

// 12
// DOUBT

// 13
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("Vansh Panchal"));

// function reverse_string(pass_string) {
//   let reverseString = "";
//   for (let i = pass_string.length - 1; i >= 0; i--) {
//     reverseString += pass_string[i];
//   }
//   console.log(reverseString);
// }
// reverse_string("Hello");

// 14
// function printProps(obj){
//     for(let keys in obj){
//          console.log(keys ,obj[keys]);
//     }
// }
// const obj1 = { a: 1, b: 2, c: 3 };
// printProps(obj1);
// printProps();

// function printProps(object) {
//   return Object.entries(object);
// }
// let obj = { name: "Vansh", age: "18" };
// printProps(obj);
// console.log(obj);

// 15
// function isStringContainsNum(pass_string) {
//   for (let i = 0; i < pass_string.length; i++) {
//     if (pass_string[i] >= 0 && pass_string[i] <= 9) {
//       return true;
//     }
//   }
//   return false;
// }
// let one = isStringContainsNum("assad"); // false
// let two = isStringContainsNum("agfh1"); // true
// let three = isStringContainsNum("ag1sdf"); // true
// let four = isStringContainsNum("111"); // true
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);

// 16
// function checkStr(str) {
//   function isStringContainsNum(str) {
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] >= 0 && str[i] <= 9) {
//         return true;
//       }
//     }
//     return false;
//   }

//   if (str == Number(str)) {
//     return "String is Number";
//   } else if (isStringContainsNum(str)) {
//     return "String containes Number";
//   } else {
//     return "String does not containes a numnber";
//   }
// }
// console.log(checkStr("1212"));
// console.log(checkStr("sadfsd"));
// console.log(checkStr("sad2q"));

// 17
// function isStringContainsNum(pass_string) {
//   for (let i = 0; i < pass_string.length; i++) {
//     if (pass_string[i] >= 0 && pass_string[i] <= 9) {
//       return i;
//     }
//   }
//   return false;
// }
// let one = isStringContainsNum("assad"); // false
// let two = isStringContainsNum("agfh1"); // true
// let three = isStringContainsNum("ag1sdf"); // true
// let four = isStringContainsNum("111"); // true
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);

// 18
// function firstCapital(str) {
//   for (i = 0; i < str.length; i++) {
//     if (str[i] >= "A" && str[i] <= "Z") {
//       console.log(i);
//       break;
//     }
//   }
// }
// firstCapital("vaNsh");

// 19
// function printOdd(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (i % 2 != 0) {
//       console.log(i);
//     }
//   }
// }
// printOdd(1, 10);

// 20
function printOdd(start, end) {
  let count = 0;
  for (i = start; i <= end; i++) {
    if (i % 2 != 0) {
      console.log(i);
      count++;
      if (count == 10) {
        break;
      }
    }
  }
}
printOdd(1, 50);
