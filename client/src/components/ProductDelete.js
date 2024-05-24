import React, { useState, useEffect } from 'react';
import './styles/ProductSyle.css';

const ProductDelete = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/productos')
      .then(response => response.json())
      .then(data => setUsuarios(data))
      .catch(error => console.error('Error al cargar los productos:', error));
  }, []);

  const handleBorrarProducto = () => {
    const usuarioId = document.querySelector('select').value;

    fetch(`http://localhost:8081/productos/${usuarioId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          console.log('Usuario borrado exitosamente');
          // Realizar cualquier actualización adicional que sea necesaria
        } else {
          console.error('Error al borrar el usuario:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error al borrar el usuario:', error);
      });
  };

  return (
    <div className='container'>
      <label>
        Seleccione un usuario:
        <select>
          {usuarios.map(producto => (
            <option key={producto._id} value={producto._id}>
              {producto.name}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleBorrarProducto}>Eliminar</button>
    </div>
  );
};

export default ProductDelete;