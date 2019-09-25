// Creating objects using the ‘new’ keyword
const a = new Object();
//This is the simplest way to create an empty object. 

a['name'] = 'Ali';


// Creating objects using object literal syntax
const b = {
  name: ''
};
// Or using empty bracket and adding on the go
const c = {};

c.name = 'Olga';

// adding using defineProperty method 
const d = {};

Object.defineProperty(d, 'name', {
  value: 'Mr gut'
})
//Using Object.assign() to create new objects


console.log('a.name:  ', a.name);
console.log("b.name:  '' <- is empty", b.name);
console.log('c.name:  ', c.name);
console.log('d.name:  ', d.name);
console.log(Array.isArray(a.name));
