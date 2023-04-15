import { render, screen } from '@testing-library/react';
import InputMail from './InputMail';

describe('test of inputMail component', () => {
  test('telephone', () => {
    render(<InputMail />);
    const mail = screen.getByPlaceholderText(/Введите ваш E-mail/i);
    expect(mail).toBeInTheDocument();
    expect(mail).toMatchSnapshot();
  });

  test('button mail', () => {
    render(<InputMail />);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toMatchSnapshot();
  });
});
