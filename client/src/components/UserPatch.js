import React, { useState, useEffect } from 'react';

const UserPatch = () => {
  const [users, setUsers] = useState([]);
  const [userSeleccionado, setUserSeleccionado] = useState(null);
  const [nombre, setNombre] = useState('');
  const [rol, setRol] = useState(0);
  const [correo, setCorreo] = useState('');

  useEffect(() => {
    fetch('http://localhost:4041/usuarios')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error al cargar los Usuarios:', error));
  }, []);

  const handleSeleccionarUser = (event) => {
    const userId = event.target.value;
    const userSeleccionado = users.find(user => user._id === userId);
    setUserSeleccionado(userSeleccionado);

    if (userSeleccionado) {
      setNombre(userSeleccionado.nombre);
      setRol(userSeleccionado.rol);
      setCorreo(userSeleccionado.correo);
    }
  };

  const handleActualizarUser = () => {
    if (!userSeleccionado) {
      console.error('Ningún usuario seleccionado');
      return;
    }

    const userId = userSeleccionado._id;

    fetch(`http://localhost:4041/usuarios/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: nombre, role: rol, contact_email: correo })
    })
      .then(response => {
        if (response.ok) {
          console.log('User actualizado exitosamente');
        } else {
          console.error('Error al actualizar el Usuario:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error al actualizar el Usuario:', error);
      });
  };

  return (
    <div>
      <label>
        Seleccione un usuario:
        <select onChange={handleSeleccionarUser}>
          <option value="">Seleccione un usuario</option>
          {users.map(user => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
      </label>
      {userSeleccionado && (
        <div>
          <h2>{userSeleccionado.name}</h2>
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={event => setNombre(event.target.value)}
            />
          </label>
          <label>
            Rol:
            <input
              type="text"
              value={rol}
              onChange={event => setRol(event.target.value)}
            />
          </label>
          <label>
            Correo:
            <input
              type="email"
              value={correo}
              onChange={event => setCorreo(event.target.value)}
            />
          </label>
          <button onClick={handleActualizarUser}>Actualizar Usuario</button>
        </div>
      )}
    </div>
  );
};

export default UserPatch;