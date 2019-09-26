// Creating objects using the ‘new’ keyword
const a = new Object();
//This is the simplest way to create an empty object. 

a['name'] = 'Ali';


// Creating objects using object literal syntax
const b = {
  name: ''
};
// Or using empty bracket and adding on the go
const c = {};

c.name = 'Olga';

// adding using defineProperty method 
const d = {};

Object.defineProperty(d, 'name', {
  value: 'Mr gut'
})
//Using Object.assign() to create new objects


console.log('a.name:  ', a.name);
console.log("b.name:  '' <- is empty", b.name);
console.log('c.name:  ', c.name);
console.log('d.name:  ', d.name);
console.log(Array.isArray(a.name));


//  ==================================================

console.log(' \n ======================================= \n');

// Easy one
// 1 - Creating objects using the ‘new ’ keyword
// 2 - Creating objects using literal notation
// 3 - Creating objects using the object constructor
// 4 - Adding properties to each object type
// 5 - Adding methods to each object type
// ----------------------------------------------------------------------

// Second one
// change this code to make it working: blush:

// const person;
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.employed);

// 1.

const person = new Object();

person.firstName = 'Bashira';
person.lastName = 'Shazam';
person.birthYear = 1991;
person.age = '';
person.employed = 'Fairy';
person.pets = [];


let addPets = (pet, name) => {
  idxPet = person.pets.length;
  person.pets[idxPet] = { pet: pet, name: name };
};

addPets('cat', 'Lilly');
addPets('parrot', 'Cpt. Hook');

let age = () => {
  let today = new Date();
  return today.getFullYear() - person.birthYear;
};
age();
person.age = age();


console.log('\t First name: ', person.firstName);
console.log('\t Last name:  ', person.lastName);
console.log('\t Age:        ', person.age);
console.log('\t Employed:   ', person.employed);
console.log('\t Pets:       ', person.pets);
console.log('\t Pets:       ', person.pets[0]);
console.log('\t Pets:       ', person.pets[1]);

// ========================================

Object.defineProperties(personB, {

  firstName: {
    value: "Matthew"
  },
  personB.lastName = 'Pauly',
  personB.birthYear = 1961,
  personB.age = '',
  personB.employed = 'Wizzard',
  personB.pets = []
}

  // 1 - change what needed to ADD other more people to your array of objects, you need at lest 5 people
  // 2 - Find how many people has a job
  // 3 - display only the people are over 30 and has no job

