
var cake = {
  typeOf: 'chocolate',
  veggy: true,
  difficulty: 'easy',
  recipeAuthor: 'Ducky',
  get author() {
    return this.recipeAuthor;
  }
};



console.log("\n who is the author of this recipe:", cake.author);

console.log("\n what's inside 'cake': ", cake);
// console.log('\n is the cake veggy?: ', cake.veggy);

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


var cake2 = {
  typeOf: 'raspberry-π',
  veggy: true,
  difficulty: 'easy',
  recipeAuthor: '',
  set author(author) {
    this.recipeAuthor = author;
  }

};

cake2.author = "Fanny";

console.log('The cake:', cake2.typeOf, ' was created by', cake2.recipeAuthor, '.');
console.log('\n', cake2);