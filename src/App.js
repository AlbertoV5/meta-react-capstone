import './App.css';
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import HomePage from "./components/HomePage"
import BookingPage from "./components/BookingPage"
import ConfirmedBookingPage from './components/ConfirmedBookingPage';

const URL = "meta-react-capstone"

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Nav/>
        <div style={{height:"4.5em"}}></div>
        <Routes>
            <Route path={`/${URL}`} element={<HomePage/>}></Route>
            <Route path={`/${URL}/booking`} element={<BookingPage/>}></Route>
            <Route path={`/${URL}/confirmed-booking`} element={<ConfirmedBookingPage/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
