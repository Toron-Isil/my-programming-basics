
var cake = { typeOf: 'chocolate', veggy: true, difficulty: 'easy' };

console.log("\n what's inside 'cake': ", cake);
console.log('\n is the cake veggy?: ', cake.veggy);

console.log(' is "veggy" in "cake"? ', 'veggy' in cake);
// expected output: true

console.log("\n let's delete veggy.");
delete cake.veggy;
if ('veggy' in cake === false) {
  console.log(' create "veggy" again, but with "false" ... ');
  cake.veggy = false;
}

console.log('\n is the cake veggy?: ', cake.veggy);
// expected output: "veggy: false"

console.log("\n What's inside 'cake' now: ", cake);