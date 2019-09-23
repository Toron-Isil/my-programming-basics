// exercise 1: Addition
// Write a program to add up the numbers 1 to 20.

const exercise1 = () => {
  let total = 0;

  for (let i = 1; i <= 20; i += 1) {
    total += i;
    console.log(`Addtion: total: ${total}, iteration (i): ${i}.`);

  }
  console.log(`Total = ${total}.`)
}

console.log('\n Exercise 1 "Addition"');
exercise1();


// ==========================
// exercise 2

const exercise2 = () => {

  for (let i = 0; i <= 5; i += 1) {

    if (i === 0) {
      console.log(`"There is no bottle of 🍺  on the wall."`);
    } else if (i === 1) {
      console.log(`"There is ${i} bottle of 🍺  on the wall."`);
    } else {
      console.log(`"There are ${i} bottles of 🍺  on the wall."`);
    }

  }
}

console.log('\n Exercise 2 : Bottles of 🍺  on the wall. \n');
exercise2();


// ==========================
// exercise 3 even/odd reporter
// For each iteration, it will check if the current number is even or odd, 
// and report that to the screen (e.g. "2 is even").
//   iterate from 0 to 20.

const exercise3 = () => {

  for (let i = 0; i <= 20; i += 1) {

    if (i % 2 === 0) {
      console.log(`i = ${i} and is even.`);
    } else {
      console.log(`i = ${i}`);
    }
  }

}

console.log('\n Exercise 3: The odd/even reporter.');
exercise3();

// ==========================
// Exercise 4 - Multiplication Tables.


// const exercise4 = () => {

//   let multiTab = 0;

//   for (let i = 0; i <= 10; i += 1) {

//     for (let m = 1; m <= 10; m += 1) { // m = Multiplier

//       multiTab = m * i;
//       console.log(`\t ${m} * ${i} = ${multiTab}`);
//     }
//   }

// }

// console.log('\n Exercise 4: Multiplication Tables.');
// exercise4();

// ==============================
// Exercise 5 : Average



const exercise5 = () => {
  const myNumbers = [90, 60, 77, 81, 65];
  let arrLength = myNumbers.length;
  let averageNum = 0;

  for (let i = 0; i < arrLength; i += 1) {
    averageNum += myNumbers[i];

  }
  averageNum /= arrLength;
  console.log(`The average of ${myNumbers} is ${averageNum}`);
}

console.log('\n Exercise 5: Average.');
exercise5();

// ===================================
//  6. - Fizz Buzz
//   integers from 1 to 100.
//   for multiples of three print "Fizz" 
//   for multiples of five print "Buzz"

// const exercise6 = () => {

//   for (let i = 1; i <= 100; i += 1) {

//     if ((i % 3 == 0) && i % 5 == 0) {
//       console.log('FizzBuzz');
//     }
//     else if (i % 3 == 0) {

//       console.log('Fizz');

//     } else if (i % 5 == 0) {

//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// console.log('\n Exercise 6 "Fizz Buzz"');
// exercise6();

// ===================================
//  7. - Sum of Multiples
//       Write a program to add the multiples of 3 and 5 under 1000


const exercise7 = () => {
  let threeFiveLessTsd = []; // [3, 8]
  let total = 0; // 8

  for (let i = 1; i < 1000; i += 1) { // 5

    if (i % 3 === 0) {
      total += i;
      threeFiveLessTsd.push(i);

    } else if (i % 5 === 0) {
      total += i;
      threeFiveLessTsd.push(i);
    }
  }
  console.log(`  multiples of 3 and 5 are:`);
  console.log(threeFiveLessTsd);
  console.log(`The Summary of all multiples of 3 and 5 is: ${total}.`);
}

console.log('\n Exercise 7, "multiples of 3 and 5 under 1000" \n');
exercise7();

// =====================================
// Exercise 8. friends and family -> Hello
// Bonus: print Index = Mike is at index 1 of my friends array

const exercise8 = () => {
  let arrFriendsFamily = ['Janni', 'Saskia', 'Bodo', 'Karel', 'Mam', 'Freya', 'Sandra'];

  for (let i = 0; i < arrFriendsFamily.length; i += 1) {
    console.log(`Hello ${arrFriendsFamily[i]}!`)
    console.log(`${arrFriendsFamily[i]} is at Index: ${i} of my friends array.`)
  }
}

console.log('\n Exercise 8 "Friends & Family, say Hello" \n');
exercise8();

// const exercise8b = () => {

//   let arrFriendsFamily = ['👩', '👸', '👴', '👨', '👵', '👧', '👽', '💁'];

//   for (let i = 0; i < arrFriendsFamily.length; i += 1) {
//     console.log(`\t 👋  ${arrFriendsFamily[i]}!`)
//     console.log(`${arrFriendsFamily[i]}  is at 📇 : ${i} of my friends array.`)
//   }

// }

// console.log('\n Exercise 8 special "Give a wink to Friends & Family" \n');
// exercise8b();

// =====================================
// Exercise Bonus -> 9.

// Write programs that produce the following outputs:
// 100 200 300 400 500 600 700 800 900 1000
// 1 2 4 8 16 32 64 128
// 0 2 4 6 8 10
// 3 6 9 12 15
// 9 8 7 6 5 4 3 2 1 0

const exerciseBonus1 = () => {
  let total = 0;
  let pushTotal = [];

  for (let i = 1; i <= 10; i += 1) {
    total = i * 100;
    pushTotal.push(total);
  }
  console.log(` This is what we got: \n ${pushTotal}.`);

}

console.log('\n Bonus:');
exerciseBonus1();
// ================
const exerciseBonus2 = () => {

  let pushTotal = [];

  for (let i = 1; i <= 128; i *= 2) {
    pushTotal.push(i);
  }
  console.log(` This is what we got by " * 2": \n ${pushTotal}.`);
}

console.log('\n Bonus2:');
exerciseBonus2();

//   0 2 4 6 8 10

const exerciseBonus3 = () => {

  let pushTotal = [];

  for (let i = 0; i <= 10; i += 2) {
    pushTotal.push(i);

  }
  console.log(` This is what we got by " + 2": \n ${pushTotal}.`);

}

console.log('\n Bonus3:');
exerciseBonus3();

//   3 6 9 12 15

const exerciseBonus4 = () => {

  let pushTotal = [];

  for (let i = 0; i <= 15; i += 3) {
    if (i === 0) {
    } else {
      pushTotal.push(i);
    }
  }
  console.log(` This is what we got by " + 3" (no zero): \n ${pushTotal}.`);
}

console.log('\n Bonus4:');
exerciseBonus4();

//   9 8 7 6 5 4 3 2 1 0

const exerciseBonus5 = () => {

  let pushTotal = [];

  for (let i = 9; i >= 0; i -= 1) {

    pushTotal.push(i);

  }
  console.log(` This is a countdown: \n ${pushTotal}.`);
  console.log(` This is a countdown: \n ${pushTotal.join(' ')}.`);
}

console.log('\n Bonus5:');
exerciseBonus5();

// =======================

// const isPalindrome = () => {

//   const yesNoPalind = ['', '', '', '', ''];
//   let palindromeTest = [];

//   for (let i = 0; i < isPalindrome.length; i += 1) {


//     if (isPalindrome === ???) {
//       console.log(`\n '${isPalindrome[i]}' is a Palindrome.`);
//     } else {
//       console.log(`\n '${isPalindrome[i]}' `);
//     }

//   }
// }

// console.log('\n is this Name a Palindrome?:');
// isPalindrome();



// console.log('reverseWords')  ??????

// function StringUtil() {

//   this.reverseWords = (str) => {
//     let result = "";
//     let wordArray = str.split();
//     for (let i = wordArray.length - 1; i >= 0; i--) {
//       result += wordArray[i] + " ";
//     }
//     return result.trim();
//   }

// }
