function CardTestimonial({ image, name, opinion, stars }) {  
  const renderStars = () => {
    const starArray = [];
    for (let i = 0; i < stars; i++) {
      starArray.push(<span key={i} className="star">⭐</span>);
    }
    return starArray;
  };

  return (
    <div className="CardTestimonial">
      <div className="card-testimonial">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{opinion}</p>
        <div className="stars-container">
          {renderStars()}
        </div>
      </div>
    </div>
  );
}

export default CardTestimonial;