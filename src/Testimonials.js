import './App.css';
import CardTestimonial from './components/CardTestimonial';

function Testimonials() {  
  return (
    <div className="Testimonials">
      <div className="container">
        <h2 className="subtitle">Testimonials</h2>
        <div className="testimonial-wrapper">
          <CardTestimonial  
            image="https://www.villauniversitaria.com/wp-content/uploads/2023/07/explanada-paseo-alicante-960x720.jpg"
            name="John Stewart"
            opinion="Very delicious, I really loved the Musaka and the Italian red wine."
            stars={5}
          />
          <CardTestimonial 
            image="https://www.villauniversitaria.com/wp-content/uploads/2023/07/explanada-paseo-alicante-960x720.jpg"
            name="Mary O'Hara"
            opinion="Booking a table was very easy with the website, I will come back for sure!."
            stars={4}
          />
          <CardTestimonial 
            image="https://www.villauniversitaria.com/wp-content/uploads/2023/07/explanada-paseo-alicante-960x720.jpg"
            name="Wilson Adams"
            opinion="I always enjoy going dinner to this Mediterranean restaurant, 10 of 10."
            stars={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;  