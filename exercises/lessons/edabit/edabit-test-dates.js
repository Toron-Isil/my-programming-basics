function getDay(day) {
  const splitDate = day.split('/');
  const dateDay = splitDate[1] * 1;
  const dateMonth = splitDate[0] - 1;
  const dateYear = splitDate[2] * 1;
  const birthday = new Date(Date.UTC(dateYear, dateMonth, dateDay, 3, 0, 0));
  const weekday = birthday.getDay();
  const options = { weekday: 'long' };
  return birthday.toLocaleDateString('en-US', options);
}

getDay("12/07/2016");

getDay("09/04/2016");

getDay("12/08/2011");


//  ////////////////////////////////////////////////////////////////

console.log('**************************************')

/* You are to read each part of the date into its own integer type variable. The year should be a 4 digit number. You can assume the user enters a correct date (no error checking required).
Determine whether the entered date is a magic date. Here are the rules for a magic date:
mm * dd is a 1-digit number that matches the last    digit of yyyy or
mm * dd is a 2-digit number that matches the last 2 digits of yyyy or
mm * dd is a 3-digit number that matches the last 3 digits of yyyy
The program should then display true if the date is magic, or false if it is not.

Magic("1 1 2011") ➞ true
Magic("4 1 2001") ➞ false
Magic("5 2 2010") ➞ true
Magic("9 2 2011") ➞ false

*/

const Magic = (date) => {
  const splitDate = date.split(' ');
  const arrMonth = splitDate[0];    // 5
  const arrDay = splitDate[1];      // 15
  const arrYear = splitDate[2];     // 1975

  console.log('\n arrMonth: ', arrMonth, '\t arrDay: ', arrDay, '\t arrYear: ', arrYear);
  // console.log('Typo of arrDay', typeof arrDay);
  // console.log('Typo of arrMonth', typeof arrMonth);
  const compareNum = arrMonth * arrDay;  // 5 * 15 (= 75)
  // console.log('compareNum', compareNum);               // 75
  // console.log('Typo of compareNum: ', typeof compareNum);

  console.log(date, splitDate);

  // syntax: str.endsWith(searchString[, length])
  console.log('compareNum (toString) length', compareNum.toString().length);
  const isMagic = arrYear.endsWith(compareNum);
  console.log(isMagic);

  return isMagic;

  // character = str.charAt(index)

};

Magic("1 1 2011"); // true

// Magic("4 1 2001"); // false

// Magic("5 2 2010"); // true

Magic("9 2 2011"); // false

Magic("12 29 1348"); // true

Magic("12 29 1848"); // false