const bandNames = [];

console.log(generateBandName("reD", "kiwis"));
console.log(generateBandName("YellOw", "Chicken"));

function generateBandName(clothingColor, lastFood) {
  let bandName = "";

  let bigColor = function() {
    return makeTasty(
      clothingColor[0].toUpperCase() + clothingColor.substr(1).toLowerCase()
    );
  };

  const bigFood = function() {
    return lastFood[0].toUpperCase() + lastFood.substr(1).toLowerCase();
  };

  bandName = `Da ${bigColor()} ${bigFood()}!`;

  bandNames.push(bandName);

  return bandName;
}

function makeTasty(color) {
  let tastyColor = "";

  switch (color) {
    case "Red":
      tastyColor = "Chilli";
      break;
    case "Orange":
      tastyColor = "Tangerine";
      break;
    case "Yellow":
      tastyColor = "Pineapple";
      break;
    case "Green":
      tastyColor = "Sage";
      break;
    case "Blue":
      tastyColor = "Blueberry";
      break;
    case "Purple":
      tastyColor = "Plum";
      break;
    case "White":
      tastyColor = "Heavenly";
      break;
    case "Gray":
      tastyColor = "Cloudy";
      break;
    case "Black":
      tastyColor = "Gothic";
      break;
    default:
      tastyColor = bigColor;
  }

  return tastyColor;
}

console.log(generateBandName("blUe", "tarantulas"));
