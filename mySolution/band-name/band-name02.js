function bandName(clothingColor, lastFood) {
  // var bigColor =
  //   clothingColor.charAt(0).toUpperCase() +
  //   clothingColor.substr(1).toLowerCase();

  const bigColor =
    clothingColor[0].toUpperCase() + clothingColor.substr(1).toLowerCase();

  const bigFood = lastFood[0].toUpperCase() + lastFood.substr(1).toLowerCase();

  return `Da ${bigColor} ${bigFood}`;
}

console.log(bandName("black", "kiwis"));
// console.log(bandName("red", "bread"));
console.log(bandName("plaid", "tarantulas"));
