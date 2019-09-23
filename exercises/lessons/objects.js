console.log('hello');

// 

let car = new Object();

car.color = "Red";
car.name = "Ford Mustang";
car.year = "1969";
car.type = "429.BOSS";

car.size = (x, y) => {
  return x * y;
}

console.log(car.size(4.76, 1.82), 'm²');

console.log(car.name, car.type, car.year);

// =========================================

const myMotel = () => {

  let amberSuit = {
    roomName: 'Amber Suit',
    color: 'amber',
    rarity: 'luxury',
    length: 4,
    width: 6,
    quMeter: () => {
      let squMeter = amberSuit.length * amberSuit.width;
      return `This room has a length of ${amberSuit.length} and a width of ${amberSuit.width}, so the square meters are ${squMeter} m²`;
    }
  }
  console.log('\n', amberSuit.roomName, ', rank: ', amberSuit.rarity);

  console.log(amberSuit.quMeter());

};

myMotel();

console.log(`\n`)

// =========================================

// 1. Create an object to hold information on your favorite recipe. 
// It should have properties for title (a string), servings (a number), 
// and ingredients (an array of strings).
// On separate lines(one console.log statement for each), log the recipe information so it looks like:
// 
// - Mole
// - Serves: 2
// - Ingredients: 
//   - cinnamon
//   - cumin
//   - cocoa


const myRecipeExercise = () => {
  console.log(`My favorite recipe:`);
  let myFavRecipe = {

    recipeName: 'CousCous',
    ingredients: ['cinnamon', 'cumin', 'rice', 'pepper', 'salt', 'chicken'],
    serves: 2,

  }
  console.log(myFavRecipe.recipeName, ': ')
  console.log(myFavRecipe.ingredients);
  console.log(myFavRecipe.ingredients[2], myFavRecipe.serves)

}

myRecipeExercise();

// ===================================

// 2. Create an array of objects, 
//    where each object describes a book and has properties for the title(a string), 
//    author(a string), and alreadyRead(a boolean indicating if you read it yet).
//    
//    -Iterate through the array of books.For each book, 
//     log the book title and book author like so: 
//      “The Hobbit by J.R.R.Tolkien”.
//    -Now use an if/else statement to change the output depending on whether you read it yet or not. 
//     If you read it, 
//     log a string like ‘You already read “The Hobbit” by J.R.R. Tolkien’, 
//      and if not, 
//     log a string like ‘You still need to read “The Lord of the Rings” by J.R.R. Tolkien.’



const myBookExercise = () => {

  let myBooks = [
    {

      title: `The Hobbit`,
      author: `J.R.R. Tolkien`,
      numPages: 310,
      read: true
    },
    {
      title: `Zu einer Ethik der Tat: Einführung in das "Hagakure"`,
      author: `Yukio Mishima`,
      numPages: 128,
      read: true
    },
    {
      title: `Kunst des Krieges`,
      author: `Sunzu`,
      numPages: 98,
      read: true
    },
    {
      title: `go-rin-no-sho`,
      author: `Miyamoto Musashi,`,
      numPages: 198,
      read: true
    },
    {
      title: `L'avalée des avalés`,
      author: `Réjean Ducharme`,
      numPages: 319,
      read: true
    },
    {
      title: `Metamorphosen`,
      author: `Ovid`,
      numPages: 1119,
      read: false
    },
  ];





}

myBookExercise();