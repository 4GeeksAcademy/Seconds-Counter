import React, { useState, useEffect } from 'react';

const ContadorSegundos = () => {
  // Estado para almacenar el contador de segundos
  const [segundos, setSegundos] = useState(0);

  // Efecto que se ejecuta cada segundo
  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos(prevSegundos => prevSegundos + 1);
    }, 1000); // 1000 milisegundos = 1 segundo

    // Función de limpieza para limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalo);
  }, []); // Dependencias vacías para que solo se ejecute al montar el componente

  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=VT323&display=swap');
      </style>
      <h1>Contador de Segundos:</h1>
      <div className="cronometro">
        <h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-stopwatch" viewBox="0 0 16 16">
            <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
            <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
          </svg> SEGUNDOS: <h4>{segundos}</h4>
        </h4>
      </div>
    </div>
  );
};

export default ContadorSegundos;
