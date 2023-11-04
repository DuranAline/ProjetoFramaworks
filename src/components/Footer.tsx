import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
         <p className='paragrafo1'>Siga a gente nas redes sociais</p>
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

export default Footer;
