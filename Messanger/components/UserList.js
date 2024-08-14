import React, { useState, useEffect } from'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/users/')
     .then((response) => response.json())
     .then((data) => setUsers(data))
     .catch((error) => console.error(error));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;