
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function Home() {

  const [successMessage, setSuccessMessage] = useState(null);
  const [auth, setAuth] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const login = () => {

    axios({
      method: 'get',
      url: 'https://accounts.spotify.com/authorize',
      params: {
        client_id: 'de8aa444cc514d62868cc524349fa131',
        response_type: 'code',
        redirect_uri: 'http://localhost:3000/callback',
        scope: 'user-read-email',
        show_dialog: 'true'
      },
      headers: { 
        'Access-Control-Allow-Origin' : 'http://localhost:3000/'
      } 
    })
    .then((response) => {
      console.log(response);
      setSuccessMessage('not null no more!');
      // // Load in the data
      // setResult(response.data) 
    })
    .catch((error) => {
      // Show an error
      setErrorMessage('There was an error with this request!');
      console.log(error);
    })

  }

  return (

    <div className="home">

      <button onClick={login} className="login-button">
        Login with Spotify
      </button>
      {successMessage ? <h1>You're logged in!</h1> : <h1>not logged in</h1>}
    </div>

  );
}

export default Home;