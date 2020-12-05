import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
let container;

// window.fetch.mockResolvedValueOnce({
//   ok: true,
//   json: async () => ({success: true}),
// })

beforeEach(() => {
  container = render(<App />);
});

test('renders main-container', () => {
  expect(document.getElementsByClassName('main-container').length).toBe(1);
  expect(container).toBeTruthy();
});

test('renders left-container', () => {
  expect(document.getElementsByClassName('left-container').length).toBe(1);
});

test('renders right-container', () => {
  expect(document.getElementsByClassName('right-container').length).toBe(1);
});

test('renders footer element', () => {
  expect(document.getElementsByTagName('footer').length).toBe(1);
});

test('should handle click handlers', () => {
  fireEvent.click(document.getElementsByTagName('button')[0]);
  fireEvent.click(document.getElementsByTagName('button')[1]);
  fireEvent.click(document.getElementsByTagName('button')[2]);
  expect(container).toBeTruthy();
});
