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

function getJpyFromEur(jpyAmount) {
  // 1 EUR = 116.402 JPY
  const rate = 116.402;
  return jpyAmount * rate;
}

function getAudFromEur(audAmount) {
  // 1 EUR = 1.62072 AUD
  const rate = 1.62072;
  return audAmount * rate;
}

function getChfFromEur(chfAmount) {
  // 1 EUR = 1.08 CHF
  const rate = 1.08;
  return chfAmount * rate;
}

console.log(convertFromEur(100, "AUD"));
