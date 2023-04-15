import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { setupStore } from '../../../store/store.ts';
import SortForm from './SortForm.tsx';

const store = setupStore();

describe('SortForm component, inputs price from', () => {
  test('number input price from correctly completed', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SortForm />
        </Provider>
      </MemoryRouter>
    );
    const input = screen.getByTestId('testNumberFrom');
    expect(input).toContainHTML('');
    fireEvent.input(input, {
      target: { value: '300' },
    });
    expect(input).toContainHTML('300');
  });
  test('number input price from not correctly completed', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SortForm />
        </Provider>
      </MemoryRouter>
    );
    const input = screen.getByTestId('testNumberFrom');
    expect(input).toContainHTML('');
    fireEvent.input(input, {
      target: { value: 'sjdf' },
    });
    expect(input).not.toContainHTML('300');
  });
  test('number input price from is full', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SortForm />
        </Provider>
      </MemoryRouter>
    );
    const input = screen.getByTestId('testNumberFrom');
    expect(input).toContainHTML('');
    fireEvent.input(input, {
      target: { value: '' },
    });
    expect(input).toContainHTML('');
  });
});

describe('SortForm component, inputs price to', () => {
  test('number input price to correctly completed', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SortForm />
        </Provider>
      </MemoryRouter>
    );
    const input = screen.getByTestId('testNumberTo');
    expect(input).toContainHTML('');
    fireEvent.input(input, {
      target: { value: '900' },
    });
    expect(input).toContainHTML('900');
  });
  test('number input price to not correctly completed', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SortForm />
        </Provider>
      </MemoryRouter>
    );
    const input = screen.getByTestId('testNumberTo');
    expect(input).toContainHTML('');
    fireEvent.input(input, {
      target: { value: 'sjdf' },
    });
    expect(input).not.toContainHTML('900');
  });
  test('number input price to is full', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SortForm />
        </Provider>
      </MemoryRouter>
    );
    const input = screen.getByTestId('testNumberTo');
    expect(input).toContainHTML('');
    fireEvent.input(input, {
      target: { value: '' },
    });
    expect(input).toContainHTML('');
  });
});

describe('SortForm component, buttons', () => {
  test('buttons are correctly completed', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SortForm />
        </Provider>
      </MemoryRouter>
    );

    const btns = screen.getAllByRole('button');
    btns.forEach((item)=> {
      expect(item).toBeInTheDocument();
      expect(item).toMatchSnapshot();
    })

  });
});
