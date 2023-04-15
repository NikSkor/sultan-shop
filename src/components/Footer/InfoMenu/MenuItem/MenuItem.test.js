import { cleanup, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MenuItem from './MenuItem.tsx';

describe('MenuItem.tsx', () => {
  afterEach(cleanup);
  test('component renders props correctly, truthy values', () => {
    const tree = renderer
      .create(<MenuItem key='1' item='name' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('component renders props correctly, falsy values', () => {
    const tree = renderer.create(<MenuItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('there is the button', () => {
    render(<MenuItem />);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toMatchSnapshot();
  });
});
