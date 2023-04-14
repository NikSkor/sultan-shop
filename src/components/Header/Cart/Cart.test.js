import { cleanup, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Cart from './Cart';

afterEach(cleanup);

// test('href role', () => {
//   render(<Cart />);
//   const btn = screen.getByRole('btn');
//   expect(btn).toBeInTheDocument();
//   expect(btn).toMatchSnapshot();
// });