import React, { useEffect, useState } from 'react';
import './styles/ProductSyle.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('http://localhost:8081/productos');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className='container'>
      <h2>Lista de Productos</h2>
      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Precio: {product.price}</p>
          <p>Moneda: {product.currency}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;