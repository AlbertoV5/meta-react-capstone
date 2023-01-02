import './App.css';
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage"
import BookingPage from "./components/BookingPage"

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/booking" element={<BookingPage/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
