import React, { useEffect, useState } from 'react';
import './styles/ProductSyle.css';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('http://localhost:4041/usuarios');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, []);

  return (
    <div className='container'>
      <h2 className='titles'>Lista de Usuarios</h2>
      {users.map((user) => (
        <div key={user._id}>
          <h3>{user.name}</h3>
          <p>Rol: {user.role}</p>
          <p>Correo: {user.contact_email}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersList;