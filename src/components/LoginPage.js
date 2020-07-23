
import React, { useState } from 'react';
import './LoginPage.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FE5596'
      // main: '#FDE88F'
      // main: '#40E0D0'
    }
  }
});

function LoginPage() {

  const initiateLogin = () => {    
    window.open('https://vibeify-back-end.herokuapp.com/', '_self')
  }

  return (
    <div className="loginPage">
      <MuiThemeProvider theme={theme}>
      <Fade left>
        <main className="loginPage-main">
          <h1 className="loginPage-main_title">
            Vibeify
          </h1>

          <h2 className="loginPage-main_subtitle">
            Create custom playlists to fit your vibe.
          </h2>

          <div className="loginPage-main_login_button">
            <Button onClick={initiateLogin} variant="contained" color="primary" size="large">
              Login with Spotify
            </Button>
          </div>
        </main>
      </Fade>
      </MuiThemeProvider>
    </div>
  );
}

export default LoginPage;