import React, { useState } from 'react';
import './Carousel.css';

const images = [
    'certificate_machine_learning.png',
    'certificate_javafx.png',
    'certificate_java.png',
    'certificate_git.jpeg',
    'certificate_bloomberg_market_concepts.png'
];

const imageDescriptions = [
    'Machine Learning Certificate',
    'JavaFX Certificate',
    'Java Certificate',
    'Git Certificate',
    'Bloomberg Market Concepts Certificate'
];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel-container">
            <h2 className="carousel__heading">Certificates</h2>
            <div className={`carousel__inner transform-${currentIndex}`}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel__item ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img
                            src={`/images/${image}`}
                            alt={imageDescriptions[index]}
                            className="carousel__image"
                        />
                    </div>
                ))}
            </div>
            <button className="carousel__button-prev" onClick={prevSlide}>
                &lt;
            </button>
            <button className="carousel__button-next" onClick={nextSlide}>
                &gt;
            </button>
            <div className="carousel__indicators">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
