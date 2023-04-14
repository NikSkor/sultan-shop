import { cleanup, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Mail from '../Mail/Mail.tsx';

afterEach(cleanup);

describe('Mail.tsx', () => {
  test('component renders props correctly, truthy values', () => {
    const tree = renderer
      .create(
        <Mail
          isHeader={true}
          href='opt.sultan@mail.ru'
          description='На связи в любое время'
          titleColor='#111111'
          descrColor='#3F4E65'
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('component renders props correctly, falsy values', () => {
    const tree = renderer.create(<Mail />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('href role', ()=> {
    render(<Mail />);
    const btn = screen.getByRole('link');
    expect(btn).toBeInTheDocument();
    expect(btn).toMatchSnapshot();
  })
});
