import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import UserInfo from './UserInfo'
import VibeForm from './VibeForm'

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
      <UserInfo />
      <h3>
        Enter preferences:
      </h3>
      {
        playlistGenerated ?
        <div>
          <button onClick={openPlaylist}>Open Playlist in Spotify</button> 
          <button onClick={resetPlaylist}>Reset</button> 
        </div>
        :
        <VibeForm onSubmitCallback={showPlaylist}/>
      }
      
    </div>
  );
}

export default PlaylistPicker;