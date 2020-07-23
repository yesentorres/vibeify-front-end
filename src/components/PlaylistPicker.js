import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserInfo from './UserInfo'
import VibeForm from './VibeForm'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import './PlaylistPicker.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ResetOptions from './ResetOptions';
const theme = createMuiTheme({
  palette: {
    primary: {
            // main: '#FD6A96'
            // main: '#FDE88F'
            main: '#5432C4'
            // main: '#40E0D0'
    }, 
    secondary: {
      main: '#FD6A96'
    }
  }
});

function PlaylistPicker() {

  const [playlistGenerated, setPlaylistGenerated] = useState(false);
  const [playlistUrl, setPlaylistUrl] = useState(null)
  const [reset, setReset] = useState(false);
  

  const showPlaylist = (url) => {
    setPlaylistUrl(url);
    setPlaylistGenerated(true);
  }

  const openPlaylist = () => {
    window.open(`${playlistUrl}`, '_blank')
  }

  const resetPlaylist = () => {
    setPlaylistGenerated(false);
  }

  const initiateLogout = () => {
    window.open('https://vibeify.herokuapp.com', '_self')
  }

  // Materiul UI Elements Styling 
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    navItems: {
      marginTop: '.75rem'
    },
    logoutButton: {
      marginLeft: "auto",
      paddingTop: '.75rem'
    }
  }));
  const classes = useStyles();

  return (
    <div className="playlist-picker">
    
      <Grid container spacing={3}>

        <div className={classes.root}>
          <Grid item xs={12}>
            <AppBar position="static">
              <Toolbar variant="dense" className={classes.navItems}>
                <UserInfo />
                <Button variant="contained" color='secondary' className={classes.logoutButton} onClick={initiateLogout}> Logout </Button>
              </Toolbar>
            </AppBar>
          </Grid>
        </div>

        <div className="playlist-picker-main">
          <Grid item xs={8}>
            {
              playlistGenerated ?
                <div>
                  <ResetOptions onClickCallback1={openPlaylist} onClickCallback2={resetPlaylist}/>
                  {/* <Grid container spacing={6}>
                    <Grid item xs={6}> 
                      <Button variant="contained" color="secondary" onClick={openPlaylist}>Open Playlist in Spotify</Button> 
                    </Grid>
                    <Grid item xs={6}> 
                    </Grid>
                  </Grid>
                  <Button variant="contained" color="secondary" onClick={resetPlaylist}>Reset</Button>  */}
                </div>
              :
                <VibeForm onSubmitCallback={showPlaylist}/>
            }
          </Grid>
        </div>
      </Grid>
  
    </div>
  );
}

export default PlaylistPicker;