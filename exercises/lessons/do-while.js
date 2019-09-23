// Do ... while

// 1. sumOf Numbers

console.log(' \n =============================  \n')
console.log('1. Do...while -Exercise: \n');

const myNumbers = [3, 45, 76, 9, 36, 19, 87];
let myIndexNo = 0;
let sumOfNumbers = 0;

console.log(myNumbers);

do {
  oldSumNumbers = sumOfNumbers;
  sumOfNumbers += myNumbers[myIndexNo];

  if (myNumbers[myIndexNo] === sumOfNumbers) {

    console.log(sumOfNumbers);
  } else {
    console.log(oldSumNumbers, ' + ', myNumbers[myIndexNo], ' = ', sumOfNumbers, '↴');
    console.log('  ↙  ⟵   ⟵   ⟵  ↙');
    // console.log(' ↓');
  }
  myIndexNo += 1;

} while (myIndexNo < myNumbers.length);

console.log('Summary of all my Numbers = ', sumOfNumbers);


console.log('\n 1. Exercise-loop is over.');

// ================================================

// 2. Add it up! Create a program that adds numbers from 1-20 together using a while loop.

console.log(' \n =============================  \n')
console.log('2. Do...while -Exercise: \n');

const betweenNumber = [1, 20];
let loopNumber = betweenNumber[0];
let addNumber = 0;

console.log('Begin: ', betweenNumber[0], ', end is: ', betweenNumber[1], '. \n');

do {
  cacheNumb = addNumber;

  addNumber += loopNumber;

  console.log('Loop:', loopNumber, ' \[', loopNumber, ' + ', cacheNumb, ' = ', addNumber, '\]');
  // console.log();
  loopNumber += 1;

} while (loopNumber <= betweenNumber[1]);

console.log('Summary of all my Numbers = ', addNumber);

console.log('\n 2. Exercise-loop is over.');

// 3. Capitalize

console.log(' \n =============================  \n')
console.log('3. Do...while -Exercise: \n');

const takeNames = ['samuel', 'MARIA', 'luke', 'mary', 'eVa', 'jenNa', 'MIckey'];
let outputNames = [];
let nameIndex = 0;

do {
  let capNames = takeNames[nameIndex][0].toLocaleUpperCase() + takeNames[nameIndex].substring(1).toLocaleLowerCase();
  outputNames.push(capNames);
  nameIndex += 1;

} while (nameIndex < takeNames.length);

console.log('List of capitalized names: ', outputNames);

console.log('\n 3. Exercise-loop is over.');

//  ====================================
//  4. No Duplicates! -> loop in a loop?!  ;)
//   [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
//   [1, 6, 6, 9, 9] ➞ [1, 6, 9]
//   [2, 2, 2, 2, 2, 2] ➞ [2]
//   [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]


console.log(' \n =============================  \n')
console.log('4. Do...while -Exercise: \n');


// const mayDoubleNum1 = [1, 4, 4, 7, 7, 7];
// console.log('Original numbers: ', mayDoubleNum);
// let noDoubleNum1 = [];

// do {
//   let keepDouble = mayDoubleNum1.forEach
//     noDoubleNum.push(keepDouble);

// } while ();

// https://www.w3resource.com/javascript-exercises/javascript-array-exercise-20.php
// 

function findDuplicates(data) {

  let result = [];

  data.forEach(function (element, index) {

    // Find if there is a duplicate or not
    if (data.indexOf(element, index + 1) > -1) {

      // Find if the element is already in the result array or not
      if (result.indexOf(element) === -1) {
        result.push(element);
      }
    }
  });

  return result;
}

console.log(findDuplicates([])); // []
console.log(findDuplicates([1, 1, 1])); // [1]
console.log(findDuplicates([1, 2, 3, 1, 2, 1])); // [1, 2]