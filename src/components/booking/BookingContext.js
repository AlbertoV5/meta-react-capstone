import { useState, createContext, useContext } from "react"
import * as Yup from 'yup';

export const BookingContext = createContext({})

// Default values
export const bookingDefault = {
    stage: {
        table: true,
        customer: false,
        details: false,
        confirm: false
    },
    table: {
        date: "",
        time: "", // "17:00"
        guests: 0,
        ocassion: ""
    },
    customer: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
    },
    details: {
        comments: ""
    }
}

// Different schemas per form section
export const schema = {
    table: Yup.object().shape({
        date: Yup.date().required("Required"),
        time: Yup.string().required("Required"),
        guests: Yup.number().min(1, "Minimum 1").max(12, "Maximum 12").required("Required"),
        ocassion: Yup.string().required("Required"),
    }),
    customer: Yup.object().shape({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        phoneNumber: Yup.string().required("Required"),
        email: Yup.string().email("Invalid Email").required("Required")
    }),
    details: Yup.object().shape({
        comments: Yup.string(),
    })
};

// Provider uses booking object
export const BookingProvider = ({children}) => {
    const [booking, setBooking] = useState(bookingDefault);
    return (
        <BookingContext.Provider value={[booking, setBooking]}>
            {children}
        </BookingContext.Provider>
    )
}

export const useBookingContext = () => useContext(BookingContext)
