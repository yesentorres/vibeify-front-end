import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function UserInfo() {

  const [username, setUsername] = useState(null);

  useEffect ( () => {
    // http://localhost:5000/user-info
    // https://vibeify-back-end.herokuapp.com/user-info
    axios.get('http://localhost:5000/user-info')
    .then( (response) => {
      setUsername(response.data);
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="user-info">
      <h2>
        Welcome, <strong>{username}</strong>
      </h2>
    </div>
  );
}

export default UserInfo;