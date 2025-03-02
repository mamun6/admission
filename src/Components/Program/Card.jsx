import React from 'react';
import './Card.css'; // Your updated styles

const Card = ({ title, image, description }) => {
  return (
    <div className="card">
      <div className="card-content">
        {/* Title - centered */}
        <h2 className="card-title">{title}</h2>
        
        {/* Image */}
        <div className="card-image-container">
          <img src={image} alt={title} className="card-image" />
        </div>
        
        {/* Description - aligned left */}
        <p className="card-description">{description}</p>
        <ul className="card-ads" >
          <li>Tution Fees</li>
          <li>Admission Fees</li>
          <li>Per Semister Fees</li>
          <li>Total Credits</li>
          <li>Scholarship</li>
        </ul>
        <button  className='btn' >See more</button>
      </div>
    </div>
  );
};

export default Card;
