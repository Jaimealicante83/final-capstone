import './App.css';
import Card from './components/Card';

function Specials() {  
  return (
    <section className="Specials">
      <div className="container">
        <h2 className="subtitle">Specials</h2>
        <div className="cards-wrapper">
          <Card 
            image="assets/salad.jpg"
            title="Greek Salad"
            description="Enjoy our delicious Greek Salad, made with fresh ingredients and vibrant flavors."
            buttonText="Book now"
          />
          <Card 
            image="assets/cake.jpg"
            title="Lemon Cake"
            description="Savor our special Lemon Cake, a blend of tender chicken with a zesty lemon sauce."
            buttonText="Book now"
          />
          <Card 
            image="assets/brochea.jpg"
            title="La Bruschetta"
            description="Savor our special Bruschetta, a blend of tender chicken with a zesty lemon sauce."
            buttonText="Book now"
          />
        </div>
      </div>
    </section>
  );
}

export default Specials;
