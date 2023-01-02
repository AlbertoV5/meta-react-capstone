import './App.css';
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Header from "./components/Header"
import Main from "./components/Main"



function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <Main>
        <section>Hero</section>
        <section>Highlights</section>
        <section>Testimonials</section>
        <section>About</section>
      </Main>
      <Footer/>
    </>
  );
}

export default App;
