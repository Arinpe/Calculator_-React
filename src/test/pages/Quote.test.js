import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../../components/App';

describe('Quote', () => {
  const { asFragment } = render(<Quote />);

  test('should render without crashing', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
