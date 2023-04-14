import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Adress from '../Adress/Adress.tsx';

afterEach(cleanup);

  describe('Adress.tsx', () => {
    it('component renders props correctly, truthy values', () => {
      const tree = renderer
        .create(
          <Adress
            title='г. Кокчетав, ул. Ж. Ташенова 129Б'
            description='(Рынок Восточный)'
            titleColor='#111111'
            descrColor='#3F4E65'
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('component renders props correctly, falsy values', () => {
      const tree = renderer.create(<Adress />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

