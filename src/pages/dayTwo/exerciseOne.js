// ! Exercise: Level 1

console.log(``);
console.log("Day Two Exercise 1: ");
console.log(``);

//*  Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge = "30 Days of JavaScript";

// Print the string on the browser console using console.log()

console.log("Q2: Print the string on the browser console using console.log()");
console.log(challenge);
console.log(``);

// Print the length of the string on the browser console using console.log()

console.log("Q3: Print the length of the string on the browser console using console.log()");
console.log(challenge.length);
console.log(``);

// Change all the string characters to capital letters using toUpperCase() method

console.log("Q4: Change all the string characters to capital letters using toUpperCase() method");
console.log(challenge.toUpperCase());
console.log(``);

// Change all the string characters to lowercase letters using toLowerCase() method

console.log("Q5: Change all the string characters to lowercase letters using toLowerCase() method");
console.log(challenge.toLowerCase());
console.log(``);

// Cut (slice) out the first word of the string using substr() or substring() method

console.log("Q6: Cut (slice) out the first word of the string using substr() or substring() method");
console.log(challenge.substring(0, 2));
console.log(``);

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log("Q7: Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript");
console.log(challenge.slice(3, 21));
console.log(``);

// Check if the string contains a word Script using includes() method
console.log("Q8: Check if the string contains a word Script using includes() method");
console.log(challenge.includes("Script"));
console.log(``);

// Split the string into an array using split() method
console.log("Q9: Split the string into an array using split() method");
console.log(challenge.split());
console.log(``);

// Split the string 30 Days Of JavaScript at the space using split() method
console.log("Q10: Split the string 30 Days Of JavaScript at the space using split() method");
console.log(challenge.split(" "));
console.log(``);

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log("Q11: 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.");
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(","));
console.log(``);

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log("Q12: Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.");
console.log(challenge.replace("JavaScript", "Python"));
console.log(``);

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log("Q13: What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.");
console.log(challenge.charAt(15));
console.log(``);

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log("Q14: What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()");
console.log(challenge.charCodeAt(11));
console.log(``);

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log("Q15: Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript");
console.log(challenge.indexOf("a"));
console.log(``);

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log("Q16: Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.");
console.log(challenge.lastIndexOf("a"));
console.log(``);

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("Q17: Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'");
console.log("You cannot end a sentence with because because because is a conjunction".indexOf("because"));
console.log(``);

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("Q18: Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'");
console.log("You cannot end a sentence with because because because is a conjunction".lastIndexOf("because"));
console.log(``);

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("Q19: Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'");
console.log("You cannot end a sentence with because because because is a conjunction".search("because"));
console.log(``);

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log("Q20: Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '");
console.log(" 30 Days Of JavaScript ".trim());
console.log(``);

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("Q21: Use startsWith() method with the string 30 Days Of JavaScript and make the result true");
console.log(challenge.startsWith("30"));
console.log(``);

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("Q22: Use endsWith() method with the string 30 Days Of JavaScript and make the result true");
console.log(challenge.endsWith("JavaScript"));
console.log(``);

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log("Q23: Use match() method to find all the a’s in 30 Days Of JavaScript");
let pattern = /a/gi;
console.log(challenge.match(pattern));
console.log(``);

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log("Q24: Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'");
console.log("30 Days of".concat(" JavaScript"));
console.log(``);

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log("Q25: Use repeat() method to print 30 Days Of JavaScript 2 times");
console.log(challenge.repeat(2));
console.log(``);

export const qAndA = [
  {
    q: "Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.",
    a: `let challenge = "30 Days of JavaScript";`,
  },
  {
    q: "Print the string on the browser console using console.log()",
    a: "console.log(challenge);",
  },
  {
    q: "Print the length of the string on the browser console using console.log()",
    a: "console.log(challenge.length);",
  },
  {
    q: "Change all the string characters to capital letters using toUpperCase() method",
    a: "console.log(challenge.toUpperCase());",
  },
  {
    q: "Change all the string characters to lowercase letters using toLowerCase() method",
    a: "console.log(challenge.toLowerCase());",
  },
  {
    q: "Cut (slice) out the first word of the string using substr() or substring() method",
    a: "console.log(challenge.substring(0, 2));",
  },
  {
    q: "Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.",
    a: "console.log(challenge.slice(3, 21));",
  },
  {
    q: "Check if the string contains a word Script using includes() method",
    a: `console.log(challenge.includes("Script"));`,
  },
  {
    q: "Split the string into an array using split() method",
    a: `console.log(challenge.split());`,
  },
  {
    q: "Split the string 30 Days Of JavaScript at the space using split() method",
    a: `console.log(challenge.split(" "));`,
  },
  {
    q: "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.",
    a: `console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(","));`,
  },
  {
    q: "Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.",
    a: `console.log(challenge.replace("JavaScript", "Python"));`,
  },
  {
    q: "What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.",
    a: `console.log(challenge.charAt(15));`,
  },
  {
    q: `What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()`,
    a: `console.log(challenge.charCodeAt(11));`,
  },
  {
    q: "Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript",
    a: `console.log(challenge.indexOf("a"));`,
  },
  {
    q: "Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.",
    a: `console.log(challenge.lastIndexOf("a"));`,
  },
  {
    q: "Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'",
    a: `console.log("You cannot end a sentence with because because because is a conjunction".indexOf("because"));`,
  },
  {
    q: "Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'",
    a: `console.log("You cannot end a sentence with because because because is a conjunction".lastIndexOf("because"));`,
  },
  {
    q: "Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'",
    a: `console.log("You cannot end a sentence with because because because is a conjunction".search("because"));`,
  },
  {
    q: "Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.",
    a: `console.log(" 30 Days Of JavaScript ".trim());`,
  },
  {
    q: "Use startsWith() method with the string 30 Days Of JavaScript and make the result true",
    a: `console.log(challenge.startsWith("30"));`,
  },
  {
    q: "Use endsWith() method with the string 30 Days Of JavaScript and make the result true",
    a: `console.log(challenge.endsWith("JavaScript"));`,
  },
  {
    q: "Use match() method to find all the a’s in 30 Days Of JavaScript",
    a: "let pattern = /a/gi; console.log(challenge.match(pattern));",
  },
  {
    q: "Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'",
    a: `console.log("30 Days of".concat(" JavaScript"));`,
  },
  {
    q: "Use repeat() method to print 30 Days Of JavaScript 2 times",
    a: `console.log(challenge.repeat(2));`,
  },
];
