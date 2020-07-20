import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


function UserInfo() {

  const [username, setUsername] = useState(null);


  useEffect ( () => {
    // local: http://localhost:5000/user-info
    // deployed: https://vibeify-back-end.herokuapp.com/user-info
    axios.get('https://vibeify-back-end.herokuapp.com/user-info')
    .then( (response) => {
      setUsername(response.data.display_name);
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