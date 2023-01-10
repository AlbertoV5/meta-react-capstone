import BookingSection from "./booking/BookingSection";

import { BookingProvider } from "./booking/BookingContext";

const BookingPage = () => {
    return (
        <BookingProvider>
            <BookingSection/>
        </BookingProvider>
    )
}
export default BookingPage;