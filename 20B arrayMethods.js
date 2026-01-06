//SOME ARRAY METHODS

const numberSet = [1, 3, 5, 7, 9, 2, 4, 6, 8];

// PUSH - ADDS VALUE ON END
numberSet.push(10);
console.log(numberSet);
console.log(numberSet[9]);

// POP - REMOVES VALUE FROM END
numberSet.pop();
console.log(numberSet);

// UNSHIFT - ADDS A VALUE TO THE FRONT OF AN ARRAY
numberSet.unshift(0);
console.log(numberSet);

// SHIFT - REMOVE A VALUE FROM THE FRONT OF AN ARRAY
numberSet.shift();
console.log(numberSet);

// REVERSE - REVERSES THE ORDER OF VALUES IN THE ARRAY
numberSet.reverse();
console.log(numberSet);


// INCLUDES - TRUE OR FALSE WHETHER A VALUE IS IN THE ARRAY
let z = numberSet.includes(9);
console.log(z);

// indexOf - GIVES THE INDEX OF A VALUE WITHIN THE ARRAY
let y = numberSet.indexOf(9);
console.log(y);

// SLICE - LISTS ARRAY VALUES AFTER A CERTAIN VALUE INDEX
const numbers2 = [34, 55, 95, 20, 15];
let n = numbers2.slice(2);
console.log(n);

// SLICE CAN BE DONE IN A RANGE
const numbers3 = [34, 55, 95, 20, 15];
let n2 = numbers3.slice(2,3,4);
console.log(n2);

// SPLICE CAN DO A RANGE OR SINGLE VALUE
const number_b = [34, 55, 95, 20, 15];
let b = number_b.splice(3, 1);
console.log(b);
	
	




