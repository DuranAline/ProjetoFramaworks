import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="icon">
        <Fontisto name="passport" size={24} color="black" />
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
