// TWO STYLES OF DEFINING AN ARRAY - BOTH VALID
const numberSet = [3, 5, 7, 2, 4, 6];
console.log(numberSet);
console.log(numberSet[0], numberSet[2], numberSet[4]);

const games = new Array('dark_souls', 'darkSouls3', 'bloodborne');
console.log(games);
console.log(games[1]);


// USE OF VARIABLES WITH ARRAYS
let x = `my favorite game is: ${games[2]}.`;
console.log(x);


// USE OF THE .length METHOD
let y = `The number of games: ${games.length}`;
console.log(y);

// CHANGING A VALUE
games[1] = 'Elden_Ring';
console.log(games);

//ADDING ANOTHER ELEMENT TO THE ARRAY
games[games.length] = 'darkSouls3';
console.log(games);

let z = `number of games currently: ${games.length}`;
console.log(z);


// NAME REARRANGEMENT: TURNS JIM MORRISON INTO MR MOJO RISIN

const rockStar = ['j','i','m','m','o','r','r','i','s','o','n'];

let rockStar2 = rockStar[3] + rockStar[5] + " " + rockStar[2] + rockStar[4] + rockStar[0] + rockStar[9] + " " + rockStar[6] + rockStar[1] + rockStar[8] + rockStar[7] + rockStar[10];

console.log(rockStar2);









