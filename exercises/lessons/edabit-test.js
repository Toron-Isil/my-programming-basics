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

console.log('***********************************');

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

  console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')
  console.log('Keys and Values');
  function keysAndValues(obj) {

    let myNewArray = Object.keys(obj);
    console.log(myNewArray);

    myNewArray = myNewArray.map(key => {
      let newItem = [obj[key]]
      console.log(newItem)
      return newItem;
    })

    console.log(myNewArray);

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

console.log('***********************************');


const exerciseFour = function () {

  function comp(str1, str2) {
    const isTrue = (str1.length === str2.length);
    // console.log(isTrue);
    return isTrue;
  }

  comp("AB", "CD") // true

  comp("ABC", "DE") // false

  comp("hello", "edabit") // false


  console.log('**** exercise b **********')

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