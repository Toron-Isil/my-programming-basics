const bandNames = [];

console.log(generateBandName("reD", "kiwis"));
console.log(generateBandName("YellOw", "Chicken"));

function generateBandName(clothingColor, lastFood) {
  let bandName = "";

  let bigColor = function() {
    return makeTasty(capitalizeInitial(clothingColor));
  };

  const bigFood = function() {
    return capitalizeInitial(lastFood);
  };

  bandName = `Da ${bigColor()} ${bigFood()}!`;

  bandNames.push(bandName);

  return bandName;
}

function capitalizeInitial(rawString) {
  return rawString[0].toUpperCase() + rawString.substr(1).toLowerCase();
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
