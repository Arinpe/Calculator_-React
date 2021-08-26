import React from 'react';
import render from 'react-test-renderer';
import Quote from '../../components/App';

describe('Quote', () => {
  const page = render.create(<Quote />);
  const pageInstance = page.root;
  test('should render without crashing', () => {
    expect(page).toMatchSnapshot();
    expect(pageInstance.findAllByProps({ className: 'nav-links' }).length).toEqual(1);
    expect(pageInstance.findAllByProps({ className: 'logo' }).length).toEqual(1);
  });
});
