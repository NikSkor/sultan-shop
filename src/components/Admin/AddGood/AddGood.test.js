/* eslint-disable testing-library/no-unnecessary-act */
import { act, fireEvent, render, screen} from '@testing-library/react';
import AddGood from './AddGood.tsx';
import { Provider } from 'react-redux';
import { setupStore } from '../../../store/store.ts';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import AdminPage from '../../Pages/AdminPage.tsx';

window.scrollTo = jest.fn();


const store = setupStore();

describe('AddGood component, url input', () => {
  
  test('url input correctly completed', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AdminPage />
          <AddGood />
        </Provider>
      </MemoryRouter>
    );
    const input = screen.getByTestId('testUrl');
    expect(input).toContainHTML('');
    fireEvent.input(input, {
      target: { value: 'https://yandex.ru' },
    });
    expect(input).toContainHTML('https://yandex.ru');
  });
  test('url input not correctly completed', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AddGood />
        </Provider>
      </MemoryRouter>
    );
    const input = screen.getByTestId('testUrl');
    expect(input).toContainHTML('');
    fireEvent.input(input, {
      target: { value: 'sjdf' },
    });
    expect(input).not.toContainHTML('https://yandex.ru');
  });
    test('url input is full', () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <AddGood />
          </Provider>
        </MemoryRouter>
      );
      const input = screen.getByTestId('testUrl');
      expect(input).toContainHTML('');
      fireEvent.input(input, {
        target: { value: '' },
      });
      expect(input).toContainHTML('');
    });
});

describe('AddGood component, select input', () => {
  test('select input is working', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AddGood />
        </Provider>
      </MemoryRouter>
    );
    const input = screen.getByTestId('testSelect');
    expect(input).toContainHTML('мл');
    fireEvent.input(input, {
      target: { value: 'г' },
    });
    expect(input).toContainHTML('г');
  });
});

describe('AddGood component, barcode input', () => {
  test('url input correctly completed', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AddGood />
        </Provider>
      </MemoryRouter>
    );
    const input = screen.getByTestId('testBarcode');
    expect(input).toContainHTML('');
    fireEvent.input(input, {
      target: { value: '1000000000001' },
    });
    expect(input).toContainHTML('1000000000001');
  });
  test('url input not correctly completed', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AddGood />
        </Provider>
      </MemoryRouter>
    );
    const input = screen.getByTestId('testBarcode');
    expect(input).toContainHTML('');
    fireEvent.input(input, {
      target: { value: 'd567567567d' },
    });
    expect(input).not.toContainHTML('1000000000001');
  });
  test('url input is full', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AddGood />
        </Provider>
      </MemoryRouter>
    );
    const input = screen.getByTestId('testBarcode');
    expect(input).toContainHTML('');
    fireEvent.input(input, {
      target: { value: '' },
    });
    expect(input).toContainHTML('');
  });
});

describe('AddGood component, link to adminPage', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  test('submit button go to adminPage', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AddGood />
          <AdminPage />
        </Provider>
      </MemoryRouter>
    );
    const adminLink = screen.getByTestId('testLink');
    act(()=> {
      userEvent.click(adminLink);
    })
    
    expect(screen.getByTestId('testAdminPage')).toBeInTheDocument();
    
  });

  test('nav button go to adminPage', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AddGood />
          <AdminPage />
        </Provider>
      </MemoryRouter>
    );
    const adminLink = screen.getByTestId('testLinkBack');
    act(() => {
      userEvent.click(adminLink);
    });
    expect(screen.getByTestId('testAdminPage')).toBeInTheDocument();
  });
});
