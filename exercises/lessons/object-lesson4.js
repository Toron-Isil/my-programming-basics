// Given the following nested object:
var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
      primeNumbers: [2, 3, 5, 7, 11],
      fibonnaci: [1, 1, 2, 3, 5, 8, 13]
    },
    addSnack: function (snack) {
      this.snacks.push(snack);
      return this;
    }
  }
}
/*
 1 - Using a for loop, console.log all of the numbers in the primeNumbers array.
2 - Using a for loop, console.log all of the even Fibonnaci numbers.
3 - Console.log the value “second” inside the order array.
4 - Inside of the addSnack function there is a special keyword called this.What does the word this refer to inside the addSnack function?(edited)

*/



