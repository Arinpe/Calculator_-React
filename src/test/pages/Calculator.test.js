import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../../components/Calculator';

describe('Calculator', () => {
  const { asFragment, container } = render(<Calculator />);

  test('should render without crashing', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render the buttons', () => {
    expect(container.querySelectorAll('button')).toBeTruthy();
  });
});
