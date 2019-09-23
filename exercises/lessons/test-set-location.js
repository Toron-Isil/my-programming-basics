function cityLocation() {
  var city = "Paris";

  return {
    get: function () { console.log(city); },
    set: function (newCity) { city = newCity; }
  };
}

var myLocation = cityLocation();

myLocation.get();           // output: Paris
myLocation.set('Sydney');
myLocation.get();           // output: Sydney

// console.log('_______________________'); /////////////
// // ----------------------------------------------- //
//
// function showMessage(message) {
//   setTimeout(function () {
//     console.log(message);
//   }, 3000);
// }

// showMessage('Function called 3 seconds ago');

console.log('_______________________'); /////////////
// ----------------------------------------------- //

// function myFunction(x, y = 10) {
//   // y is 10 if not passed or undefined
//   return x + y;
// }
// console.log(myFunction(5)); // will return 15

// console.log('_______________________'); /////////////
// // ----------------------------------------------- //

function buildContor(i) {
  var contor = i;
  var displayContor = function () {
    console.log(contor++);
    contor++;
  };
  return displayContor;
}

var myContor = buildContor(1);
myContor(); // 1
myContor(); // 2
myContor(); // 3

// new closure - new outer scope - new contor variable
var myOtherContor = buildContor(10);
myOtherContor(); // 10 
myOtherContor(); // 11

// myContor was not affected 
myContor(); // 4

console.log('_______________________'); /////////////
// ----------------------------------------------- //

// version 1

function b() {
  var myVar;
  console.log(myVar);
}

function a() {
  var myVar = 2;
  console.log(myVar);
  b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);

console.log('_______________________'); /////////////
// ----------------------------------------------- //

// version 2

function a() {
  var myVar = 2;
  console.log(myVar);

  function b() {
    var myVar;
    console.log(myVar);
  }

  b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);


console.log('_______________________'); /////////////
// ----------------------------------------------- //

function fullName(firstName, lastName, callback) {
  console.log("My name is " + firstName + " " + lastName);
  callback(lastName);
}

var greeting = function (ln) {
  console.log('Welcome Mr. ' + ln);
};

fullName("Jackie", "Chan", greeting);

console.log('_______________________'); /////////////
// ----------------------------------------------- //

function publish(item, author, callback) {   // Generic function with common data
  console.log(item);
  var date = new Date();

  callback(author, date);
}

function messages(author, time) {   // Callback function with specific data
  var sendTime = time.toLocaleTimeString();
  console.log("Sent from " + author + " at " + sendTime);
}

function articles(author, date) {   // Callback function with specific data
  var pubDate = date.toDateString();
  console.log("Written by " + author);
  console.log("Published " + pubDate);
}

publish("How are you?", "Monique", messages);

publish("10 Tips for JavaScript Developers", "Jane Doe", articles);

console.log('_______________________'); /////////////
// ----------------------------------------------- //
