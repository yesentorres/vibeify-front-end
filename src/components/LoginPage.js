
import React, { useState } from 'react';
import './LoginPage.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';

function LoginPage() {

  const initiateLogin = () => {    
    window.open('http://localhost:5000/', '_self')
  }

  return (
    <div className="loginPage">
      <Fade left>
        <main className="loginPage-main">
          <h1 className="loginPage-main_title">
            Vibeify
          </h1>

          <h3 className="loginPage-main_subtitle">
            Create custom playlists to fit your vibe.
          </h3>

          <div className="loginPage-main_login_button">
            <Button onClick={initiateLogin} variant="contained" color="primary" size="large">
              Login with Spotify
            </Button>
          </div>
        </main>
      </Fade>
    </div>
  );
}

export default LoginPage;