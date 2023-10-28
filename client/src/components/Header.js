import React from 'react';
import './styles/HeaderStyle.css';
import logo from '../components/assets/logo512.png'; // Asegúrate de ajustar la ruta a tu imagen
const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" id='logo' />
      </div>
      <div className="name-container">
        <h1>Consumo De Una API REST</h1>
      </div>
    </header>
  );
};

export default Header;