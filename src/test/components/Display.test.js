import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../../components/Display';

describe('Display', () => {
  let page;
  const memor = 'Test Memor';
  const current = 'Test Current';

  const setUp = () => {
    page = render(<Display memor={memor} current={current} />);
  };

  test('should render', () => {
    setUp();
    const displayElement = page.container.querySelector('.display');
    expect(displayElement).toBeTruthy();
  });

  test('should render', () => {
    setUp();
    const displayElement = page.container.querySelector('.display');
    expect(displayElement).not.toBeFalsy();
  });

  test('should render memor prop', () => {
    setUp();
    const memorElement = page.container.querySelector('.displayupper');
    expect(memorElement.textContent).toBe(memor);
  });

  test('memor prop should not be blank', () => {
    setUp();
    const memorElement = page.container.querySelector('.displayupper');
    expect(memorElement.textContent).not.toBeFalsy();
  });

  test('should render current prop', () => {
    setUp();
    const currentElement = page.container.querySelector('.displaylower');
    expect(currentElement.textContent).toBe(current);
  });

  test('current prop should not be blank', () => {
    setUp();
    const currentElement = page.container.querySelector('.displaylower');
    expect(currentElement.textContent).not.toBeFalsy();
  });
});
