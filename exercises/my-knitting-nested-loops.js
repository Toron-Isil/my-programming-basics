const pipes = () => {
  let stitches = '';

  for (let i = 0; i < 4; i += 1) {

    stitches = '';

    for (let j = 0; j < 5; j += 1) {
      stitches += '| ';
    }
    console.log(stitches);
  }
}
console.log(' Pipes')
pipes();

// ================================
// expected
//  - | - | -
//  | - | - |
//  - | - | -

const dashPipes = () => {

  let pipeDash = "";

  for (let i = 0; i < 3; i += 1) {

    pipeDash = "";

    for (let j = 0; j < 5; j += 1) {

      if (i % 2 === 0 && j % 2 === 0) {
        pipeDash += '- ';
      } else if (i % 2 === 0 && j % 2 !== 0) {
        pipeDash += '| ';
      } else if (i % 2 !== 0 && j % 2 !== 0) {
        pipeDash += '- ';
      } else if (i % 2 !== 0 && j % 2 === 0) {
        pipeDash += '| ';
      }

    }
    console.log(pipeDash);
  }
}
console.log('\n dashPipes')
dashPipes();

/// special Pipe Dash

const dashPipesSpecial = () => {

  let pipeDash = "";

  for (let i = 0; i < 3; i += 1) {

    pipeDash = "";

    for (let j = 0; j < 5; j += 1) {

      if ((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)) {
        pipeDash += '― ';
      } else if ((i % 2 === 0 && j % 2 !== 0) || (i % 2 !== 0 && j % 2 === 0)) {
        pipeDash += '꣏ ';
      }

    }
    console.log(pipeDash);
  }
}
console.log('\ndashPipes Special \n')
dashPipesSpecial();





// ============================
//  I need some stars

const stars = () => {

  let arrStars = [];

  for (let i = 0; i < 4; i += 1) {

    arrStars.push('⭐ ');
    console.log(arrStars.join(' '));
  }
}
console.log('\n\n Pipes \n')
stars();

//  ==================================
//  expected output:
//  □ □ □ ■ □ □ □
//  □ □ ■ ■ ■ □ □
//  □ ■ ■ ■ ■ ■ □
//  ■ ■ ■ ■ ■ ■ ■

const pyramid = () => {

  let brickByBrick = '';
  let spaceNo = 3;
  let brickNo = 1;

  for (let i = 0; i < 4; ++i) {
    brickByBrick = '';

    brickByBrick = '□ '.repeat(spaceNo);  // □ * 3 (spaceNo)
    // console.log('i=', i, '_ spaceNo=', spaceNo, '_ brickNo:', brickNo);
    brickByBrick += '■ '.repeat(brickNo);
    brickByBrick += '□ '.repeat(spaceNo);

    console.log(brickByBrick);
    spaceNo -= 1;
    brickNo += 2;
  }
}
console.log('\n\n Cheops \n')
pyramid();

// Numbers in Strings
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
// numInStr(["abc", "abc10"]) ➞["abc10"]
// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞["ab10c", "a10bc"]
// numInStr(["this is a test", "test1"]) ➞["test1"]

const numbersInStrings = () => {

  const arrStrings = ["abc", "ab10c", "a10bc", "bcd"];
  let arrWithNumbers = [];

  // for (i = 0; i < arrStrings.length; i += 1) {

  //   if () {

  //   }
  // }



  console.log(arrWithNumbers);
}
console.log('')
numbersInStrings();