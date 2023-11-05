import React from 'react';
import './Footer.css';

// Define o componente 'Footer' como uma função de componente 
const Footer: React.FC = () => {
  return (
    // Renderiza a seção de rodapé dentro de uma tag <footer> com a classe 'footer'.
    <footer className="footer">
      <div className="social-icons">
        {/* Um parágrafo que exibe um texto de boas-vindas ou instruções. */}
        <p className='paragrafo1'>Siga a gente nas redes sociais</p>

        {/* Links para as redes sociais, cada um contendo uma imagem associada a elas. */}
        <a href="#link-facebook">
          <img src="/image/facebook.png" alt="Facebook" />
        </a>
        <a href="#link-tiktok">
          <img src="/image/tiktok.png" alt="Tiktok.png" />
        </a>
        <a href="#link-instagram">
          <img src="/image/instagram.png" alt="Instagram.png" />
        </a>
      </div>
    </footer>
  );
};

// Exporta o componente 'Footer' para que ele possa ser usado em outros lugares da aplicação.
export default Footer;
