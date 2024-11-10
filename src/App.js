import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Hero />
                </section>
                <section id="specials">
                  <Specials />
                </section>
                <section id="testimonials">
                  <Testimonials />
                </section>
                <section id="about">
                  <About />
                </section>
                <Footer />
              </>
            }
          />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
