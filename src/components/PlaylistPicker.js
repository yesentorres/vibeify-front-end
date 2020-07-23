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

function PlaylistPicker() {

  const [playlistGenerated, setPlaylistGenerated] = useState(false);
  const [playlistUrl, setPlaylistUrl] = useState(null)
  const [reset, setReset] = useState(false);

  const showPlaylist = (url) => {
    setPlaylistUrl(url);
    setPlaylistGenerated(true);
  }

  const openPlaylist = () => {
    window.open(`${playlistUrl}`, '_self')
  }

  const resetPlaylist = () => {
    setPlaylistGenerated(false);
  }


  return (
    <div className="playlist-picker">
      <Grid container spacing={3}>
        <Grid item xs={12}>

          <AppBar position="static">
            <Toolbar>
              <UserInfo />
            </Toolbar>
          </AppBar>
     
        </Grid>

        <div className="test">
          <Grid item xs={8}>
            {
              playlistGenerated ?
              <div>
                <button onClick={openPlaylist}>Open Playlist in Spotify</button> 
                <button onClick={resetPlaylist}>Reset</button> 
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