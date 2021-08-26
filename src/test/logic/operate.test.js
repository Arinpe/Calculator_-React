import Operation from '../../logic/operate';

describe('Operate', () => {
  test('should sum two numbers', () => {
    const answer = Operation('4', '5', '+');
    expect(answer.toString()).toEqual('9');
    expect(answer.toString()).not.toEqual('90');
  });
  test('should multiply two numbers', () => {
    const answer = Operation('4', '5', '*');
    expect(answer.toString()).toEqual('20');
    expect(answer.toString()).not.toEqual('9');
  });

  test('should divide two numbers', () => {
    const answer = Operation('4', '2', '/');
    expect(answer.toString()).toEqual('2');
    expect(answer.toString()).not.toEqual('90');
  });

  test('should subtract two numbers', () => {
    const answer = Operation('4', '5', '-');
    expect(answer.toString()).toEqual('-1');
    expect(answer.toString()).not.toEqual('1');
  });

  test('should calculate the percebtage of a number', () => {
    const answer = Operation('50', null, '%');

    expect(answer.toString()).toEqual('0.5');
    expect(answer.toString()).not.toEqual('50');
  });
});
