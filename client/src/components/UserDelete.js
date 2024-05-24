import React, { useState, useEffect } from 'react';
import './styles/ProductSyle.css';

const UserDelete = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4041/usuarios')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error al cargar los usuarios:', error));
  }, []);

  const handleBorrarUser = () => {
    const usuarioId = document.querySelector('select').value;

    fetch(`http://localhost:4041/usuarios/${usuarioId}`, {
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
      <label className='titles'>
        Seleccione un usuario:
        <select>
          {users.map(user => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleBorrarUser}>Eliminar</button>
    </div>
  );
};

export default UserDelete;