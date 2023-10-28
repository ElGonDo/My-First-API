import React, { useState } from 'react';
import './styles/ProductSyle.css';

function ProductPost() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [moneda, setMoneda] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear el objeto de datos del producto
    const data = {
        name: nombre,
        price: precio,
        currency: moneda
    };

    // Enviar la solicitud POST
    fetch('http://localhost:8081/productos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Producto creado:', data);
        // Actualizar el estado o hacer cualquier otra acción necesaria
      })
      .catch(error => {
        console.error('Error al crear el producto:', error);
      });

    // Limpiar los campos después de enviar la solicitud
    setNombre('');
    setPrecio('');
    setMoneda('');
  };

  return (
    <div className='container'>
      <h1>Agregar Producto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </label>
        <br />
        <label>
          Precio:
          <input
            type="text"
            value={precio}
            onChange={e => setPrecio(e.target.value)}
          />
        </label>
        <br />
        <label>
          Moneda:
          <input
            type="text"
            value={moneda}
            onChange={e => setMoneda(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
}

export default ProductPost;