import { useState } from 'react';
import './Carousel.css';

// Define um array de caminhos para imagens que serão exibidas no carrossel.
const carouselImages = [
  './image/sp.jpeg',
  './image/tal.jpeg',
  './image/to.webp',
  './image/tc.png',
];

// Define o componente 'Carousel' como uma função de componente 
const Carousel: React.FC = () => {
  // Cria um estado local 'currentImageIndex' para acompanhar a imagem atual exibida no carrossel.
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Função para avançar para a próxima imagem no carrossel.
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Função para voltar para a imagem anterior no carrossel.
  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    // Renderiza o componente do carrossel com a classe CSS "carousel".
    <div className="carousel">
      <h1>Diário de uma Viagem</h1>
      <p>Viajar é uma experiência incrível que nos permite explorar novos lugares, culturas e sabores. Durante uma viagem, podemos criar memórias inesquecíveis, conhecer pessoas incríveis e nos desconectar da rotina.</p>

      {/* Exibe a imagem atual do carrossel com base no 'currentImageIndex'. */}
      <div
        className="carousel-image"
        style={{ backgroundImage: `url(${carouselImages[currentImageIndex]})` }}
      ></div>

      <p>Eu adoro viajar! E você, gosta de viajar? Deixe seu comentário abaixo:</p>

      {/* A seção de comentários seria renderizada aqui */}
      <div className="comment-section">
      </div>

      {/* Botões para navegar entre as imagens do carrossel. */}
      <button onClick={previousImage}>Anterior</button>
      <button onClick={nextImage}>Próxima</button>
    </div>
  );
};

// Exporta o componente 'Carousel' para que ele possa ser usado em outros lugares da aplicação.
export default Carousel;
