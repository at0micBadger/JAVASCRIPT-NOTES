//PROGRAM FOR CONVERTING FARENHEIT AND CELSIUS TEMPERATURES
//PRESETS:
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Announce the program
console.log(' ');
console.log("Fahrenheit to Celsius Converter");
console.log(' ');
// Ask user which conversion they want
console.log(' ');
console.log(' ');
rl.question("Do you want to convert:\n1. Fahrenheit to Celsius\n2. Celsius to Fahrenheit\nEnter 1 or 2: ", (choice) => {
  if (choice === "1") {
    // Convert Fahrenheit to Celsius
    rl.question("Enter temperature in Fahrenheit: ", (input) => {
      const fahrenheit = parseFloat(input);
      const celsius = (fahrenheit - 32) * 5/9;
      console.log(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`);
      
      // Announce program closing
      console.log(' ');
      console.log("Program closing. Goodbye!");
      rl.close();
    });
  } else if (choice === "2") {
    // Convert Celsius to Fahrenheit
    rl.question("Enter temperature in Celsius: ", (input) => {
      const celsius = parseFloat(input);
      const fahrenheit = (celsius * 9/5) + 32;
      console.log(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
      
      // Announce program closing
      console.log(' ');
      console.log("Program closing. Goodbye!");
      rl.close();
    });
  } else {
    console.log("Invalid choice. Please enter 1 or 2.");
    
    // Announce program closing
    console.log(' ');
    console.log("Program closing. Goodbye!");
    rl.close();
    console.log(' ');
  }
});
