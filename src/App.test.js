import { ChakraProvider } from '@chakra-ui/react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import { BookingProvider } from './components/booking/BookingContext';
import TableForm from './components/booking/form/TableForm';
import { bookingDefault } from './components/booking/BookingContext';


test('Test Home page', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Chicago/);
  expect(linkElement[0]).toBeInTheDocument();
});

// fixes
// https://stackoverflow.com/questions/39830580/jest-test-fails-typeerror-window-matchmedia-is-not-a-function
window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};


// https://stackoverflow.com/questions/52783144/how-do-you-test-for-the-non-existence-of-an-element-using-jest-and-react-testing
test('Test nav to form', async () => {
  const app = render(<App/>);
  const nav = screen.getByText(/Booking/i);
  // await user.click(nav);
  await act(async () => {
    fireEvent.click(nav);
  });
  expect(screen.getByText(/Find a table for any ocassion./)).toBeInTheDocument();
  // find button
  const button = app.container.querySelector("#table-submit");
  expect(button).toBeInTheDocument();
  // Don't find warning
  expect(screen.queryByText(/Required/)).not.toBeInTheDocument();
})

// test("Test available times in form", async () => {
//   const app = render(<App/>);
//   // go to form page
//   const user = userEvent.setup();
//   const nav = screen.getByText(/Booking/i);
//   // const someElement = result.container.querySelector('#some-id');
//   user.click(nav).then(async (e) => {
//       user.click(e.querySelector('#time')).then((e) => {
//         const options = e.getAllByText(/9:00/);
//         expect(options).toBeInTheDocument();
//       })
//     }
//   )
// })

test("Test Available Times", async () => {
  const handleSubmit = jest.fn()
  const app = render(
    <ChakraProvider>
      <BookingProvider>
        <TableForm 
          handleTabChange={() => ("")} 
          onSubmit={handleSubmit} />
      </BookingProvider>
    </ChakraProvider>
  )
  const user = userEvent.setup();
  // find default
  const date = screen.getByLabelText(/Date/);
  const time = screen.getByLabelText(/Time/);
  const ocassion = screen.getByLabelText(/Ocassion/);
  const guests = app.container.querySelector("#guests");
  const incrementButton = app.container.querySelector("#increment-step");
  const submitButton = app.container.querySelector("#table-submit");
  
  // expect failure
  fireEvent.change(date, { target: { value: "2023-10-01"}});
  expect(handleSubmit).not.toHaveBeenCalled();
  // succeed
  fireEvent.change(time, { target: { value: "17:00"}});
  fireEvent.change(ocassion, { target: { value: "Other"}});
  fireEvent.change(guests, { target: { value: 2}});
  
  await act(async () => {
    fireEvent.click(incrementButton);
  });
  fireEvent.click(submitButton);
  // expect(handleSubmit).toHaveBeenCalled();

  // unavailable hours
  expect(app.container.querySelector("#time-0000")).not.toBeInTheDocument();
  expect(app.container.querySelector("#time-0500")).not.toBeInTheDocument();
  // try to submit
  await user.click(app.container.querySelector("#table-submit"))
})

test("Local Storage", () => {
  // test local storage
  localStorage.setItem("booking", JSON.stringify(
    {
      ...bookingDefault,
      customer: {
        ...bookingDefault.customer,
        firstName: "Dan Abramov"
      }
  }));
  let localBooking = localStorage.getItem("booking");
  let booking = localBooking?JSON.parse(localBooking):bookingDefault;
  expect(booking.customer.firstName === "Dan Abramov");
});