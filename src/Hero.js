import './App.css';
import { useNavigate } from 'react-router-dom';

function Hero() {  
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/booking'); 
  };

  return (
    <section className="Hero">
      <div className="container">
        <header className="box-title">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Welcome to Little Lemon! Enjoy the vibrant flavors of the Mediterranean with our fresh, delicious dishes. 
            From savory grilled meats to refreshing salads, each bite is crafted to delight your senses. Visit us today!</p>
          <button className="btn-black" onClick={handleButtonClick} aria-label="Book a table on click">Book a table</button>
        </header>
        <div className="hero-image-box">
          <img src="assets/hero-img.jpg" alt="Restaurant Little Lemon" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
