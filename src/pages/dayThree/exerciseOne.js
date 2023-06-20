console.log("");
console.log("Day 3 Exercise 1:");
console.log("");

// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

console.log("Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.");
let firstName = "Joe";
let lastName = "Schmoe";
let country = "USA";
let city = "Manhattan";
let isMarried = false;
let year = 2023;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof isMarried);
console.log(typeof year);
console.log("");

// Check if type of '10' is equal to 10

console.log("Check if type of '10' is equal to 10");
console.log(typeof "10" == 10);
console.log("");

// Check if parseInt('9.8') is equal to 10
console.log("Check if parseInt('9.8') is equal to 10");
console.log(parseInt("9.8") == 10);
console.log("");

// Boolean value is either true or false.
console.log(false);
console.log("");
// Write three JavaScript statement which provide truthy value.
console.log("Write three JavaScript statement which provide truthy value.");
console.log(10 == "10");
console.log(true == true);
console.log(1 < 2);
console.log("");
// Write three JavaScript statement which provide falsy value.
console.log("toad" == "mario");
console.log("10" == 5);
console.log("hello" == true);
console.log("");
// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'
console.log("Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()");
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");
console.log("");
// Find the length of python and jargon and make a falsy comparison statement.
console.log("Find the length of python and jargon and make a falsy comparison statement.");
console.log("python".length !== "jargon".length);
console.log("");
// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 < 3)
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')

console.log("// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()");
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));
console.log("");

// There is no 'on' in both dragon and python
console.log("There is no 'on' in both dragon and python");
console.log(!"dragon".includes("on") && "python".includes("on"));
console.log("");

// Use the Date object to do the following activities

// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(new Date().getFullYear());
console.log(new Date().getMonth());
console.log(new Date().getDate());
console.log(new Date().getDay());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(Math.floor(new Date().getTime() / 1000));

export const exerciseOne = [
  {
    id: 1,
    q: "Declare firstName, lastName, country, city, age, isMarried, year variables and assign values to them. Use the typeof operator to check the data types of each variable.",
    a: `let firstName = "John";
let lastName = "Doe";
let country = "USA";
let city = "New York";
let age = 30;
let isMarried = false;
let year = 2023;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);`,
  },
  {
    id: 2,
    q: "Check if the type of '10' is equal to the type of 10.",
    a: `console.log(typeof "10" === typeof 10);`,
  },
  {
    id: 3,
    q: "Check if parseInt('9.8') is equal to 10.",
    a: `console.log(parseInt('9.8') === 10);`,
  },
  {
    id: 4,
    q: "Create a boolean variable with a value of true.",
    a: `let isTrue = true;
console.log(isTrue);`,
  },
  {
    id: 5,
    q: "Write three JavaScript statements that evaluate to a truthy value.",
    a: `console.log(10 > 5);
console.log("hello" !== "goodbye");
console.log(!!"non-empty string");`,
  },
  {
    id: 6,
    q: "Write three JavaScript statements that evaluate to a falsy value.",
    a: `console.log(0 == false);
console.log(null === undefined);
console.log("" == false);`,
  },
  {
    id: 7,
    q: "Evaluate the following comparison expressions and confirm the results using console.log():\n\n4 > 3",
    a: "console.log(4 > 3);",
  },
  {
    id: 8,
    q: "4 >= 3",
    a: "console.log(4 >= 3);",
  },
  {
    id: 9,
    q: "4 < 3",
    a: "console.log(4 < 3);",
  },
  {
    id: 10,
    q: "4 <= 3",
    a: "console.log(4 <= 3);",
  },
  {
    id: 11,
    q: "4 == 4",
    a: "console.log(4 == 4);",
  },
  {
    id: 12,
    q: "4 === 4",
    a: "console.log(4 === 4);",
  },
  {
    id: 13,
    q: "4 != 4",
    a: "console.log(4 != 4);",
  },
  {
    id: 14,
    q: "4 !== 4",
    a: "console.log(4 !== 4);",
  },
  {
    id: 15,
    q: "4 != '4'",
    a: "console.log(4 != '4');",
  },
  {
    id: 16,
    q: "4 === '4'",
    a: "console.log(4 === '4');",
  },
  {
    id: 17,
    q: "Find the length of the words 'python' and 'jargon' and compare them in a falsy comparison statement.",
    a: `console.log("python".length === "jargon".length);`,
  },
  {
    id: 18,
    q: "Evaluate the following expressions and confirm the results using console.log():\n\n4 > 3 && 10 < 12",
    a: "console.log(4 > 3 && 10 < 12);",
  },
  {
    id: 19,
    q: "4 > 3 && 10 > 12",
    a: "console.log(4 > 3 && 10 > 12);",
  },
  {
    id: 20,
    q: "4 > 3 || 10 < 12",
    a: "console.log(4 > 3 || 10 < 12);",
  },
  {
    id: 21,
    q: "4 > 3 || 10 > 12",
    a: "console.log(4 > 3 || 10 > 12);",
  },
  {
    id: 22,
    q: "!(4 > 3)",
    a: "console.log(!(4 > 3));",
  },
  {
    id: 23,
    q: "!(4 < 3)",
    a: "console.log(!(4 < 3));",
  },
  {
    id: 24,
    q: "!(false)",
    a: "console.log(!(false));",
  },
  {
    id: 25,
    q: "!(4 > 3 && 10 < 12)",
    a: "console.log(!(4 > 3 && 10 < 12));",
  },
  {
    id: 26,
    q: "!(4 > 3 && 10 > 12)",
    a: "console.log(!(4 > 3 && 10 > 12));",
  },
  {
    id: 27,
    q: "!(4 === '4')",
    a: "console.log(!(4 === '4'));",
  },
  {
    id: 28,
    q: "Check if 'on' is present in both 'dragon' and 'python'.",
    a: `let word1 = "dragon";
let word2 = "python";
console.log(word1.includes("on") && word2.includes("on"));`,
  },
  {
    id: 29,
    q: "Use the Date object to answer the following questions:\n\nWhat is the current year?",
    a: `let currentDate = new Date();
let currentYear = currentDate.getFullYear();
console.log(currentYear);`,
  },
  {
    id: 30,
    q: "What is the current month as a number?",
    a: `let currentDate = new Date();
let currentMonth = currentDate.getMonth() + 1;
console.log(currentMonth);`,
  },
  {
    id: 31,
    q: "What is the current date?",
    a: `let currentDate = new Date();
let currentDateNumber = currentDate.getDate();
console.log(currentDateNumber);`,
  },
  {
    id: 32,
    q: "What is the current day as a number?",
    a: `let currentDate = new Date();
let currentDay = currentDate.getDay();
console.log(currentDay);`,
  },
  {
    id: 33,
    q: "What is the current hour?",
    a: `let currentDate = new Date();
let currentHour = currentDate.getHours();
console.log(currentHour);`,
  },
  {
    id: 34,
    q: "What is the current minute?",
    a: `let currentDate = new Date();
let currentMinute = currentDate.getMinutes();
console.log(currentMinute);`,
  },
  {
    id: 35,
    q: "Find out the number of seconds elapsed from January 1, 1970, to now.",
    a: `let currentDate = new Date();
let elapsedTime = Math.floor(currentDate.getTime() / 1000);
console.log(elapsedTime);`,
  },
];
