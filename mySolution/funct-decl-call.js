var x = 3;

function exampleFunction(myNumber) {
  let summ = (myNumber += x);
  console.log(summ);
}

exampleFunction(6);

/*
var x = 3;

 function function(myNumber) {   // Don't use 'function' as a name for a function
  let summ = (myNumber += x);
  console.log(summ);
}

function(6);                     // you can't call the function "function" this way!
*/