
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

function Home() {
  
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const login = () => {    
    // http://localhost:5000/
    // https://vibeify-back-end.herokuapp.com/
    window.open('https://vibeify-back-end.herokuapp.com/', '_self')
  }

  return (

    <div className="home">

      <button onClick={login} className="login-button">
        Login with Spotify
      </button>
      {successMessage ? <h1>{successMessage}</h1> : <h1>success?</h1>}
      {errorMessage ? <h1>{errorMessage}</h1> : <h1>error?</h1>}
    </div>

  );
}

export default Home;