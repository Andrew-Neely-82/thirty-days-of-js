// * Write a single line comment which says, comments can make code readable

// * Write another single comment which says, Welcome to 30DaysOfJavaScript

// * Write a multiline comment which says, comments can make code readable, easy to reuse and informative

// * Create a variable.js file and declare variables and assign string, boolean, undefined and null data types

// * Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable
// * Declare four variables without assigning values
// * Declare four variables with assigned values
// * Declare variables to store your first name, last name, marital status, country and age in multiple lines
// * Declare variables to store your first name, last name, marital status, country and age in a single line
// * Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

// * Start of answers:

// comments can make code readable

// Welcome to 30DaysOfJavaScript

/* 
  comments can make code readable, 
  easy to reuse and informative
*/

let hello;
let goodbye;
let goodMorning;
let goodNight;

let name = "David";
let age = 50;
let job = null;
let hobbies = undefined;

let yourFirstName, yourLastName, yourMaritalStatus, yourCountry, yourAge;

let firstName, lastName, maritalStatus, country, ageInline;

let myAge = 33;
console.log(myAge);

export const qaPairs = [
  {
    question: "Write a single line comment which says, comments can make code readable",
    answer: ["let hello;", "let goodbye;", "let goodMorning;", "let goodNight;"],
  },
  {
    question: "Write another single comment which says, Welcome to 30DaysOfJavaScript",
    answer: ['let name = "David";', "let age = 50;", "let job = null;", "let hobbies = undefined;"],
  },
  {
    question: "Write a multiline comment which says, comments can make code readable, easy to reuse and informative",
    answer: ["/*", "This is a multiline comment", "that demonstrates how comments", "can improve code readability", "and provide useful information.", "*/"],
  },
  {
    question: "Declare four variables without assigning values",
    answer: ["let variable1;", "let variable2;", "let variable3;", "let variable4;"],
  },
  {
    question: "Declare four variables with assigned values",
    answer: ["let variable1 = 10;", "let variable2 = 'Hello';", "let variable3 = true;", "let variable4 = null;"],
  },
  {
    question: "Declare variables to store your first name, last name, marital status, country, and age in multiple lines",
    answer: "let firstName;\nlet lastName;\nlet maritalStatus;\nlet country;\nlet age;",
  },
  {
    question: "Declare variables to store your first name, last name, marital status, country, and age in a single line",
    answer: "let firstName, lastName, maritalStatus, country, age;",
  },
  {
    question: "Declare two variables myAge and yourAge and assign them initial values and log to the browser console.",
    answer: ["let myAge = 25;", "let yourAge = 30;", "console.log(myAge, yourAge);"],
  },
  // Add more question-answer pairs here
];
