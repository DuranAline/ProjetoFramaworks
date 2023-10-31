import React, { useState } from 'react';

// Define as imagens do carrossel (adicionar mais imagens conforme necessário)
const carouselImages = [
  'url_da_imagem_1',
  'url_da_imagem_2',
  'url_da_imagem_3',
  'url_da_imagem_4',
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
      <button onClick={previousImage}>Anterior</button>
      <div
        className="carousel-image"
        style={{ backgroundImage: `url(${carouselImages[currentImageIndex]})` }}
      ></div>
      <button onClick={nextImage}>Próxima</button>
    </div>
  );
};

export default Carousel;
