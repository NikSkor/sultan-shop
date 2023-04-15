import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header.tsx';
import { setupStore } from '../../store/store.ts';

const store = setupStore();

describe('Header component, images', () => {
  test('trere are images', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </MemoryRouter>
    );
    const imgs = screen.getAllByRole('img');
    imgs.forEach((item)=> {
      expect(item).toBeInTheDocument();
    })
  });
});
