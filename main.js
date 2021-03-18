// const arr = [1, 2, 3, 4];

// arr[0] = 10;
// // console.log(arr);

// // Non-primitive
// // Do not compare arrays, functions, or objects. Non-primitive values are referred to as reference types, because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.

// let nums = [1, 2, 3];
// let numbers = nums;

// // console.log(nums == numbers);

// let userOne = {
// 	name: 'Asabeneh',
// 	role: 'teaching',
// 	country: 'Finland',
// };

// let userTwo = userOne;

// // console.log(userOne == userTwo);

// const PI = Math.PI;
// console.log(Math.round(PI));

// console.log(Math.round(PI)); // 3 to round values to the nearest number

// console.log(Math.round(9.81)); // 10

// console.log(Math.floor(PI)); // 3 rounding down

// console.log(Math.ceil(PI)); // 4 rounding up

// console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, returns the minimum value

// console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, returns the maximum value

// const randNum = Math.random(); // creates random number between 0 to 0.999999
// console.log(randNum);

// const num = Math.floor(Math.random() * 11); // creates random number between 0 and 10
// console.log(num);

// // Strings
// // substr(): It takes two arguments, the starting index and number of characters to slice.
// let string = 'JavaScript';
// console.log(string.substr(4, 6)); // Script

// // substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
// let string = 'JavaScript';

// console.log(string.substring(0, 4)); // Java

// Day_2_Exercise

const challenge = '30 Days Of JavaScript';
const tech = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const because =
	'You cannot end a sentence with because because because is a conjunction';

const spaces = ' 30 Days Of JavaScript ';
let string = '';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0, 2));
console.log(challenge.slice(2));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));
console.log(tech.split(','));
console.log(challenge.replace('30 Days Of JavaScript', '30 Days Of Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));
console.log(because.indexOf('because'));
console.log(because.lastIndexOf('because'));
console.log(because.search('because'));
console.log(spaces.trim());
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('JavaScript'));
console.log(challenge.match('a'));
console.log(string.concat('30 Days of ', 'JavaScript'));
console.log(challenge.repeat(2));

// Exercise level 2
const quote = `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
`;
console.log(quote);

const quote2 = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
`;
console.log(quote2);

const num1 = '10';
const numc = Number(num1);
const num2 = 10;
console.log(numc === num2);

const num3 = 10;
const num4 = Math.round(9.8);

console.log(num3 === num4);

const found1 = 'Python';
const found2 = 'Jargon';
console.log(found1.match('on'));
console.log(found2.match('on'));

const authmsg = 'I hope this course is not full of jargon';
console.log(authmsg.match('jargon'));

const rand = Math.random();
const randn = rand * 100;
let randf = Math.floor(randn);
console.log(randf);

let random = Math.floor(Math.random() * (100 - 50)) + 50;
console.log(random);
let rannd = Math.floor(Math.random() * 255) + 0;
console.log(rannd);

const javascript = 'JavaScript';
randchar = Math.floor(Math.random() * 10);
console.log(javascript.charAt(randchar));

console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');
console.log(because.substr(31, 23));

const love =
	'Love is the best thing in this world. Some found their love and some are still looking for their love.';

console.log(love.match(/love/gi).length);

console.log(because.match(/because/gi).length);

const sentence =
	'%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
// var num = str.replace(/[^0-9]/g, '');
// console.log(sentence.replace('%', ''));
const person =
	'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const net = person.match(/\d+/g);
// Array destructuring
let [salary, bonus, online] = net;
const total = +salary + +bonus + +online;
console.log(`The total income: $${total}`);
