import './App.css';

function Footer() { 
   
  return (
    <footer className="Footer">
      <div className="container">
        <img src="assets/logo-lemon.png" alt="Little Lemon Logo" />
        <nav className="wrapper-navigation">
          <ul>
            <li>Navigation</li>
            <li><a href="#">Home</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#specials">Menu</a></li>
          </ul>
        </nav>
        <div className="wrapper-media">
          <ul>
            <li>Social Media</li>
            <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
            <li><a href="https://www.x.com" target="_blank">X (formerly Twitter)</a></li>
            <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
          </ul>
        </div>
        <address className="wrapper-contact">
          <ul>
            <li>Contact</li>
            <li>Email: littlelemon@lemon.com</li>
            <li>Phone: 0001-2020-0202</li>
            <li>Address: Long street 11, Seattle</li>
          </ul>
        </address>
      </div>
    </footer>
  );
}

export default Footer;
