const readline = require('readline');

const BORING_HOTEL = 'All Work and No play makes Jack a dull boy.';
const START_HERE = 'Welcome to the Overlook Hotel Main Lobby.';
const CLOSED_NOW = 'The hotel is closed. Have a slash_tastic day.';
const DEFAULT_LINES = 35;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printLines(count) {
  console.log(' ');
  for (let i = 0; i < count; i++) {
    console.log(BORING_HOTEL);
  }
  console.log(' ');
}

function askForLines() {
  rl.question(`Enter number of lines (press Enter for default ${DEFAULT_LINES}): `, (answer) => {
    const numLines = answer.trim() === '' ? DEFAULT_LINES : parseInt(answer);
    
    if (isNaN(numLines) || numLines < 0) {
      console.log('Invalid input. Using default.');
      printLines(DEFAULT_LINES);
    } else {
      printLines(numLines);
    }
    
    askToContinue();
  });
}

function askToContinue() {
  rl.question('Do you want to run again? (y/n): ', (answer) => {
    const choice = answer.trim().toLowerCase();
    
    if (choice === 'y' || choice === 'yes') {
      askForLines();
    } else if (choice === 'n' || choice === 'no') {
      console.log(' ');
      console.log(CLOSED_NOW);
      console.log(' ');
      console.log('Goodbye from the Overlook Hotel!');
      rl.close();
    } else {
      console.log('Invalid choice. Please enter y or n.');
      askToContinue();
    }
  });
}

function startProgram() {
  console.log(' ');
  console.log(START_HERE); 
  console.log(' ');
  askForLines();
}

startProgram();
