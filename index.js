//JAVASCRIPT BOOK 101

// create variables

// let message;
// message = "hello";
// message = "world";
// alert(message);

//We can also declare two variables and copy data from one into the other.

// let hello = "hello world";
// let message;
// message = hello;
// console.log(message);

// //✔ Tasks
// Working with variables importance: 2
// 1. Declare two variables: admin and name . 2. Assign the value "John" to name . 3. Copy the value from name to admin . 4. Show the value of admin using alert (must output “John”).

let admin, name;
name = "john";
admin = name;

console.log(admin);

//Data types
// A variable in JavaScript can contain any data. A variable can at one moment be a string and at another be a number:

let message = "hello";
message = 123545;

//Programming languages that allow such things are called “dynamically typed”
//There are eight basic data types in JavaScript

//Number;
let n = 123;
n = 12.345;

//The number type represents both integer and floating point numbers.
//Infinity represents the mathematical Infinity  ∞. It is a special value that’s greater than any number.

console.log(1 / 0);

//BigInt;

//BigInt type was recently added to the language to represent integers of arbitrary length. A BigInt is created by appending n to the end of an integer literal

const BigInt = 1233444444444566778899900n;
console.log(BigInt);

String;
//A string in JavaScript must be surrounded by quotes.
// let str = "string";
// let str2 = "Single quotes are ok too";
// let phrase = `can embed another ${str}`;
// console.log(phrase);

//Boolean (logical type)
//The boolean type has only two values: true and false .

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

console.log(nameFieldChecked);
console.log(ageFieldChecked);

//The null value

//In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
//It’s just a special value which represents “nothing”, “empty” or “value unknown

let age = null;
console.log(age);

//The “undefined” value
//The meaning of undefined is “value is not assigned”. If a variable is declared, but not assigned, then its value is undefined

let x;
console.log(x);

//Data types
//All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever).

// console.log(typeof undefined);
// console.log(typeof 0);
// console.log(typeof 0n);
// console.log(typeof true);
// console.log(typeof "foo");
// console.log(typeof Symbol("id"));
// console.log(typeof Math);
// console.log(typeof null);
// console.log(typeof alert);

//1. Math is a built-in object that provides mathematical operations. We will learn it in the chapter Numbers. Here, it serves just as an example of an object.

//2. The result of typeof null is "object" . That’s wrong. It is an officially recognized error in typeof , kept for compatibility. Of course, null is not an object. It is a special value with a separate type of its own. So, again, this is an error in the language.

//3. The result of typeof alert is "function" , because alert is a function. We’ll study functions in the next chapters where we’ll also see that there’s no special “function” type in
//JavaScript. Functions belong to the object type. But typeof treats them differently, returning "function" . That’s not quite correct, but very convenient in practice.

//string conversion

let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value);

//Numeric Conversion

//For example, when division / is applied to non-numbers:

console.log("6" / "2");

//We can use the Number(value) function to explicitly convert a value to a number:

let str = "123";
console.log(typeof str);
let num = Number(str);
console.log(typeof num); //123

let ages = Number("an arbitrary string instead of a number");
console.log(ages);

console.log(Number(true));
console.log(Number(false));

//Summary
//The three most widely used type conversions are to string, to number, and to boolean.
//String Conversion – Occurs when we output something. Can be performed with String(value) . The conversion to string is usually obvious for primitive values.
//Numeric Conversion – Occurs in math operations. Can be performed with Number(value) .7

//✔ Tasks

// console.log("" + 1 + 0);
// console.log("" - 1 + 0);
// console.log(true + false);
// console.log(6 / "3");
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log("4" - 2);
// console.log("4px" - 2);
// console.log(7 / 0);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log("\t\n" - 2);

//Operators

//Terms: “unary”, “binary”, “operand”

//An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2 . Sometimes, people call these “arguments” instead of “operands”.

//Unary Operator

//●An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:

let b = 1;
b = -b;
console.log(b); // -1, unary negation was applied

//● An operator is binary if it has two operands. The same minus exists in binary form as well:

let bin = 1;
let ary = 3;
console.log(ary - bin); // 2, binary minus subtracts values

//String concatenation, binary +

let s = "my" + "string";
console.log(s);
//Note that if one of the operands is a string, the other one is converted to a string too.
console.log("1" + 2);
console.log(2 + "1");

//Note that operations run from left to right. If there are two numbers followed by a string, the numbers will be added before being converted to a string:

console.log(2 + 2 + "1"); // "41" and not "221"

//String concatenation and conversion is a special feature of the binary plus +

// Other arithmetic operators work only with numbers and always convert their operands to numbers.
//For instance, subtraction and division:
console.log("2" - "1");
console.log("6" / "2");

//String concatenation and conversion is a special feature of the binary plus + . Other arithmetic operators work only with numbers and always convert their operands to numbers.
//For instance, subtraction and division:

let u = 1;
console.log(+u);

let y = -3;

console.log(+y);
console.log(+true);
console.log(+"");

//The need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them? The binary plus would add them as strings:

let apples = "2";
let oranges = "23";

console.log(apples + oranges); // "23", the binary plus concatenates strings

let mango = "2";
let grapes = "3";
// both values converted to numbers before the binary plus
//console.log(+mango + +grapes);

//If we want to treat them as numbers, we need to convert and then sum them:

console.log(Number(mango) + Number(grapes));

//unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up.

//stopped@ pg42
//increement and decrement

let counter = 2;
counter++;
//++counter;
console.log(counter);

//jumped to page54
