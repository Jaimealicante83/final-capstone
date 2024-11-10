import './App.css';
import { Link } from 'react-router-dom';

function Nav() {  
  return (
    <div className="Nav">
      <div class="container">
        <img src="assets/logo-lemon.png" alt="logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/order">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;