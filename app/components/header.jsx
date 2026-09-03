
import React from 'react';
import './app/globals.css';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo-container">
         <Image src="/logo.png" alt="Logo" width={50} height={50} />
        
        <span className="site-title">MeinWebshop</span>
      </div>
      
      <nav className="main-navigation">
        <ul>
          <li><a href="#home">Startseite</a></li>
          <li><a href="#products">Produkte</a></li>
          <li><a href="#about">Über uns</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
 