import React, { useState, useEffect } from 'react';
import './styles/ProductSyle.css';

const ProductDelete = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/productos')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error al cargar los productos:', error));
  }, []);

  const handleBorrarProducto = () => {
    const productoId = document.querySelector('select').value;

    fetch(`http://localhost:8081/productos/${productoId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          console.log('Producto borrado exitosamente');
          // Realizar cualquier actualización adicional que sea necesaria
        } else {
          console.error('Error al borrar el producto:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error al borrar el producto:', error);
      });
  };

  return (
    <div className='container'>
      <label>
        Seleccione un producto:
        <select>
          {productos.map(producto => (
            <option key={producto._id} value={producto._id}>
              {producto.name}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleBorrarProducto}>Borrar</button>
    </div>
  );
};

export default ProductDelete;