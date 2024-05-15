import React from 'react';
import './Card.css';

function Card({ image, name }) {
    return (
        <div className="card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <button>Click to view profile</button>
        </div>
    );
}

export default Card;