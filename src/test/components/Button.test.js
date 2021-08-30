import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../components/Button';

describe('Button', () => {
  test('should render without crashing', async () => {
    const { getByText } = await render(<Button name="1" onClick={() => {}} />);
    const btn = getByText('1');

    expect(btn).toMatchSnapshot();
  });
});
