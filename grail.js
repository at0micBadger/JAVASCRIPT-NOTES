// Import readline module for input
const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function to ask questions
function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Main function (using async/await)
async function main() {
    // OPENING
    console.log("\nBEGIN PROGRAM.\n");
    
    // THIS SHOULD BE OBVIOUS
    console.log("\nThe guardian challenges you with three questions.\n");
    
    // COLLECT INFO 1
    console.log("\nWHAT IS YOUR NAME?");
    console.log("(The brave knight should answer and hit return, please.)\n");
    const name_g = await ask("> ");
    
    // COLLECT INFO 2
    console.log("\nWHAT IS YOUR QUEST?");
    console.log("(The brave knight should answer and hit return, please.)\n");
    const quest_g = await ask("> ");
    
    // COLLECT INFO 3
    console.log("\nWHAT IS YOUR FAVORITE COLOR?");
    console.log("(The brave knight should answer and hit return, please.)\n");
    const color_g = await ask("> ");
    
    // ANSWERS
    console.log("\nYOU HAVE ANSWERED:");
    console.log(`\n\tNAME: ${name_g}`);
    console.log(`\tQUEST: ${quest_g}`);
    console.log(`\tCOLOR: ${color_g}\n`);
    
    // CLOSING
    console.log("YOU HAVE CHOSEN WISELY, BRAVE KNIGHT.");
    console.log("Please turn left at the deadly rabbit and right at the giant horned monster.\n");
    
    console.log("\nEND PROGRAM.\n");
    
    // Close the readline interface
    rl.close();
}

// Run the program
main();
