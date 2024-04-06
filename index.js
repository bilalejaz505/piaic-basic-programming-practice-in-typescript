"use strict";
// Assign "Hello, World!" to a variable and print it.
let greeting = "Hello, World!";
console.log(`Q1 Output: ${greeting}`);
console.log('\n\r');
// Assign integer values and perform arithmetic operations.
console.log(`Q2 Output:`);
let num1 = 10, num2 = 2;
console.log(`SUM: ${num1 + num2}`);
console.log(`DIFFERENCE: ${num1 - num2}`);
console.log(`PRODUCT: ${num1 * num2}`);
console.log(`QUOTIENT: ${num1 / num2}`);
console.log('\n\r');
// Swap values without using a new variable.
let a1 = 1, b1 = 2;
[a1, b1] = [b1, a1];
console.log(`Q3 Output: a = ${a1}, b = ${b1}`);
console.log('\n\r');
// Try assigning a number to it and see what happens.
let message;
// message = 2;
console.log(`Q4 Output: A number can't be assigned to a string type variable!`);
console.log('\n\r');
// Use the modulus operator (%) to find the remainder.
let number1 = 10, number2 = 5;
console.log(`Q5 Output: Remainder is ${number1 % number2}`);
console.log('\n\r');
// Increment this value by 1 in two different ways.
let counter = 0;
let counter1 = counter++;
let counter2 = counter + 1;
console.log(`Q6 Output: Incremented Counters: Method 1 = ${counter1} - Method 2 = ${counter2}`);
console.log('\n\r');
// Given three boolean variables, write expressions for AND, OR, and NOT gates.
console.log(`Q7 Output:`);
let a = true, b = false, c = true;
const AND_result = a && b && c;
console.log(`AND: ${AND_result}`); // Output will be false since all variables need to be true for AND gate to yield true
const OR_result = a || b || c;
console.log(`OR: ${OR_result}`); // Output will be true since at least one variable needs to be true for OR gate to yield true
const NOT_result_a = !a;
const NOT_result_b = !b;
const NOT_result_c = !c;
console.log("NOT a:", NOT_result_a); // Output will be false since a is true
console.log("NOT b:", NOT_result_b); // Output will be true since b is false
console.log("NOT c:", NOT_result_c); // Output will be false since c is true
console.log('\n\r');
// Use +=, -=, *=, and /= on this variable.
let num = 10;
console.log(`Q8 Output:`);
// += operator: Add a value to num
num += 5; // Equivalent to num = num + 5
console.log(`num after +=: ${num}`); // Output will be 15
// -= operator: Subtract a value from num
num -= 3; // Equivalent to num = num - 3
console.log(`num after -=: ${num}`); // Output will be 12
// *= operator: Multiply num by a value
num *= 2; // Equivalent to num = num * 2
console.log(`num after *=: ${num}`); // Output will be 24
// /= operator: Divide num by a value
num /= 4; // Equivalent to num = num / 4
console.log(`num after /=: ${num}`); // Output will be 6
console.log('\n\r');
// Determine if this is even or odd.
let number = 13;
console.log(`Q9 Output: Number is ${number % 2 == 0 ? 'EVEN' : 'ODD'}!`);
console.log('\n\r');
// Check if age is 18 or older to determine voting eligibility.
let age = 17;
console.log(`Q10 Output: The person is ${age >= 18 ? 'ELIGIBLE' : 'NOT ELIGIBLE'} to vote!`);
console.log('\n\r');
// Use conditionals to assign and print grades A, B, C, D, or F.
let score = 77;
let grade;
if (score > 90) {
    grade = "A";
}
else if (score >= 81 && score <= 90) {
    grade = "B";
}
else if (score >= 71 && score <= 80) {
    grade = "C";
}
else if (score >= 61 && score <= 70) {
    grade = "D";
}
else {
    grade = "F";
}
console.log(`Q11 Output: The grade is "${grade}".`);
console.log('\n\r');
// Determine the largest among these.
let x = 10, y = 5, z = 8;
let largest;
if (x >= y && x >= z) {
    largest = x;
}
else if (y >= x && y >= z) {
    largest = y;
}
else {
    largest = z;
}
console.log(`Q12 Output: The largest number is: ${largest}`);
console.log('\n\r');
// Determine if this is a leap year.
let year = 2024;
console.log(`Q13 Output: Year ${year} is ${year % 4 == 0 ? 'a leap year' : 'not a leap year'}!`);
console.log('\n\r');
// Convert this to Celsius and print the result.
let fahrenheit = 101;
const celsius = (fahrenheit - 32) * 5 / 9;
console.log(`Q14 Output: ${fahrenheit} in Fahrenheit is equal to ${celsius} in Celcius`);
console.log('\n\r');
// Determine the sign of this number.
let numb = 20;
let sign;
if (number > 0) {
    sign = "POSITIVE";
}
else if (number < 0) {
    sign = "NEGATIVE";
}
else {
    sign = "ZERO";
}
console.log(`Q15 Output: ${numb} in a ${sign} number!`);
console.log('\n\r');
// Print the multiplication table for this number up to 10.
console.log(`Q16 Output:`);
let numberForMultiplication = 8;
console.log(`Multiplication table for ${numberForMultiplication}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numberForMultiplication} * ${i} = ${numberForMultiplication * i}`);
}
