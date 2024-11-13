import './App.css';

function About() {  
  return (
    <section className="About">
      <div className="container">
        <div className="box-about-texto">
          <h2 className="subtitle">About Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Welcome to Little Lemon! Enjoy the vibrant flavors of the Mediterranean with our fresh, delicious dishes.
            From savory grilled meats to refreshing salads, each bite is crafted to delight your senses. Visit us today!</p>
        </div>
        <div className="box-about-images">
          <div className="images-wrapper">
            <img src="assets/chef1.jpg" alt="chef" />
            <img src="assets/chef2.jpg" alt="chef2" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
