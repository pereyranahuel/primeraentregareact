import React from 'react';

const MyFunctionalComponent = () => {
  // Función de saludo
  const saludar = (nombre) => {
    alert(`¡Hola, ${nombre}!`);
  };

  return (
    <div>
      <h1>Componente Funcional</h1>
      <button onClick={() => saludar('Usuario')}>Saludar</button>
    </div>
  );
};

export default MyFunctionalComponent;
