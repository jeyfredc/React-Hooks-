import React from 'react';
import Saludo from './components/Saludo'
import Comentario from './components/Comentario'

function App() {

  const sujeto = {
    nombre: 'Camilo',
    urlImagen: 'https://via.placeholder.com/64',
    texto: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  }

  return (
    <div className="container mt-2">
      <Saludo persona ="Ignacio" edad={30} />
      <Saludo persona ="Jeyfred" edad={26} />
      <Comentario sujeto={sujeto}/>
    </div>
  );
}

export default App;
