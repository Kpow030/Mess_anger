import React, { useState } from'react';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: '',
    avatar: '',
  });

  const handleNameChange = (event) => {
    setUser({...user, name: event.target.value });
  };

  const handleAvatarChange = (event) => {
    setUser({...user, avatar: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // отправить запрос на сервер для сохранения изменений
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Имя:
        <input type="text" value={user.name} onChange={handleNameChange} />
      </label>
      <label>
        Аватар:
        <input type="text" value={user.avatar} onChange={handleAvatarChange} />
      </label>
      <button type="submit">Сохранить</button>
    </form>
  );
};

const handleSubmit = (event) => {
  event.preventDefault();
  fetch('/user/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
   .then((response) => response.json())
   .then((data) => console.log(data))
   .catch((error) => console.error(error));
};


export default UserProfile;