import './App.css';

function Hero() {  
  return (
    <section className="Hero">
      <div className="container">
        <header className="box-title"> {/* Puede usarse aquí ya que es contenido de encabezado de la sección */}
          <h1>Little Lemon</h1>
          <h2>Seattle</h2>
          <p>Welcome to Little Lemon! Enjoy the vibrant flavors of the Mediterranean with our fresh, delicious dishes. 
            From savory grilled meats to refreshing salads, each bite is crafted to delight your senses. Visit us today!</p>
            <button class="btn-black">Book a table</button>
        </header>
        <div class="hero-image-box">
        <img src="assets/hero-img.jpg" alt="Restaurant Little Lemon" />
        </div>
      </div>
    </section>
  );
}

export default Hero;  