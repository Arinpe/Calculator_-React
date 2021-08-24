import Big from 'big.js';

export default (Number1, Number2, operator) => {
  const firstNumber = new Big(Number1);
  const secondNumber = Number2 && new Big(Number2);
  if (operator === '/' && parseInt(secondNumber, 10) === 0) {
    return 'Cant divide by 0';
  }
  switch (operator) {
    case '/':
      return firstNumber.div(secondNumber);
    case '*':
      return firstNumber.mul(secondNumber);
    case '+':
      return firstNumber.add(secondNumber);
    case '%':
      return firstNumber.div(100).toString();
    default:
      return firstNumber.sub(secondNumber);
  }
};
