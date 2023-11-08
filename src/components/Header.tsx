import React from 'react';
import './Header.css';

// Define o componente 'Header' como uma função que não recebe nenhum argumento (componente stateless).
const Header: React.FC = () => {
  return (
    // Define a estrutura do cabeçalho dentro de uma tag <header> com a classe 'header'.
    <header className="header">
      <div className="icon">
        {/* Insere uma imagem de ícone de avião com o atributo 'alt' para acessibilidade. */}
        <img src="/image/icon.png" alt="Ícone de Avião" />
      </div>
      <div className="header-content">
        {/* Insere um título (h1) com o texto 'DIÁRIO DE UMA VIAGEM'. */}
        <h1 className="title">DIÁRIO DE UMA VIAGEM</h1>
      </div>
    </header>
  );
};

// Exporta o componente 'Header' para que ele possa ser usado em outros lugares do aplicativo.
export default Header;
