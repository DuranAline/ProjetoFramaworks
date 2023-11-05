import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="icon">
        <img src="/image/icon.png" alt="Ícone de Avião" />
      </div>
      <div className="header-content">
        <h1 className="title">DIÁRIO DE UMA VIAGEM</h1>
      </div>
    </header>
  );
};

export default Header;
