import React, { useState } from 'react';
import './styles/ProductSyle.css';

function UserPost() {
  const [nombre, setNombre] = useState('');
  const [rol, setRol] = useState('');
  const [correo, setCorreo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear el objeto de datos del producto
    const data = {
      name: nombre,
      role: rol,
      contact_email: correo
    };

    // Enviar la solicitud POST
    fetch('http://localhost:4041/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Usuario creado:', data);
        // Actualizar el estado o hacer cualquier otra acción necesaria
      })
      .catch(error => {
        console.error('Error al crear el usuario:', error);
      });

    // Limpiar los campos después de enviar la solicitud
    setNombre('');
    setRol('');
    setCorreo('');
  };

  return (
    <div className='container'>
      <h1>Registar Usuario</h1>
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
          Rol:
          <input
            type="text"
            value={rol}
            onChange={e => setRol(e.target.value)}
          />
        </label>
        <br />
        <label>
          Correo:
          <input
            type="email"
            value={correo}
            onChange={e => setCorreo(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Registrar usuario</button>
      </form>
    </div>
  );
}

export default UserPost;