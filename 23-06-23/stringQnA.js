// 1
// let str = "Hello! there ";
// console.log(str.length);

// 2
// console.log(str.toUpperCase());

// 3
// console.log(str.indexOf("o"));

// 4
// console.log("Hii" + " " + "Hello");
// let newStr = str.concat(str);
// console.log(newStr);

// 5
// console.log(str.slice(0, 6));
// console.log(str.substring(0, 6));

// 6
// console.log(str.replace("Hello", "Hii"));

// 7
// console.log(str.split("!"));

// 8
// let str1="     Hii! This is white space    "
// console.log(str1.trimStart());
// console.log(str1.trimEnd());

// 9
// console.log(str.search("there"));

// 10
// console.log(str.startsWith("Hello!"));

// 11
// const message = "Hello, World!";
// console.log(message.length);

// 12
// const str = "HelloWorld";
// console.log(str.toLowerCase());

// 13
// const sentence = "I love JavaScript!";
// console.log(sentence.indexOf("JavaScript"));

// 14
// const name = "John";
// const greeting = `Hello, ${name}!`;
// console.log(greeting);

// 15
// const text = "Hello, World!";
// console.log(text.substring(7));

// 16
// const message = "Hello, World!";
// console.log(message.replace("World", "Universe"));

// 17
// const words = "apple, banana, orange";
// const fruits = words.split(", ");
// console.log(fruits);

// 18
// const text = "   Hello, World!   ";
// console.log(text.trim());

// 19
// const sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.includes("dog"));

// 20
// const str = "Hello, World!";
// console.log(str.endsWith("!"));

// 21
// const sentence = "JavaScript is fun!";
// console.log(sentence.charAt(4));

// 22
// const str1 = "Hello";
// const str2 = "World";
// console.log(str1.concat(", ", str2));

// 23
// const sentence = "JavaScript is awesome!";
// console.log(sentence.slice(0, 10));

// 24
// const text = "Hello, World!";
// console.log(text.repeat(3));

// 25
// const sentence = "The quick brown fox";
// console.log(sentence.split(" "));

// 26
// const str = "Hello, World!";
// console.log(str.indexOf("o"));

// 27
// const sentence = "JavaScript is fun!";
// console.log(sentence.substring(4, 10));

// 28
// const text = "Hello, World!";
// console.log(text.charAt(7));

// 29
// const sentence = "I love JavaScript!";
// console.log(sentence.split("o"));

// 30
// const str = "Hello, World!";
// console.log(str.includes("World"));

// 31
// const sentence = "JavaScript is cool!";
// console.log(sentence.lastIndexOf("o"));

// 32
// const text = "Hello, World!";
// console.log(text.startsWith("Hello"));

// 33
// const str = "Hello, World!";
// console.log(str.toUpperCase());

// 34
// const sentence = "JavaScript is awesome!";
// console.log(sentence.toLowerCase());

// 35
// const str = "Hello, World!";
// console.log(str.charAt(13));

// 36
// const sentence = "JavaScript is fun!";
// console.log(sentence.substr(4, 10));

// 37
// const text = "Hello, World!";
// console.log(text.includes("WORLD"));

// 38
// const sentence = "JavaScript is amazing!";
// console.log(sentence.replace("amazing", "awesome"));

// 39
// const str = "Hello, World!";
// console.log(str.charCodeAt(4));

// 40
//  const sentence = "JavaScript is powerful!";
//  console.log(sentence.split(" ").length);

// 41
//  const text = "Hello, World!";
//  console.log(text.search("W"));

// 42
// const sentence = "JavaScript is dynamic!";
// console.log(sentence.slice(-7));

// 43
// const str = "Hello, World!";
// console.log(str.concat(" Goodbye!"));

// 44
// const sentence = "JavaScript is flexible!";
// console.log(sentence.charAt(sentence.length - 1));

// 45
// const sentence = "JavaScript is interesting!";
// console.log(sentence.substring(10));

// 46
// const str = "Hello, World!";
// console.log(str.search("World"));

// 47
// const sentence = "JavaScript is versatile!";
// console.log(sentence.split(" ").reverse().join(" "));

// 48
// const sentence = "JavaScript is powerful!";
// console.log(sentence.substring(4, 10));

// 49
// const str = "Hello, World!";
// console.log(str.charCodeAt(0));

// 50
// const sentence = "JavaScript is amazing!";
// console.log(sentence.slice(4, 10));

// 51
// const text = "Hello, World!";
// console.log(text.indexOf("o", 5));

//52
// const sentence = "JavaScript is fun!";
// console.log(sentence.startsWith("Java"));

// 53
// const str = "Hello, World!";
// console.log(str.endsWith("!"));

// 54
// const sentence = "JavaScript is amazing!";
// console.log(sentence.lastIndexOf("a", 12));

// 55
// const text = "Hello, World!";
// console.log(text.substring(7, 2));

// 56
// const sentence = "JavaScript is cool!";
// console.log(sentence.concat(" I love it!"));

// 57
// const str = "Hello, World!";
// console.log(str.toUpperCase().charAt(7));

// 58
// const str = "Hello, World!";
// console.log(str.toLowerCase().charAt(7));

// 59
// const sentence = "JavaScript is amazing!";
// console.log(sentence.replace("amazing", "awesome").toUpperCase());

// 60
// function is_string(input) {
//   return typeof input === "string";
// }
// console.log(is_string("w3resource"));
// console.log(is_string([1, 2, 4, 0]));

// 61
// function is_Blank(str) {
//   return str.trim().length === 0;
// }
// console.log(is_Blank("  "));
// console.log(is_Blank("abc"));

// 62
// function string_to_array(str) {
//   return str.split(" ");
// }
// console.log(string_to_array("Robin Singh"));

// 63;
// function truncate_string(str, chars) {
//   return str.substring(0, chars);
// }
// console.log(truncate_string("Robin Singh", 4));

// 64
// function protect_email(email) {
//   var atIndex = email.indexOf("@");
//   if (atIndex > 0) {
//     var firstPart = email.substring(0, atIndex);
//     var hiddenPart = ".".repeat(Math.max(0, firstPart.length - 8));
//     var lastPart = email.substring(atIndex);
//     return firstPart.substring(0, 5) + hiddenPart + lastPart;
//   } else {
//     return email;
//   }
// }
// console.log(protect_email("robin_singh@example.com"));

// 65