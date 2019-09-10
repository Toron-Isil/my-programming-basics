// Exercises
// 
// Further reading: http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html

// 1 EUR = 116.402 JPY
const jpyRate = 116402;
// 1 EUR = 1.08329 CHF
const chfRate = 1083.29;
// 1 EUR = 1.62072 AUD
const audRate = 1620.72;

function convertFromEur(amount, curr, exchCalc) {
  let result = 0;
  switch (curr) {
    case 'JPY':
      result = amount * jpyRate;
      break;
    case 'AUD':
      result = amount * audRate;
      break;
    case 'CHF':
      result = amount * chfRate;
      break;
    default:
      return 'The requested currency is not available. Please enter JPY, AUD or CHF';
  }
  return exchCalc(result);
  // Test yourself: What do you usually see in switch statements that is not here? What is its job, and why is it not here?

}

// function getJpyFromEur(amount) {
//   // 1 EUR = 116.402 JPY * 1000 then / 1000
//   // const jpyRate = 116402;
//   // return (amount * rate / 1000).toFixed(2);
// }
//
// const getAudFromEur = function (amount) {
//   // 1 EUR = 1.62072 AUD
//   // const audRate = 1620.72
//   // return (amount * rate / 1000).toFixed(2);
// }
//
// const getChfFromEur = (amount) => {
//   // 1 EUR = 1.08329 CHF
//   // const chfRate = 1083.29;
//   // return (amount * rate / 1000).toFixed(2);
// }

const exchCalc = (num) => {
  return (num / 1000).toFixed(2);
}

console.log(convertFromEur(100, 'AUD', exchCalc));
console.log(convertFromEur(100, 'JPY', exchCalc));
console.log(convertFromEur(100, 'CAD', exchCalc));
console.log(convertFromEur(100, 'CHF', exchCalc));
