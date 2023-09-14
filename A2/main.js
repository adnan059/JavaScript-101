// Problem: 1 => Solve the problem with Javascript  to find the maximum between two numbers.

const p1Num1 = 15;
const p1Num2 = 10;

const p1Max = Math.max(p1Num1, p1Num2);

console.log(p1Max);

console.log("********************");

// Problem: 2 => Solve the problem with Javascript  to find a maximum among three numbers.

const p2Num1 = -5;
const p2Num2 = 36;
const p2Num3 = 7;

const p2Max = Math.max(p2Num1, p2Num2, p2Num3);

console.log(p2Max);

console.log("********************");

// Problem: 3 => Solve the problem with Javascript  to check whether a number is negative, positive or zero.

const p3Num = -45;

if (p3Num > 0) {
  console.log(`${p3Num} is a positive number.`);
} else if (p3Num < 0) {
  console.log(`${p3Num} is a negative number.`);
} else {
  console.log(`${p3Num} is zero.`);
}

console.log("********************");

// Problem: 4 => Solve the problem with Javascript  to check whether a number is divisible by 10 or not.

const p4Num = 30;

if (p4Num % 10 == 0) {
  console.log(`${p4Num} is divisible by 10.`);
} else {
  console.log(`${p4Num} is not divisible by 10.`);
}

console.log("********************");

// Problem: 5 => Solve the problem with Javascript  to check whether a number is even or odd.

const p5Num = 98;

if (p5Num % 2 == 0) {
  console.log(`${p5Num} is an even number.`);
} else {
  console.log(`${p5Num} is an odd number.`);
}

console.log("********************");

// Problem 6: Solve the problem with Javascript  to check whether a character is in the alphabet or not.

const char = "g";

if (char.length === 1 && char.match(/[a-z]/i)) {
  console.log(`${char} is in alphabet`);
} else {
  console.log(`${char} is not in alphabet`);
}

console.log("********************");

// Problem: 7 => Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , any other value is normal)

const temperature = 35;

if (temperature >= 30) {
  console.log("It is hot.");
} else if (temperature < 30 && temperature >= 25) {
  console.log("It is normal temperature.");
} else {
  console.log("It is cold.");
}

console.log("********************");

// Problem: 8 => Given 3 subjects Math, English and Physics find the total marks and average of 3 subjects.

const mathematics = 85;
const english = 80;
const physics = 92;

const totalMarks = mathematics + english + physics;

console.log("Total marks: ", totalMarks);

const averageMark = Number(((mathematics + english + physics) / 3).toFixed(2));

console.log("Average mark: ", averageMark);

if (averageMark >= 90) {
  console.log("Grade A");
} else if (averageMark >= 80) {
  console.log("Grade B");
} else if (averageMark >= 70) {
  console.log("Grade C");
} else if (averageMark >= 60) {
  console.log("Grade D");
} else if (averageMark >= 40) {
  console.log("Grade E");
} else {
  console.log("Grade F");
}

console.log("********************");

// Problem 9: Find the random number between 1 to 10.

console.log("Random number between 1 to 10: ", Math.ceil(Math.random() * 10));

console.log("********************");

// Problem: 10 =>  Create a for loop where it prints out the even number only between number 10 to 50.

for (let num = 10; num <= 50; num++) {
  if (num % 2 == 0) {
    console.log(num);
  }
}
