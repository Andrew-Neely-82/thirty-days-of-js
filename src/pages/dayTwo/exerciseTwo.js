console.log("Day Two, Exercise Level 2");

// Using console.log() print out the following statement:

// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("");
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);

// Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log("");
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

console.log("");
console.log("Check if typeof '10' is exactly equal to 10. If not make it exactly equal.");
console.log("10" === 10);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

console.log("");
console.log(`Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.`);
console.log(parseFloat("9.8") + 0.2 === 10);

// Check if 'on' is found in both python and jargon

console.log("");
console.log("Check if 'on' is found in both python and jargon");
console.log("Check if 'on' is found in both python and jargon".includes("on"));

// I hope this course is not full of jargon. Check if jargon is in the sentence.

console.log("");
console.log("I hope this course is not full of jargon. Check if jargon is in the sentence.");
console.log("I hope this course is not full of jargon.".includes("jargon"));

// Generate a random number between 0 and 100 inclusively.

console.log("");
console.log("Generate a random number between 0 and 100 inclusively.");
console.log(Math.floor(Math.random() * 101));

// Generate a random number between 50 and 100 inclusively.

console.log("");
console.log("Generate a random number between 50 and 100 inclusively.");
console.log(Math.floor(Math.random() * 51) + 50);

// Generate a random number between 0 and 255 inclusively.

console.log("");
console.log("Generate a random number between 0 and 255 inclusively.");
console.log(Math.floor(Math.random() * 256));

// Access the 'JavaScript' string characters using a random number.

console.log("");
console.log("Access the 'JavaScript' string characters using a random number.");
console.log(Math.floor(Math.random() * "JavaScript".length));

// Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

console.log("");
console.log("Use console.log() and escape characters to print the following pattern.");
console.log(`1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125`);

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log("");
console.log(`Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'`);
console.log("You cannot end a sentence with because because because is a conjunction".substring(31, 54));

export const exerciseTwo = [
  {
    q: "Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.",
    a: "console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)",
  },
  {
    q: `Using console.log() print out the following quote by Mother Teresa:`,
    a: `console.log('"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    '')`,
  },
  {
    q: `Check if typeof '10' is exactly equal to 10. If not make it exactly equal.`,
    a: `console.log("10" === 10);`,
  },
  {
    q: `Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.`,
    a: `console.log(parseFloat("9.8") + 0.2 === 10);`,
  },
  {
    q: `Check if 'on' is found in both python and jargon`,
    a: `console.log("Check if 'on' is found in both python and jargon".includes("on"));`,
  },
  {
    q: `I hope this course is not full of jargon. Check if jargon is in the sentence.`,
    a: `console.log("I hope this course is not full of jargon.".includes("jargon"));`,
  },
  {
    q: `Generate a random number between 0 and 100 inclusively.`,
    a: `console.log(Math.floor(Math.random() * 101));`,
  },
  {
    q: `Generate a random number between 50 and 100 inclusively.`,
    a: `console.log(Math.floor(Math.random() * 51) + 50);`,
  },
  {
    q: `Generate a random number between 0 and 255 inclusively.`,
    a: `console.log(Math.floor(Math.random() * 256));`,
  },
  {
    q: `Access the 'JavaScript' string characters using a random number.`,
    a: `console.log(Math.floor(Math.random() * "JavaScript".length));`,
  },
  {
    q: `Use console.log() and escape characters to print the following pattern.`,
    a: "console.log(`\n1 1 1 1 1\n 2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125\n`);",
  },
  {
    q: `Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'`,
    a: `console.log("You cannot end a sentence with because because because is a conjunction".substring(31, 54));`,
  },
];
