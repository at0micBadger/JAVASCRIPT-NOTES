// OBJECT LITERAL BASIC TYPE:
const games = {
  soulslike: 'bloodborne',
  rpg: 'Fallout_4',
  shooter: 'Borderlands'
}
let gamelist = games;
console.log(gamelist);
console.log(gamelist.soulslike);

// OBJECT WITHIN OBJECT:
const person = {
  name: 'David Alan',
  age: 30,
  occupation: 'welder',
  address: {
    street: '123 alphabet lane',
    city: 'Boston',
    state: 'MA'
  }
}

// PRINTING OUT VALUES IN AN ARRAY:
let names = person;
console.log(names);
console.log(names.address.city);

//UPDATING AND PRINTING OUT A VALUE:
person.name = 'Jane Roe';
console.log(names.name);

//REMOVING A PROPERTY WITHIN AN ARRAY:
// CAN BE DELETED FROM EITHER names OBJECT OR person VARIABLE
// THESE ARE DIFFERENT AREAS OF SCOPE
delete person.address.street;
console.log(names);

// ADDING A PROPERTY:
person.hasChildren = true;
console.log(names);




