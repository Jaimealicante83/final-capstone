import { useNavigate } from 'react-router-dom';

function Card({ image, title, description, buttonText }) {  
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/booking'); 
  };

  return (
    <div className="Card">
      <div className="card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="btn-black" onClick={handleButtonClick} aria-label="Book a table on click">{buttonText}</button>
      </div>
    </div>
  );
}

export default Card;
