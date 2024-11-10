import './App.css';

function About() {  
  return (
    <div className="About">
      <div class="container">
        <div class="box-about-texto">
          <h2 class="subtitle">About Little Lemon</h2>
          <h3>Seattle</h3>
          <p>Welcome to Little Lemon! Enjoy the vibrant flavors of the Mediterranean with our fresh, delicious dishes.
            From savory grilled meats to refreshing salads, each bite is crafted to delight your senses. Visit us today!</p>
        </div>
        <div class="box-about-images">
          <div class="images-wrapper">
            <img src="assets/chef1.jpg" alt="chef" />
            <img src="assets/chef2.jpg" alt="chef2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;  