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

function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
console.log(myFunction(5)); // will return 15

console.log('_______________________'); /////////////
// ----------------------------------------------- //

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