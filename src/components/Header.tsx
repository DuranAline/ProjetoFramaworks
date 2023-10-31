import React from 'react';

import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="icon">
     
      </div>
      <h1 className="title">Diário de uma Viagem</h1>
      <nav>
        <ul className="menu">
          <li>
            <a href="#fotos">Fotos</a>
          </li>
          <li>
            <a href="#destinos">Destinos</a>
          </li>
          <li>
            <a href="#onde-ficar">Onde Ficar</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
