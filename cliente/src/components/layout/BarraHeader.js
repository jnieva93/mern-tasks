import React from 'react';

const BarraHeader = () => {
  return (
    <header className='app-header'>
      <p className='nombre-usuario'>Hola, <span>usuario</span></p>

      <nav className='nav-principal'>
        <a href='#!'>Cerrar Sesión</a>
      </nav>
    </header>
  );
}
 
export default BarraHeader;
