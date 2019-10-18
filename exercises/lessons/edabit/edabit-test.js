// const exerciseOne = function () {
//
//   function getDay(day) {
//     const splitDate = day.split('/');
//     const birthday = new Date(splitDate[2], splitDate[0] - 1, splitDate[1]);
//     const weekday = birthday.getDay();
//     const options = { weekday: 'long' };
//     console.log(birthday.toLocaleDateString('en-US', options));
//   }

//   getDay("12/07/2016");

//   // getDay("12/07/2016") ➞ "Wednesday"

//   // getDay("09/04/2016)" ➞ "Sunday"

//   // getDay("12/08/2011") ➞ "Thursday"

// };
// exerciseOne();

// console.log('***********************************');

// const exerciseTwo = function () {

//   function getMyDay(day) {
//     const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//     // const splitDay = day.split('/');
//     // //                           YYYY          MM             DD
//     // const birthday = new Date(splitDay[2], splitDay[0] - 1, splitDay[1]);

//     const birthday = new Date(day);
//     const weekday = birthday.getDay();
//     // console.log(splitDay);
//     console.log(birthday);
//     console.log(weekday);
//     console.log(weekdays[weekday]);
//   }


//   // MM DD YYYY
//   getMyDay("07/12/2016");

//   getMyDay("2016,7,13");

//   getMyDay("2016/7/14");
// };
// exerciseTwo();

console.log('********** exerciseThree *********');

const exerciseThree = function () {

  function objectToArray(obj) {

    let myNewArray = Object.keys(obj);
    console.log(myNewArray);

    myNewArray = myNewArray.map(key => {
      let newItem = [key, obj[key]]
      console.log(newItem)
      return newItem;
    })
    console.log(myNewArray);

    return myNewArray;
  }

  // examples: 
  objectToArray({
    D: 1,
    B: 2,
    C: 3
  }); // [["D", 1], ["B", 2], ["C", 3]]

  objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  }) // [["likes", 2], ["dislikes", 3], ["followers", 10]]

  console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* \n')

  console.log(' *-* Keys and Values *-* \n');

  function keysAndValues(obj) {

    let myNewArray = [];

    let myKeyArray = Object.keys(obj);

    myValueArray = myKeyArray.map(key => {
      let newItem = obj[key];
      return newItem;
    });

    myNewArray.push(myKeyArray, myValueArray);
    console.log('\t obj: \t\t', obj)
    console.log('\t myNewArray: ', myNewArray);
    return myNewArray;
  }

  keysAndValues({ a: 1, b: 2, c: 3 })
  // [["a", "b", "c"], [1, 2, 3]]

  keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
  // [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

  keysAndValues({ key1: true, key2: false, key3: undefined })
  // [["key1", "key2", "key3"], [true, false, undefined]]



};

exerciseThree();

console.log('********** exerciseFour *********');


const exerciseFour = function () {

  function comp(str1, str2) {
    const isTrue = (str1.length === str2.length);
    console.log(isTrue);
    return isTrue;
  }

  comp("AB", "CD") // true

  comp("ABC", "DE") // false

  comp("hello", "edabit") // false


  console.log('**** exercise 4b **********')

  function isEqual(num1, num2) {
    const isTrue = (num1 === num2);
    // console.log(isTrue);
    return isTrue;
  }

  isEqual(5, 6) // false

  isEqual(1, 1) // true

  isEqual("1", 1) // false

};

exerciseFour();

console.log('********** exerciseFive *********');


const exerciseFive = function () {

  function reverse(arr) {
    console.log('    ', arr);
    const reversed = arr.reverse();
    console.log(' -> ', reversed);

    return reversed;
  }

  reverse([1, 2, 3, 4]) // [4, 3, 2, 1]

  reverse([9, 9, 2, 3, 4]) // [4, 3, 2, 9, 9]

  reverse([]) // []

  console.log('  ******* exercise 5b *******');

  console.log('   search Index of an Item')

  function search(arr, item) {
    const indexOfSearched = arr.indexOf(item);
    console.log(arr, item, ' -> ', indexOfSearched)
    return indexOfSearched;
  }

  search([1, 2, 3, 4], 3) // 2

  search([2, 4, 6, 8, 10], 8) // 3

  search([1, 3, 5, 7, 9], 11) // -1


};

exerciseFive();

console.log('********** exerciseSix *********');


const exerciseSix = function () {

  class Circle {
    constructor(radius) {
      this.radius = radius;
    }

    getArea() { return Math.PI * Math.pow(this.radius, 2) };
    getPerimeter() { return 2 * Math.PI * this.radius };

  }

  //unquote and use run to test these cases
  /*let q = new Circle(4.44);
  console.log(q.getArea());
  console.log(q.getPerimeter());
  */

  let circy = 0;
  circy = new Circle(11);
  circy.getArea();
  console.log('get Area \t of radius   11 : ', circy.getArea());
  // Should return 380.132711084365

  circy = new Circle(4.44);
  circy.getPerimeter();
  console.log('get Perimeter \t of radius 4.44 : ', circy.getPerimeter());

  // Should return 27.897342763877365

};

exerciseSix();

console.log('*********** END ************');
