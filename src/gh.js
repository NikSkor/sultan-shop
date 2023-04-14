import { render, screen } from '@testing-library/react';
import { cleanup } from '@testing-library/react';
// import renderer from 'react-test-renderer';
// import App from './App';
import Header from './components/Header/Header';
// import Catalog from './components/Pages/Catalog';
// import HeaderBtn from './components/Header/HeaderBtn/HeaderBtn';
// import Adress from './components/Header/Adress/Adress';


// test('renders learn react link', () => {
//   render(<HeaderBtn />);
//   const btn = screen.getByRole('button');
//   expect(btn).toBeInTheDocument();
// });

// test('adress learn react link', () => {
//   render(<Header />);
//   const btn = screen.getByTitle(/г. Кокчетав, ул. Ж. Ташенова 129Б/i);
//   expect(btn).toBeInTheDocument()();
// });

// test('adress learn react link', () => {
//   render(<Header />);
//   const btn = screen.container.getElementsByClassName('<.headerBlock>');
//   expect(btn).toBeInTheDocument();
// });

// it('some description', () => {
//   const screen = render(<Header />)
  
// screen.container.getElementsByClassName('<the_target_headerBlock>');
// }
// )

// afterEach(cleanup);

//   describe('Adress.tsx', () => {
//     it('snapshot renders correctly, truthy values', () => {
//       const tree = renderer
//         .create(
//           <Adress
//             title='г. Кокчетав, ул. Ж. Ташенова 129Б'
//             description='(Рынок Восточный)'
//             titleColor='#111111'
//             descrColor='#3F4E65'
//           />
//         )
//         .toJSON();
//       expect(tree).toMatchSnapshot();
//     });
//     it('snapshot renders correctly, falsy values', () => {
//       const tree = renderer.create(<Adress />).toJSON();
//       expect(tree).toMatchSnapshot();
//     });
//   });
// })
