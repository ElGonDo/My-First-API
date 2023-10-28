import React, { useState, useEffect } from 'react';

const ProductPatch = () => {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState(0);
  const [moneda, setMoneda] = useState('');

  useEffect(() => {
    fetch('http://localhost:8081/productos')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error al cargar los productos:', error));
  }, []);

  const handleSeleccionarProducto = (event) => {
    const productoId = event.target.value;
    const productoSeleccionado = productos.find(producto => producto._id === productoId);
    setProductoSeleccionado(productoSeleccionado);

    if (productoSeleccionado) {
      setNombre(productoSeleccionado.nombre);
      setPrecio(productoSeleccionado.precio);
      setMoneda(productoSeleccionado.moneda);
    }
  };

  const handleActualizarProducto = () => {
    if (!productoSeleccionado) {
      console.error('Ningún producto seleccionado');
      return;
    }

    const productoId = productoSeleccionado._id;

    fetch(`http://localhost:8081/productos/${productoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name:nombre, price:precio, currency:moneda })
    })
      .then(response => {
        if (response.ok) {
          console.log('Producto actualizado exitosamente');
        } else {
          console.error('Error al actualizar el producto:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error al actualizar el producto:', error);
      });
  };

  return (
    <div>
      <label>
        Seleccione un producto:
        <select onChange={handleSeleccionarProducto}>
          <option value="">Seleccione un producto</option>
          {productos.map(producto => (
            <option key={producto._id} value={producto._id}>
              {producto.name}
            </option>
          ))}
        </select>
      </label>
      {productoSeleccionado && (
        <div>
          <h2>{productoSeleccionado.name}</h2>
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={event => setNombre(event.target.value)}
            />
          </label>
          <label>
            Precio:
            <input
              type="number"
              value={precio}
              onChange={event => setPrecio(event.target.value)}
            />
          </label>
          <label>
            Moneda:
            <input
              type="text"
              value={moneda}
              onChange={event => setMoneda(event.target.value)}
            />
          </label>
          <button onClick={handleActualizarProducto}>Actualizar Producto</button>
        </div>
      )}
    </div>
  );
};

export default ProductPatch;