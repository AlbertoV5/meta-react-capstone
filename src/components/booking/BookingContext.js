import { useState, createContext, useContext } from "react"
import * as Yup from 'yup';

export const BookingContext = createContext({})

// Date logic for default value
let current = new Date();
export const date = `${current.getFullYear()}-${`${current.getMonth()+1}`.padStart(2, '0')}-${current.getDate()+1}`;

export const bookingDefault = {
    stage: {
        table: true,
        customer: false,
        confirm: false,
        done: false
    },
    table: {
        date: "",
        time: "", // "13:00"
        guests: 0,
        ocassion: ""
    },
    customer: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
    }
}

export const schema = {
    table: Yup.object().shape({
        date: Yup.date().required("Required"),
        time: Yup.string().required("Required"),
        guests: Yup.number().min(1, "Minimum 1").max(12, "Minimum 2").required("Required"),
        ocassion: Yup.string().required("Required"),
    }),
    customer: Yup.object().shape({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        phoneNumber: Yup.string().required("Required"),
        email: Yup.string().email("Invalid Email").required("Required")
    })
};

export const BookingProvider = ({children}) => {
    const [booking, setBooking] = useState(bookingDefault);
    return (
        <BookingContext.Provider value={[booking, setBooking]}>
            {children}
        </BookingContext.Provider>
    )
}

export const useBookingContext = () => useContext(BookingContext)
