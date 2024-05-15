import React from 'react';
import Card from './Card';
import './CardSection.css';

const cardData = [
    { image: 'https://via.placeholder.com/150', name: 'Haydar Aliyev' },
    { image: 'https://via.placeholder.com/150', name: 'Tony Stark' },
    { image: 'https://via.placeholder.com/150', name: 'Dua Lipa' },
    { image: 'https://via.placeholder.com/150', name: 'Manaf Agayev' },
    { image: 'https://via.placeholder.com/150', name: 'Emiliy Clark' },
    { image: 'https://via.placeholder.com/150', name: 'Qirmizi Winston' }
];

function CardSection() {
    return (
        <section className="card-section">
            {cardData.map((card, index) => (
                <Card key={index} image={card.image} name={card.name} />
            ))}
        </section>
    );
}

export default CardSection;