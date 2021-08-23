import Operation from '../../logic/operate';

describe('Operate', () => {
  test('should sum two numbers', () => {
    const answer = Operation('4', '5', '+');
    expect(answer.toString()).toEqual('9');
  });

  test('should not add numbers as strings', () => {
    const answer = Operation('4', '5', '+');
    expect(answer.toString()).not.toEqual('90');
  });

  test('should multiply two numbers', () => {
    const answer = Operation('4', '5', '*');
    expect(answer.toString()).toEqual('20');
  });

  test('should return the coreect product  of numbers', () => {
    const answer = Operation('4', '5', '*');
    expect(answer.toString()).not.toEqual('9');
  });

  test('should divide two numbers', () => {
    const answer = Operation('4', '2', '/');
    expect(answer.toString()).toEqual('2');
  });

  test('should return the correct division value', () => {
    const answer = Operation('4', '2', '/');
    expect(answer.toString()).not.toEqual('90');
  });

  test('should subtract two numbers', () => {
    const answer = Operation('4', '5', '-');
    expect(answer.toString()).toEqual('-1');
  });

  test('should return the correct value of subtracting two numbers', () => {
    const answer = Operation('4', '5', '-');
    expect(answer.toString()).not.toEqual('1');
  });

  test('should calculate the percebtage of a number', () => {
    const answer = Operation('50', null, '%');

    expect(answer.toString()).toEqual('0.5');
  });

  test('should calculate the percebtage of a number properly', () => {
    const answer = Operation('50', null, '%');

    expect(answer.toString()).not.toEqual('50');
  });
});
