import React, { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string'
import {Link} from 'react-router-dom'
import './Callback.css';

function Callback() {

  useEffect ( () => {

    // send authorization code to my flask server
    const  authCode = queryString.parse(window.location.search);

    axios.post('https://vibeify-back-end.herokuapp.com/access', {
      params : {
        auth_code: authCode 
      }
    })
    .then( (response) => {
      console.log(response.data);
    })
    .catch( (error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="callback">
      <Link to="/playlist_picker">Begin Customizing your Listening Experience</Link>
    </div>
  );
}

export default Callback;