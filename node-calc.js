// PROGRAM OPENING - FOR THE HUMAN USER
console.log(' ');
console.log('=== WELCOME TO THE NODE CALCULATOR ===');
console.log(' ')

// PRESETS
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// RUN BY FUNCTION
function calculator() {
  rl.question("Enter first number: ", (num1Input) => {
    rl.question("Enter second number: ", (num2Input) => {
      rl.question("Enter operation (+, -, *, /): ", (operation) => {
        
        // Convert to numbers
        const num1 = parseFloat(num1Input);
        const num2 = parseFloat(num2Input);
        
        // Validate input
        if (isNaN(num1) || isNaN(num2)) {
          console.log("Please enter valid numbers!");
          rl.close();
          return;
        }
        
        // Perform calculation
        let result;
        switch(operation.trim()) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
          default:
            result = "Invalid operation";
        }
        
        console.log("Result: " + result);
        rl.close();
        
        console.log(' ');
        console.log('CLOSE PROGRAM');
        console.log(' ');
      });
    });
  });
}

// Run the calculator
calculator();


