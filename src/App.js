import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useReducer, useEffect } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import { initializeTimes, updateTimes } from './apiFunctions';

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], () => []);

  useEffect(() => {
    const fetchInitialTimes = async () => {
      const times = await initializeTimes();
      dispatch({ type: 'INITIALIZE_TIMES', payload: times });
    };
    fetchInitialTimes();
  }, []);

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
          <Route
            path="/booking"
            element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
          />
          <Route
            path="/booking-confirmed"
            element={<ConfirmedBooking />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
