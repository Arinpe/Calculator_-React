import Calculate from '../../logic/calculate';

describe('Calculate', () => {
  let calculator;

  beforeEach(() => {
    calculator = {
      total: '0',
      prev: '0',
      next: '0',
      operator: '0',
    };
  });

  test('should set the first num (prev) of the calculation', () => {
    const { prev } = Calculate(calculator, '4');

    expect(prev).toEqual('4');
  });

  test('should not set the first num (prev) of the calculation', () => {
    const { prev } = Calculate(calculator, '*');

    expect(prev).not.toEqual('*');
  });

  test('should set the operator of the calculation', () => {
    const { operator } = Calculate(calculator, '*');

    expect(operator).toEqual('*');
  });

  test('should not set the operator of the calculation', () => {
    const { operator } = Calculate(calculator, '2');

    expect(operator).not.toEqual('2');
  });

  test('should set the next of the calculation', () => {
    calculator = Calculate(calculator, '4');
    calculator = Calculate(calculator, '*');
    const { next } = Calculate(calculator, '2');

    expect(next).toEqual('2');
  });

  test('should not set the next of the calculation', () => {
    const { next } = Calculate(calculator, '2');

    expect(next).not.toEqual('2');
  });

  test('should return the total of the calculation', () => {
    calculator.prev = '99';
    calculator.operator = '+';
    calculator.next = '1';

    const { total } = Calculate(calculator, '=');

    expect(total).toEqual('100');
  });

  test('should not return the wrong total of the calculation', () => {
    calculator.prev = '99';
    calculator.operator = '+';
    calculator.next = '1';

    const { total } = Calculate(calculator, '=');

    expect(total).not.toEqual('101');
  });

  test('should work with decimals', () => {
    calculator.prev = '99';
    calculator.operator = null;
    calculator.next = null;
    const { prev } = Calculate(calculator, '.');

    expect(prev).toEqual('99.');
  });

  test('should should add decimal when . is pressed', () => {
    calculator.prev = '99';
    calculator.operator = null;
    calculator.next = null;
    const { prev } = Calculate(calculator, '.');

    expect(prev).not.toEqual('99');
  });

  test('should negate a value', () => {
    calculator.prev = '99';
    calculator.operator = null;
    calculator.next = null;

    const { prev } = Calculate(calculator, '+/-');

    expect(prev).not.toBeFalsy();
  });

  test('should negated value should not be falsy', () => {
    calculator.prev = '99';
    calculator.operator = null;
    calculator.next = null;

    const { prev } = Calculate(calculator, '+/-');

    expect(prev).toBeTruthy();
  });

  test('should divide percentage by 100', () => {
    calculator.prev = '10';
    calculator.operator = null;
    const { total } = Calculate(calculator, '%');

    expect(total).toBe('0.1');
  });

  test('% btn should not return the original value', () => {
    calculator.prev = '10';
    calculator.operator = null;
    const { total } = Calculate(calculator, '%');

    expect(total).not.toEqual('10');
  });

  test('should clear all values', () => {
    calculator.prev = '10';
    calculator.operator = null;
    calculator.next = null;
    const { prev } = Calculate(calculator, 'AC');

    expect(prev).toBe('0');
  });

  test('AC button should clear current value', () => {
    calculator.prev = '10';
    calculator.operator = null;
    calculator.next = null;
    const { prev } = Calculate(calculator, 'AC');

    expect(prev).not.toEqual('10');
  });

  test('should not divide by 0', () => {
    calculator.prev = '10';
    calculator.operator = '/';
    calculator.next = '0';
    const res = Calculate(calculator, '=');
    expect(res).toBeTruthy();
  });
});
