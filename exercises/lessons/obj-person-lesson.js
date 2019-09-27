// change this code to make it working: blush:

// var persons = [{ firstName: '', lastName: '', age: 0, employed: '' }];
let persons = [];

let addPerson = (pFirstName, pLastName, pAge, pEmployment) => {

  persons.push({ firstName: pFirstName, lastName: pLastName, age: pAge, employed: pEmployment });
};

// addPerson('Thomas', 'Anders', 36, true);

addPerson('Thomas A.', 'Anderson', 36, true);

console.log(persons);

addPerson('Thomas', 'Crown', 54, false);
addPerson('Jackie', 'Brown', 48, true);
addPerson('Silent', 'Bob', 42, false);
addPerson('Benjamin', 'Button', 24, true);

console.log(persons);

  // 1 - change what needed to ADD other more people to your array of objects, you need at lest 5 people
  // 2 - Find how many people has a job
  // 3 - display only the people are over 30 and has no job
