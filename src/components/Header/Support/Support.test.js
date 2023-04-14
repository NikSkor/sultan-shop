import { cleanup, render, screen } from '@testing-library/react';
import Support from './Support';
import renderer from 'react-test-renderer';
import callBackImg from '../../../img/callBack.png';

afterEach(cleanup);

describe('test of support component', ()=> {
  test('component renders props correctly, truthy values', () => {
    const tree = renderer
      .create(
        <Support
          isHeader={true}
          href='opt.sultan@mail.ru'
          description='На связи в любое время'
          titleColor='#111111'
          descrColor='#3F4E65'
        >
          <div>
            <img
              src={callBackImg}
              alt='Изображение оператора технической поддержки'
            />
          </div>
        </Support>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('component renders props correctly, falsy values', () => {
    const tree = renderer.create(<Support />).toJSON();
    expect(tree).toMatchSnapshot();
  });
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