import HeaderBtn from './HeaderBtn';
import renderer from 'react-test-renderer';
import img from '../../../img/basket.svg';
import { cleanup } from '@testing-library/react';


describe('test of headerBtn component', () => {
afterEach(cleanup);

    test('component renders props correctly, truthy values', () => {
      const tree = renderer
        .create(
          <HeaderBtn text='Список' isPrice={false}>
            <img src={img} alt='Значок прайс листа' />
          </HeaderBtn>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    test('component renders props correctly, falsy values', () => {
      const tree = renderer.create(<HeaderBtn />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});
