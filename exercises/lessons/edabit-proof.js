function getDay(day) {
  const splitDate = day.split('/');
  const dateDay = splitDate[1];
  const dateMonth = splitDate[0] - 1;
  const dateYear = splitDate[2];
  const birthday = new Date(Date.UTC(dateYear, dateMonth, dateDay));

  console.log(dateYear, dateMonth, dateDay);

  const weekday = birthday.getDay();

  const options = { weekday: 'long' };
  // console.log(new Intl.DateTimeFormat('en-US', options).format(birthday));
  console.log(birthday.toLocaleDateString('en-US', options));
}
// format: MM/DD/YYYY
getDay("12/07/2016");


// console.log('****************************')
// var Xmas95 = new Date('December 25, 1995 23:15:30');
// var weekday = Xmas95.getDay();

// var options = { weekday: 'long' };
// console.log(new Intl.DateTimeFormat('en-US', options).format(Xmas95));