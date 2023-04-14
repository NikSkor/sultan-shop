import { render, screen } from '@testing-library/react';
import Support from './Support';

describe('test of support component', ()=> {
  test('telephone', () => {
    render(<Support />);
    const tel = screen.getByText('+7 (777) 490-00-91');
    expect(tel).toBeInTheDocument();
    expect(tel).toMatchSnapshot();
  });

  test('work time', () => {
    render(<Support />);
    const workTime = screen.getByText(/время работы: 9:00-20:00/i);
    expect(workTime).toBeInTheDocument();
    expect(workTime).toMatchSnapshot();
  })

  test('button call back', () => {
    render(<Support />);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toMatchSnapshot();
  })
});