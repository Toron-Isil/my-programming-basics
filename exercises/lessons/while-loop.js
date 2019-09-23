console.log('Document= while-loops.js \n');

// console.log('1. Exercise: \n');

// 1. Run along

// let rounds = 15;

// while (!rounds <= 0) {

//   console.log(rounds, ' left');
//   rounds -= 1;
// }

// console.log('loop is over.');

// ======================================


// 2. City Names

// console.log(' ============================= ')
// console.log('2. Exercise: \n');

// console.log('where do you want to go?');

// let city = ['Berlin', 'Prague', 'Vienna', 'Rome', 'Lissabon', 'Madrid', 'Amsterdam', 'Paris'];
// console.log(city.length);
// let cityIndexNo = 0;

// while (cityIndexNo < city.length) {
//   console.log('I want to visit ', city[cityIndexNo], ' some day.');
//   cityIndexNo += 1;
//   // break;
// }

// 3. Odds and Evens

// Create a program that changes a given array by adding 1 to each odd integer 
// and subtracting 1 from each even integer. Examples:
// [3, 5, 2, 4]➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20]➞ expected output: [5, 10, 9, 19]

console.log(' ============================= ')
console.log('3. Exercise: \n');

let myNums = [5, 23, 12, 44, 53, 3, 67, 19];
console.log('My Numbers: ', myNums);
let indexNo = 0;

while (indexNo < myNums.length) {

  if (myNums[indexNo] % 2 == 0) {
    newNum = myNums[indexNo] - 1;
    console.log('\t', myNums[indexNo], '\t -1 ', newNum);

  } else {
    newNum = myNums[indexNo] + 1;
    console.log('\t', myNums[indexNo], '\t +1 ', newNum);
  }

  indexNo += 1;
  // break;
}

console.log('\n 3. Exercise-loop is over.');

