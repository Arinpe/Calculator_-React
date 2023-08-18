import React from 'react';
import render from 'react-test-renderer';
import Calculator from '../../components/Calculator';
import Button from '../../components/Button';

describe('Calculator', () => {
  const page = render.create(<Calculator />);
  const pageInstance = page.root;

  test('should render without crashing', () => {
    expect(page).toMatchSnapshot();
  });

  test('should display the div with App class', () => {
    expect(pageInstance.findAllByProps({ className: 'App' }).length).toEqual(1);
  });

  test('should render the calculator container', () => {
    expect(pageInstance.findAllByProps({ className: 'App__calculator' }).length).toEqual(1);
  });

  test('should render the buttons', () => {
    expect(pageInstance.findAllByType(Button).length).toEqual(19);
  });
});
