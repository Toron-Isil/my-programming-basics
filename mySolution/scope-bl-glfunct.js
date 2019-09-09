// About Scope, Block, global functions and  variable declaration

// Cause the "var"iable declaration is outside a function (or other "blocks"),
// the varialbe is a global variable
var x = "declared outside function";

// function declaration
//    name of the function
//            ▼
function exampleFunction() {        //  Block begins with {

  console.log("Inside function");
  console.log(x);
}                                   //  Block ends with   }

// function call
//      ▼
exampleFunction();

console.log("Outside function");
console.log(x);
