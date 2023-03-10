import { ChakraProvider } from '@chakra-ui/react';
import { render, screen, fireEvent, act } from '@testing-library/react';
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

test("Test Form Validation", async () => {
    const handleSubmit = jest.fn()
    // Call form component with context dependencies
    const app = render(
      <ChakraProvider>
        <BookingProvider>
          <TableForm 
            handleTabChange={() => ("")}
            onSubmit={handleSubmit} />
        </BookingProvider>
      </ChakraProvider>
    )
    // Find elements
    const date = screen.getByLabelText(/Date/);
    const time = screen.getByLabelText(/Time/);
    const ocassion = screen.getByLabelText(/Ocassion/);
    const guests = app.container.querySelector("#guests");
    const submitButton = app.container.querySelector("#table-submit");
    // Check unavailable hours
    expect(app.container.querySelector("#time-0000")).not.toBeInTheDocument();
    expect(app.container.querySelector("#time-0500")).not.toBeInTheDocument();
    // Expect failure
    fireEvent.change(date, { target: { value: "2023-10-01"}});
    await act(async () => {
      fireEvent.click(submitButton);
    });
    expect(handleSubmit).not.toHaveBeenCalled();
    // Expect success
    fireEvent.change(time, { target: { value: "17:00"}});
    fireEvent.change(ocassion, { target: { value: "Other"}});
    fireEvent.change(guests, { target: { value: 2}});
    await act(async () => {
      fireEvent.click(submitButton);
    });
    expect(handleSubmit).toHaveBeenCalled();
})

test("Test Local Storage", () => {
    // Check for data persistence
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