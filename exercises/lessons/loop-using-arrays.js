
// 1. Lesson
const firstLesson = function () {

  console.log('\n********  1. Lesson  ********');

  const sumOfNumbers = numbers => {

    console.log('\ninput:', numbers);

    let sum = 0;

    for (i = 0; i < numbers.length; i++) {
      sum += numbers[i];
      console.log('  sum: ', sum, '\tnumbers[i]:', numbers[i]);

    }
    const myNumbers = numbers[0] + ' + ' + numbers[1] + ' + ' + numbers[2];
    return console.log(`The nummbers: ${myNumbers} = ${sum}`);

  };

  // sumOfNumbers([23, 42, 75]);
  // sumOfNumbers([17, 86, 12]);
  sumOfNumbers([-53, 123, -11]);
};

firstLesson();


// 2. Lesson    //  Hello Friend:
//  Create an array filled with your friends' and family's names. 
// Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. 
// Bonus: Print the indexes of each item in the array. Expected output example: 

const secondLesson = function () {

  console.log('\n********  2. Lesson  ********');

  const helloFriend = friends => {
    console.log('\nfriends: ', friends);

    for (i = 0; i < friends.length; i++) {

      const firstName = friends[i].split(' ');
      // const greeting = console.log(`\nHello ${firstName[0]} !`);
      console.log(`\nHello ${firstName[0]} !`);

      console.log(`${firstName[0]} is at index ${i} of my friends array.`)
      console.log('My friends full name is', friends[i]);
      // return greeting;

    }

  };

  helloFriend(['Alec Sander', 'Marie Anna', 'Frank Enstein']);

};
secondLesson();


// 3. Lesson  //  City Names: 
// Create an array of city names. 
// Loop through the array and add the city names to a string. 
// Example of expected output: "Berlin, Paris, Prague, Rome".
const thirdLesson = function () {

  console.log('\n********  3. Lesson  ********');

  const cityNames = function (cities) {
    let citiesAsString = '';
    console.log('Cities in an Array \n', cities);
    for (i = 0; i < cities.length; i++) {
      // i = 0
      if (i === 0) {
        citiesAsString = cities[i];
      } else if (i > 0) {
        citiesAsString += ', ' + cities[i];
      }
    }
    console.log('Cities as String:\n\t', citiesAsString);
  };

  cityNames(['Beijing', 'Tokyo', 'Melbourne', 'Katmandu']);

};

thirdLesson();


// 4. Lesson   // Odds and Evens:
// Create a program that changes a given array by adding 1 to each odd integer 
// and subtracting 1 from each even integer. Examples:
// [3, 5, 2, 4]➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20]➞ expected output: [5, 10, 9, 19]

const fourthLesson = function () {

  console.log('\n********  4. Lesson  ********');

  const oddsAndEvens = function (oddEven) {

    const oddEvenCallback = (oddEven) => {

      let number = 0;
      if (oddEven % 2 === 0) {
        number = oddEven - 1;
      } else if (oddEven % 2 !== 0) {
        number = oddEven + 1;
      }
      // console.log('number:', number);

      return number;
    }
    console.log('Number before: ', oddEven);
    console.log('Number after : ', oddEven.map(oddEvenCallback), '\n');

  };

  oddsAndEvens([3, 5, 2, 4]);
  oddsAndEvens([6, 9, 10, 20]);

};

fourthLesson();

// 5. Lesson
// Capitalize. 
// Create a program that capitalizes the first letter of each element in an array of names. 
// Examples:
// ->  ["matt", "sara", "lara"]➞["Matt", "Sara", "Lara"]
// ->  ["samuel", "MARIA", "luke", "mary"]➞["Samuel", "Maria", "Luke", "Mary"]
// ->  ["Cynthia", "Karen", "Jane", "Carrie"]➞["Cynthia", "Karen", "Jane", "Carrie"]
// Note: 
// Keep names in the same order and make sure that only the first lesson of the name is capitalized
// (See "Maria" in the second above example).

const fifthLesson = function () {

  console.log('\n********  5. Lesson  ********');

  const capitalize = function (name) {

    const capName = name => {

      return name[0].toLocaleUpperCase() + name.substr(1).toLowerCase();
    };

    console.log('before: ', name);
    console.log('after : ', name.map(capName), '\n');

  };

  capitalize(["matt", "sara", "lara"]);
  capitalize(["samuel", "MARIA", "luke", "mary"]);
  capitalize(["Cynthia", "Karen", "Jane", "Carrie"]);

};

fifthLesson();

// 6. Lessson    //  No Duplicates!
//  A set is a collection of unique items. 
// A set can be formed from an array by removing all duplicate items. 
// Create a program which transforms an array into a set of unique values. 
// See the examples below. Example:
// ->  [1, 4, 4, 7, 7, 7]   ➞[1, 4, 7]
// ->  [1, 6, 6, 9, 9]      ➞[1, 6, 9]
// ->  [2, 2, 2, 2, 2, 2]   ➞[2]
// ->  [5, 10, 15, 20, 25]  ➞[5, 10, 15, 20, 25]


const sixthLesson = function () {

  console.log('\n********  6. Lesson  ********');

  const noDuplicates = (arrNumbers) => {

    const noDupCallback = (arrNumbers) => {
      let number = 0;

      for (i = 0; i < arrNumbers.length; i++) {
        console.log('baddabing')
      }

      return number;

    };
    // console.log('number:', number);

    console.log('Array before: ', arrNumbers);
    console.log('Array after : ', arrNumbers.map(noDupCallback), '\n');

  };

  noDuplicates([1, 4, 4, 7, 7, 7]);
  noDuplicates([1, 6, 6, 9, 9]);
  noDuplicates([2, 2, 2, 2, 2, 2]);
  noDuplicates([5, 10, 15, 20, 25]);

};

sixthLesson();

// 7. Lesson
const seventhLesson = function () {

  console.log('\n********  7. Lesson  ********');

  const repeatIt = function () {



  };

  repeatIt();

};

seventhLesson();


// bonus
const bonus = function () {

  console.log(`\n********     Bonus   ********`);

  const chooseTheLoop = function () {


  };

  chooseTheLoop();

};

bonus();


// another bonus of freecodecamp
// map takes an array and function as argument 

const bonusZ = function () {
  console.log(`\n********    Bonus Z  ********`);

  let arr = [1, 2, 3, 4, 5];

  function map(arr, mapFunc) {

    const mapArr = []; // empty array        
    // loop though array    
    for (let i = 0; i < arr.length; i++) {
      const result = mapFunc(arr[i], i, arr);
      mapArr.push(result);
    }
    return mapArr;
  }

  const squareArr2 = map(arr, num => num ** 2);

  console.log(squareArr2); // prints [1, 4, 9, 16, 25]

};

bonusZ();