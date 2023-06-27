// 1

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
// let pattern = "";
// for (let i = 0; i <= 4; i++) {
//   for (let j = 0; j < 5; j++) {
//     pattern += "* ";
//   }
//   pattern += "\n";
// }
// console.log(pattern);

// 4
// let pattern = "";
// for (let i = 0; i <= 5; i++) {
//   for (let j = 0; j < i; j++) {
//     pattern += "* ";
//   }
//   pattern += "\n";
// }
// console.log(pattern);

// 5
// let pattern = "";
// for (let i = 5; i >= 0; i--) {
//   for (let j = i; j > 0; j--) {
//     pattern += "* ";
//   }
//   pattern += "\n";
// }
// console.log(pattern);

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
function printEvenNumbers(num1, num2) {
  for (let i = num1; i <= num2; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
printEvenNumbers(1, 10);

// 10
const names = [
  { first_name: "Asndnm", last_name: "L demo" },
  { first_name: "Qpweui", last_name: "Alxezx" },
  { first_name: "Pqwern", last_name: "Ruse" },
  { first_name: "Wiruyn", last_name: "Ruby" },
  { first_name: "Erpso", last_name: "Loal" },
  { first_name: "Demors", last_name: "Poet" },
  { first_name: "Aleos", last_name: "Lkeu" },
];
for (i = 0; i <= names.length; i++){
  
}
// console.log(names[1]);
