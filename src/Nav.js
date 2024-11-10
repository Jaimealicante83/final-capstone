import './App.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Nav() {  
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/"); 
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="Nav">
      <div className="container">
        <a href="#" onClick={() => handleScroll('nav')}><img src="assets/logo-lemon.png" alt="logo" /></a>
        <ul>
          <li><a href="#" onClick={() => handleScroll('nav')}>Home</a></li>
          <li><a href="#" onClick={() => handleScroll('specials')}>Specials</a></li>
          <li><a href="#" onClick={() => handleScroll('testimonials')}>Testimonials</a></li>
          <li><a href="#" onClick={() => handleScroll('about')}>About</a></li>
          <li><Link to="/booking">Reservations</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
