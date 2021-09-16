import React from 'react';
import render from 'react-test-renderer';
import Quote from '../../components/App';

describe('Quote', () => {
  const page = render.create(<Quote />);
  const pageInstance = page.root;
  test('should render without crashing', () => {
    expect(page).toMatchSnapshot();
    expect(pageInstance.findAllByProps({ className: 'App' }).length).toEqual(2);
    expect(pageInstance.findAllByProps({ className: 'Appcalculator' }).length).toEqual(1);
  });
});
