/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store.ts';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Admin from './Admin.tsx';
import Catalog from '../Pages/Catalog.tsx';
import AddGoodPage from '../Pages/AddGoodPage.tsx';

window.scrollTo = jest.fn();

const store = setupStore();


describe('Admin component, link to main page', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  test('nav button go to main page', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Catalog />
          <Admin />
        </Provider>
      </MemoryRouter>
    );
    const backLink = screen.getByTestId('testBackLink');
    act(() => {
      userEvent.click(backLink);
    });

    expect(screen.getByTestId('testCatalog')).toBeInTheDocument();
  });

  test('submit button go to addGood page', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AddGoodPage />
          <Admin />
        </Provider>
      </MemoryRouter>
    );
    const addLink = screen.getByTestId('testLinkSubmit');
    act(() => {
      userEvent.click(addLink);
    });
    expect(screen.getByTestId('testAddGoodPage')).toBeInTheDocument();
  });
});
