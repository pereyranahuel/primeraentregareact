import React from 'react';
import CartWidget from './Cartwidget';

const headerStyle = {
  backgroundColor: '#2c3e50',
  padding: '1rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const navLinkStyle = {
  color: '#ecf0f1',
  textDecoration: 'none',
  padding: '0.5rem',
  borderRadius: '4px',
  transition: 'background-color 0.3s',
};

const activeLinkStyle = {
  backgroundColor: '#3498db',
};

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const luStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '1rem',
  margin: 0,
  padding: 0,
};

const Navbar = () => {
  // Obtener la ruta actual
  const currentPath = window.location.pathname;

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <div className="mr-8">
          <img src="/components/navbar/logo.png" alt="logo" className="h-8 w-8" />
        </div>
        <ul style={luStyle}>
          <li><a href="/" style={{ ...navLinkStyle, ...(currentPath === '/' && activeLinkStyle) }}>Inicio</a></li>
          <li><a href="/productos" style={{ ...navLinkStyle, ...(currentPath === '/productos' && activeLinkStyle) }}>Productos</a></li>
          <li><a href="/servicios" style={{ ...navLinkStyle, ...(currentPath === '/servicios' && activeLinkStyle) }}>Servicios</a></li>
          <li><a href="/contacto" style={{ ...navLinkStyle, ...(currentPath === '/contacto' && activeLinkStyle) }}>Contacto</a></li>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
};

const ExampleComponent = () => (
  <div>
    
    <Navbar />
  </div>
);

export default ExampleComponent;
