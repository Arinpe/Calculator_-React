import operate from './operate';

function calculate(calculatorData, buttonName) {
  let { total, next, operation } = calculatorData;
  const operators = ['+', 'X', '-', '÷'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (buttonName === '%') {
    if (total && next && operation) {
      next = (0.01 * operate(total, next, operation)).toString();
    } else {
      next = (0.01 * total).toString();
    }
  } else if (buttonName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = '=';
    }
  } else if (buttonName === '.') {
    if (next) {
      return { total, next: `${next}.`, operation };
    }
    if (total) {
      return { total: `${total}.`, next, operation };
    }
    return { total: '0.', next, operation };
  }

  if (total && next && operation && operators.includes(buttonName)) {
    total = operate(total, next, operation);
    next = null;
    operation = '=';
  }

  if (operators.includes(buttonName)) {
    operation = buttonName;
  } else if (operation && numbers.includes(buttonName)) {
    next = next ? next + buttonName : buttonName;
  } else if (numbers.includes(buttonName)) {
    total = total ? total + buttonName : buttonName;
  }

  return { total, next, operation };
}

export default calculate;
