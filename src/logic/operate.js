const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  if (numberOne === 'NaN' || numberTwo === 'NaN') {
    return 'NaN';
  }
  const one = new Big(numberOne);
  const two = new Big(numberTwo);
  switch (operation) {
    case '+':
      return one.plus(two).toString();
    case '-':
      return one.minus(two).toString();
    case 'X':
      return one.times(two).toString();
    case '÷':
      try {
        return one.div(two).toString();
      } catch (error) {
        return 'NaN';
      }
    default:
      return 0;
  }
};
export default operate;
