import React, { useState } from 'react';
import './Carousel.css'; // Importe o arquivo CSS

// Defina as imagens do carrossel (substitua as URLs pelas URLs reais das imagens)
const carouselImages = [
  './image/sp.jpeg',
  './image/tal.jpeg',
  './image/to.webp',
  './image/tc.png',
];

const Carousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <h1>Diário de uma Viagem</h1>
      <p>Viajar é uma experiência incrível que nos permite explorar novos lugares, culturas e sabores. Durante uma viagem, podemos criar memórias inesquecíveis, conhecer pessoas incríveis e nos desconectar da rotina.</p>
      <div
        className="carousel-image"
        style={{ backgroundImage: `url(${carouselImages[currentImageIndex]})` }}
      ></div>
      <p>Eu adoro viajar! E você, gosta de viajar? Deixe seu comentário abaixo:</p>
      <div className="comment-section">
        {/* Aqui você pode adicionar a caixa de comentários */}
      </div>
      <button onClick={previousImage}>Anterior</button>
      <button onClick={nextImage}>Próxima</button>
    </div>
  );
};

export default Carousel;
