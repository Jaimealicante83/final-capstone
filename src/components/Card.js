

function Card({ image, title, description, buttonText }) {  
    return (
      <div className="Card">
        <div className="card">
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
          <button className="btn-black">{buttonText}</button>
        </div>
      </div>
    );
  }
  
  export default Card;