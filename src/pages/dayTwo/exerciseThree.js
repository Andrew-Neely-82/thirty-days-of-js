// Exercise Level 3
console.log("Exercise Level 3:");

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

console.log("");
console.log("'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.");
console.log("Love is the best thing in this world. Some found their love and some are still looking for their love.".match(/love/gi).length);

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log("");
console.log("Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'");
console.log("You cannot end a sentence with because because because is a conjunction".match(/because/gi).length);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log("");
console.log("");
const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is also $the $result of &love& of tea&ching";

const cleanedSentence = sentence.replace(/[~!@#$%^&*()_|+\-=?;:'",.<>\\{\}\[\]\\\/]/gi, "");

console.log(cleanedSentence);

// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const income = 1000;
const annualIncome = income * 12;
const bonus = 10000;
const courses = 15000;
const annualCourses = courses * 12;

const totalIncome = annualIncome + bonus + annualCourses;

console.log(totalIncome);

console.log("");
console.log("");
console.log("");

export const exerciseThree = [
  {
    q: `'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.`,
    a: `console.log("Love is the best thing in this world. Some found their love and some are still looking for their love.".match(/love/gi).length);`,
  },
  {
    q: `Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'`,
    a: `console.log("You cannot end a sentence with because because because is a conjunction".match(/because/gi).length);`,
  },
  {
    q: `Clean the following text and find the most frequent word (hint, use     replace and regular expressions).
    <br/>
    <br/>
    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
`,
    a: `const income = 1000;
const annualIncome = income * 12;
const bonus = 10000;
const courses = 15000;
const annualCourses = courses * 12;
    
const totalIncome = annualIncome + bonus + annualCourses;
    
console.log(totalIncome);`,
  },
  {
    q: `Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'`,
    a: `const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is also $the $result of &love& of tea&ching';

const cleanedSentence = sentence.replace(/[~!@#$%^&*()_|+\-=?;:'",.<>\\{\}\[\]\\\/]/gi, '');
    
console.log(cleanedSentence);`,
  },
];
