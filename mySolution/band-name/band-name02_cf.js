console.log(bandName("black", "kiwis"));

function bandName(clothingColor, lastFood) {
  // var bigColor =
  //   clothingColor.charAt(0).toUpperCase() +
  //   clothingColor.substr(1).toLowerCase();

  const bigColor = function() {
    return (
      clothingColor[0].toUpperCase() + clothingColor.substr(1).toLowerCase()
    );
  };
  const bigFood = function() {
    return lastFood[0].toUpperCase() + lastFood.substr(1).toLowerCase();
  };
  return `Da ${bigColor()} ${bigFood()}`;
}

// console.log(bandName("red", "bread"));
console.log(bandName("plaid", "tarantulas"));
