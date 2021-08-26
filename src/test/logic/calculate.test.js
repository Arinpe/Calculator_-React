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
});
