import React, { useEffect, useState } from 'react';
import axios from 'axios';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

function UserInfo() {

  const [username, setUsername] = useState(null);

  useEffect ( () => {
    // local: http://localhost:5000/user-info
    // deployed: http://localhost:5000.herokuapp.com/user-info
    axios.get('http://localhost:5000/user-info')
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
      <h3>
        Welcome, {username}
      </h3>
    </div>
  );
}

export default UserInfo;