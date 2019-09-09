function convertFromEur(amount, curr) {
  switch (curr) {
    case "JPY":
      return getJpyFromEur(amount);
    case "AUD":
      return getAudFromEur(amount);
    case "CHF":
      return getChfFromEur(amount);
    default:
      return "The requested currency is not available. Please enter YPY, AUD or CHF.";
  }
}

const getJpyFromEur = function (amount) {
  // 1 EUR = 116.402 JPY
  // const rate = 116.402;
  return (amount * 116402 / 1000).toFixed(2);
}

const getAudFromEur = function (amount) {
  // 1 EUR = 1.62072 AUD
  const rate = 1.62072;
  return amount * rate;
}

const getChfFromEur = amount => {
  // 1 EUR = 1.08 CHF
  const rate = 1.08;
  return amount * rate;
}




console.log(convertFromEur(100, "AUD"));
console.log(convertFromEur(100, "JPY"));
console.log(convertFromEur(100, "CAD"));
console.log(convertFromEur(100, "CHF"));


