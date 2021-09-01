import React from 'react';
import render from 'react-test-renderer';
import Button from '../../components/Button';

describe('Button', () => {
  const page = render.create(<Button
    name="1"
    onClick={() => {}}
  />);
  test('should render without crashing', () => {
    expect(page).toMatchSnapshot();
  });
});
