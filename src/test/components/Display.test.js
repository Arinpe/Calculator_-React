import React from 'react';
import render from 'react-test-renderer';
import Display from '../../components/Display';

describe('Display', () => {
  const page = render.create(<Display />);
  test('should render without crashing', () => {
    expect(page).toMatchSnapshot();
  });
});
