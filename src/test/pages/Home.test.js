import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../components/Home';

describe('Quote', () => {
  const { asFragment } = render(<Home />);

  test('should render without crashing', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
