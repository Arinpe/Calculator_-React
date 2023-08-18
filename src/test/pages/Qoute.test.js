import React from 'react';
import render from 'react-test-renderer';
import Quote from '../../components/Quote';

describe('Quote', () => {
  const page = render.create(<Quote />).toJSON();
  test('should render without crashing', () => {
    expect(page).toMatchSnapshot();
  });
});
