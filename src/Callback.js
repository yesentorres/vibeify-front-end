import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import queryString from 'query-string'
import {Link} from 'react-router-dom'

function Callback() {

  useEffect ( () => {
    // send access code to my flask server 
    const  auth_code = queryString.parse(window.location.search);
    // http://localhost:5000/access
    // https://vibeify-back-end.herokuapp.com/access
    axios.post('https://vibeify-back-end.herokuapp.com/access', {
      params : {
        auth_code: auth_code 
      }
    })
    .then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });

  }, []);

  return (
    <div className="callback">
      <h1>
        Welcome ! 
      </h1>
      <Link to="/playlist_picker">Begin Customizing Listening Experience</Link>
    </div>
  );
}

export default Callback;