// code here, goodluck!!
"use strict";

const prompt = require("prompt-sync")(); // import prompt-sync supaya bisa menerima input dari terminal

/* 
=====================================
    1. Input Validation Functions
=====================================
*/
// Fungsi untuk meminta input angka yang valid
function getValidNumberInput(promptMessage) {
  while (true) {
    const input = prompt(promptMessage);
    const number = Number(input); // casting input yg awalnya String menjadi Number
    // cek apakah input valid (bukan NaN)
    if (
      !isNaN(number) &&
      (/^(0|[1-9]|[-]\d*)$/.test(input) || input.includes("."))
    ) {
      return number;
    }
    console.log("Input tidak valid! Masukkan angka yang benar.\n");
  }
}
// Fungsi untuk meminta input operator yang valid
function getValidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "*", "/", "%", "**"];
  while (true) {
    const op = prompt(promptMessage).trim(); // trim() untuk menghapus spasi berlebihan
    if (validOperators.includes(op)) {
      return op;
    }
    console.log(
      "Operator tidak valid! Gunakan salah satu di antara +,-,*,/,%,**"
    );
  }
}

/*
=====================================
    2. Basic Arithmetic Functions
=====================================
*/
let add = (a, b) => {
  return a + b;
};
let substract = (a, b) => {
  return a - b;
};
let multiply = (a, b) => {
  return a * b;
};
let divide = (a, b) => {
  if (b === 0) {
    return '"Error: Division by zero!"';
  }
  return a / b;
};
let modulo = (a, b) => {
  return a % b;
};
let power = (a, b) => {
  return a ** b;
};

/*
==========================
    3. Main Calculator
==========================
*/
console.log("\n===== Interactive Calculator =====");
console.log("... Welcome to Interactive Calculator ...\n");
console.log("You can calculate two numbers with some operators, such as:");
// list operasi yang tersedia
let menu = [
  "Addition (+)",
  "Substraction (-)",
  "Multiplication (*)",
  "Division (/)",
  "Modulation (%)",
  "Powering (**)",
];
for (let i = 0; i < menu.length; i++) {
  console.log(`${i + 1}. ${menu[i]}`);
}
// Input
while (true) {
  console.log("\n-- Please input valid numbers and operator! --");
  const num1 = getValidNumberInput("| Input first number: ");
  const operator = getValidOperatorInput(
    "| Input an operator (+,-,*,/,%,**): "
  );
  const num2 = getValidNumberInput("| Input second number : ");
  let result;
  // Digunakan switch untuk mencocokkan operasi dengan operator
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = substract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    case "%":
      result = modulo(num1, num2);
      break;
    case "**":
      result = power(num1, num2);
      break;
    default:
      result = undefined;
  }
  console.log(`\n[ Result ]: ${result}`);

  /*
  ==============================================
    4. Data Type Analysis & Conditional Output
  ==============================================
  */
  console.log("\n[ Analyzing The Result] :");
  if (typeof result === "number") {
    // positive or negative or zero
    if (result > 0) {
      console.log('"Positive number"');
    } else if (result < 0) {
      console.log('"Negative number"');
    } else {
      console.log('"Zero number"');
    }
    // integer or float
    console.log(Number.isInteger(result) ? "'Integer'" : "'Float'");
    // even or odd
    if (Number.isInteger(result) === "true") {
      if (result % 2 === 0) {
        console.log("'Even'");
      } else {
        console.log("'Odd'");
      }
    }
    if (result > 0 && result % 2 === 0) {
      console.log('"Positive and Even"');
    } else if (result < 0 && result % 2 === 0) {
      console.log('"Negative and Even"');
    } else if (result > 0 && result % 2 !== 0) {
      console.log('"Positive and Odd"');
    } else if (result < 0 && result % 2 !== 0) {
      console.log('"Negative and Odd"');
    }
  } else if (typeof result === "string") {
    console.log(`${result}`);
  } else {
    // if the result is null or undefined
    console.log(result ?? "Result is undefined or null, something went wrong!");
  }

  /*
  ================================
    5. Exit Mechanism
  ================================
  */
  const again = prompt("\nIngin menghitung lagi? (yes/no): ").toLowerCase();
  if (again === "no") {
    console.log("\nTerima Kasih telah mengunakan kalkulator ini!");
    break;
  }
}
