// Node.js version using readline for command-line input
// Run this with: node app.js
// This version doesn't use custom functions - just variables and sequential code

const readline = require('readline');

// Create interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Variables to store user information
let name = '';
let age = '';
let occupation = '';

console.log(' ');
console.log('=== User Information Form ===\n');

// Get name
rl.question('Enter your name: ', (answer) => {
    name = answer;
    
    // Get age
    rl.question('Enter your age: ', (answer) => {
        age = answer;
        
        // Get occupation
        rl.question('Enter your occupation: ', (answer) => {
            occupation = answer;
            
            // Display the collected information
            console.log('\n=== Your Information ===');
            console.log(`Name: ${name}`);
            console.log(`Age: ${age}`);
            console.log(`Occupation: ${occupation}`);
            console.log('========================\n');
            
            // Close the readline interface
            rl.close();
        });
    });
});
