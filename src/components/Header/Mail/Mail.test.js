import { cleanup, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Mail from '../Mail/Mail.tsx';
import letterImg from '../../../img/letter.png';


describe('Mail.tsx', () => {
afterEach(cleanup);

  test('component renders props correctly, truthy values', () => {
    const tree = renderer
      .create(
        <Mail
          isHeader={true}
          href='opt.sultan@mail.ru'
          description='На связи в любое время'
          titleColor='#111111'
          descrColor='#3F4E65'
        >
          <img src={letterImg} alt='Значок почты' />
        </Mail>
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
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toMatchSnapshot();
  })
});
