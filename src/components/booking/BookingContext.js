import { useState, createContext, useContext } from "react"
import * as Yup from 'yup';

export const BookingContext = createContext({})

// Date logic for default value
let current = new Date();
export const date = `${current.getFullYear()}-${`${current.getMonth()+1}`.padStart(2, '0')}-${current.getDate()+1}`;

export const bookingDefault = {
    table: {
        date: "",
        time: "",
        guests: 0,
        ocassion: "Other"
    },
    customer: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
        request: ""
    }
}

export const bookingTableSchema = Yup.object().shape({
    date: Yup.date().required("Required"),
    time: Yup.string().required("Required"),
    guests: Yup.number().min(1, "Minimum 1").max(12, "Minimum 2").required("Required"),
    ocassion: Yup.string().required("Required"),
});

export const BookingProvider = ({children}) => {
    const [booking, setBooking] = useState(bookingDefault);
    return (
        <BookingContext.Provider value={[booking, setBooking]}>
            {children}
        </BookingContext.Provider>
    )
}

export const useBookingContext = () => useContext(BookingContext)
