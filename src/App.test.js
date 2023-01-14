import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';


test('chicago text', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Chicago/);
  expect(linkElement[0]).toBeInTheDocument();
});

window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

test('full app rendering/navigating', async () => {
  render(<App/>);
  // go to windoe
  const user = userEvent.setup();
  const nav = screen.getByText(/Booking/i);
  await user.click(nav);
  // find text
  const text = screen.getByText(/Find a table for any ocassion./);
  expect(text).toBeInTheDocument();
  // find button
  const buttons = screen.getAllByText(/Continue/);
  expect(buttons[0]).toBeInTheDocument();
  // Don't find warning
  expect(screen.queryByText(/Required/)).not.toBeInTheDocument();
  // Click and find warning
  user.click(buttons[0]).then(() => {
      const required = screen.getAllByText(/Required/);
      expect(required[0]).toBeInTheDocument();
    }
  );
})
