// Exercises: Level 2

// ? 1
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

// const base = parseFloat(prompt("Enter the base of the triangle:"));
// const height = parseFloat(prompt("Enter the height of the triangle:"));
// const area = 0.5 * base * height;

// console.log("The area of the triangle is", area);

// ? 2
// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

// const sideA = parseFloat(prompt("Enter side a: "));
// const sideB = parseFloat(prompt("Enter side b: "));
// const sideC = parseFloat(prompt("Enter side c: "));
// const perimeter = sideA + sideB + sideC;
// console.log(perimeter);

// ? 3
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// const length = parseFloat(prompt("What is the length of the rectangle?"));
// const width = parseFloat(prompt("What is the width of the rectangle?"));
// const area = 2 * (length * width);
// console.log("The area of the rectangle is", area);

// ? 2
// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// const pi = 3.14;
// const radius = parseFloat('Enter the radius of the circle');
// const area = pi * radius * radius;
// const circumference = 2 * pi * radius;
// console.log("The area of the circle is", area, "and the circumference of the circle is", circumference);

// ? 3
// Calculate the slope, x-intercept and y-intercept of y = 2x -2

// ? 4
// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// ? 5
// Compare the slope of above two questions.

// ? 6
// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// ? 7
// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

// ? 8
// If the length of your name is greater than 7 say, your name is long else say your name is short.

// ? 9
// Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'

// Your first name, Asabeneh is longer than your family name, Yetayeh

// ? 10
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25

// I am 225 years older than you.

// ?
// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

// ! answer
// const year = parseInt(prompt("Enter birth year"));
// const age = new Date().getFullYear() - year;

// if (age >= 18) {
//   console.log("You are " + age + ". You are old enough to drive");
// } else {
//   console.log("You are " + age + ". You will be old enough to drive after " + (18 - age) + " years.");
// }

// ?
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

// ! answer
// const yearsAlive = parseInt(prompt('Enter the number of years you live'));
// const secondsPerYear = 365 * 24 * 60 * 60;
// const totalSeconds = yearsAlive * secondsPerYear;
// console.log(`A person can live approximately ${totalSeconds.toLocaleString()} seconds.`);

export const exerciseTwo = [
  {
    q: `Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
<br/>
<br/>
Enter base: 20
<br/>
Enter height: 10
<br/>
The area of the triangle is 100
<br/>
<br/>
Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle
<br/>(perimeter = a + b + c)`,
    a: `const base = parseFloat(prompt("Enter the base of the triangle:"));
const height = parseFloat(prompt("Enter the height of the triangle:"));
const area = 0.5 * base * height;

console.log("The area of the triangle is", area);`,
  },
  {
    q: `Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
<br/>
<br/>
Enter side a: 5
<br/>
Enter side b: 4
<br/>
Enter side c: 3
<br/>
The perimeter of the triangle is 12`,
    a: `const sideA = parseFloat(prompt("Enter side a: "));
const sideB = parseFloat(prompt("Enter side b: "));
const sideC = parseFloat(prompt("Enter side c: "));
const perimeter = sideA + sideB + sideC;
console.log(perimeter);`,
  },
  {
    q: `Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))`,
    a: `const length = parseFloat(prompt("What is the length of the rectangle?"));
const width = parseFloat(prompt("What is the width of the rectangle?"));
const area = 2 * (length * width);
console.log("The area of the rectangle is", area);`,
  },
  {
    q: `Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.`,
    a: `const pi = 3.14;
const radius = parseFloat('Enter the radius of the circle');
const area = pi * radius * radius;
const circumference = 2 * pi * radius;
console.log("The area of the circle is", area, "and the circumference of the circle is", circumference);`,
  },
];
