// Problem: Create 3 meaningful arrays and  3 objects

const food = ["Rice", "Fish", "Bread"];
const cricketers = ["Tamim", "Shakib", "Riyad"];
const languages = ["Javascript", "Python", "PHP"];

console.log(food, cricketers, languages);

const person = {
  personName: "John Doe",
  age: 25,
  job: "Engineer",
};
const cpu = {
  processor: "Core i5",
  ram: "16 gb",
  storage: "512 gb",
};

const shoe = {
  brand: "Bata",
  type: "Formal",
  price: "3000 tk",
};

console.log(person, cpu, shoe);

console.log("*****************************************");

// Problem: Create a while loop which prints values from 10 to 50

for (let i = 10; i <= 50; i++) {
  console.log(i);
}

console.log("*****************************************");

// Create a for loop which prints values from 20 to 60

for (let i = 20; i <= 60; i++) {
  console.log(i);
}

console.log("*****************************************");

// Problem: Create a function of adding two numbers.

const addNumbers = (n1, n2) => {
  const num1 = parseFloat(n1);
  const num2 = parseFloat(n2);

  if (isNaN(num1) || isNaN(num2)) {
    return "Please, enter valid numbers";
  } else {
    return num1 + num2;
  }
};

console.log(addNumbers(15, "4"));

console.log("*****************************************");

// Problem: Create a function which returns a for loop which takes two parameter one is initial value & final value to return the list of number from initial to final value.

const numberPrinter = (n1, n2) => {
  const num1 = parseFloat(n1);
  const num2 = parseFloat(n2);

  if (isNaN(num1) || isNaN(num2)) {
    return "Please, enter valid numbers";
  } else {
    for (let j = num1; j <= num2; j++) {
      console.log(j);
    }
  }
};

numberPrinter(5, 10);

console.log("*****************************************");

// Problem: Create a function which return whether the year is leap year or not

const isLeapYear = (yyyy) => {
  const yr = parseFloat(yyyy);

  if (isNaN(yr)) {
    return "Please, enter a valid number.";
  }

  if (yr % 400 === 0 || (yr % 4 === 0 && yr % 100 !== 0)) {
    return `${yr} is a leap year.`;
  } else {
    return `${yr} is not a leap year.`;
  }
};

console.log(isLeapYear(2020));

console.log("*****************************************");

// Problem: Create a function which return whether the temperature is hot or cold (30 <=  is hot, 25 >= is cold , anyother value is normal)

const checkTemp = (temp) => {
  const t = parseFloat(temp);

  if (isNaN(t)) {
    return "Please, enter a valid temperature.";
  }

  if (t >= 30) {
    return "It is hot.";
  } else if (t >= 25) {
    return "It is normal temperature.";
  } else {
    return "It is cold.";
  }
};

console.log(checkTemp(25));

console.log("*****************************************");

// Problem: Create a function which returns whether the number is odd or even

const checkEvenOrOdd = (num) => {
  const n = parseFloat(num);

  if (isNaN(n)) {
    return "Please, enter a valid number.";
  }

  if (n % 2 === 0) {
    return `${n} is an even number.`;
  } else {
    return `${n} is an odd number.`;
  }
};

console.log(checkEvenOrOdd(56));

console.log("*****************************************");

// Problem: Splice and an given array - remove two items and adding two new elements

const drinks = ["coke", "pepsi", "fanta", "7up", "mojo"];

drinks.splice(1, 2, "sprite", "clemon");

console.log(drinks);

console.log("*****************************************");

// Problem: Reverse and sort an array where arr = [2,45,4,55,12,42,34,78]

const arr = [2, 45, 4, 55, 12, 42, 34, 78];
const arrCloned = [...arr];

const arrReversed = arr.reverse();
const arrSorted = arrCloned.sort((a, b) => a - b);

console.log("Reversed: ", arrReversed);
console.log("Sorted: ", arrSorted);

console.log("*****************************************");

// Problem: Create a object with car and add two function in there (called methods as well) and print out the the result calling two functions using this keyword as well

const car = {
  owner: "John",
  brand: "Toyota",
  model: "Prius",
  price: "32 Lakhs",
  desc: function () {
    return `${this.owner} has bought a car. It's ${this.brand} - ${this.model}.`;
  },
  color: function (col) {
    return `${col} ${this.brand} - ${this.model} looks better.`;
  },
};

console.log(car);
console.log(car.desc());
console.log(car.color("Black"));

console.log("*****************************************");

// Problem: Reverse an given string. Where, - let text = “I love coding” - after reverse a string output will be - ‘gnidoc evol i’

const txt = "I love coding";

const newTxtArray = txt.split("").reverse();
const length = newTxtArray.length;

let newTxt = "";

for (let i = 0; i < length; i++) {
  newTxt += newTxtArray[i];
}

console.log(newTxt);

console.log("*****************************************");

// Problem:  Create an array with list of items. Iterate the array to view the list of the items in the console using for loop.

const gadgets = [
  "desktop",
  "laptop",
  "camera",
  "speaker",
  "hard-drive",
  "mic",
  "vr-box",
  "smartwatch",
];

const gadgetsLength = gadgets.length;

for (let i = 0; i < gadgetsLength; i++) {
  console.log(gadgets[i]);
}
