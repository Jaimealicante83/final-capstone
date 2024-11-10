import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Hero />
          <Specials />
          <Testimonials />
          <About />
          <Footer />
      </div>
    </Router>
  );
}

export default App;