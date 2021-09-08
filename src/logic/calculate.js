import operate from './operate';
import formatNumber from '../helpers/number';

const calculate = (calculator, btn) => {
  let{
    total, next, operator, prev,
  } = calculator;
  const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];

  const operators = ['/', '*', '+', '-', 'X2'];

  if (numbers.includes(btn)) {
    total = null;
    if (!prev || prev === '0') {
      prev = btn;
    } else if (prev && !operator) {
      prev += btn;
    } else if ((operator && !next) || (next && next[0] === '0')) {
      next = btn;
    } else if (operator && next) {
      next += btn;
    }
  }

  if (operators.includes(btn)) {
    if ((!prev || prev === '0') && total) {
      prev = total;
      total = null;
    } else if (next) {
      prev = operate(prev, next, operator).toString();
      next = '0';
      total = null;
    }
    operator = btn;
  }
  if (btn === '%') {
    if (prev && !operator) {
      total = operate(prev, null, '%');
      prev = '0';
    }
    if (next) {
      next = operate(next, null, '%');
    }
  }

  if (btn === '+/-') {
    if (prev && (!next || next === '0')) {
      prev = parseInt(prev, 10) * -1;
    } else if (next) {
      next = parseInt(next, 10) * -1;
    } else if (total) {
      total = parseInt(total, 10) * -1;
    }
  }
  if (btn === '=') {
    total = operate(prev, next, operator);
    total = formatNumber(total);
    next = '0';
    operator = null;
    prev = '0';
  }

  if (btn === '.') {
    if (prev && !prev.includes(btn)) {
      prev += btn;
    }

    if (next && !next.includes(btn)) {
      next += btn;
    }
  }

  if (btn === 'AC') {
    next = null;
    operator = null;
    prev = '0';
    total = null;
  }

  return {
    total: total?.toString(),
    next: next?.toString(),
    operator: operator?.toString(),
    prev: prev?.toString(),
  };
};

export default calculate;
