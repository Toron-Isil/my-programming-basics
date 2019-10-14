// Define Objects

const obj = {
  counter: 0
}

// Define Setters

// reset
Object.defineProperty(obj, "reset", {
  get: function () {
    this.counter = 0;
  }
});

// increment
Object.defineProperty(obj, "increment", {
  get: function () {
    this.counter++;
  }
});

// decrement
Object.defineProperty(obj, "decrement", {
  get: function () {
    this.counter--;
  }
});

// subtract
Object.defineProperty(obj, "subtract", {
  set: function (value) {
    this.counter -= value;
  }
});

// add
Object.defineProperty(obj, "add", {
  set: function (value) {
    this.counter += value;
  }
});

// divide
Object.defineProperty(obj, "divide", {
  set: function (value) {
    this.counter /= value;                    // counter = 23.142857142857142
    this.counter *= 100;                      // counter = 2314.2857142857142 
    this.counter = Math.floor(this.counter);  // counter = 2314
    this.counter /= 100;                      // counter = 23.14
    // using  Math.floor() on this.counter - works! :)
  }

});

// multiply
Object.defineProperty(obj, "multiply", {
  set: function (value) {
    this.counter *= value;
  }
});

obj.add = 7;
obj.multiply = 4;
console.log(obj.counter);

obj.reset;
obj.add = 218;
obj.divide = 7;
obj.subtract = 8;

console.log(obj.counter);
// console.log(Math.floor(obj.counter));  // using  Math.floor() on the output

// ==========================================
console.log('\n ==========================================');

console.log('\n Target and Source \n');

const target = {
  name: 'Ali',
  age: 30,
  language: 'arabian'
};
const source = {
  name: 'Olga',
  city: 'Berlin'
}

const returnedTarget = Object.assign(target, source);

console.log(returnedTarget);