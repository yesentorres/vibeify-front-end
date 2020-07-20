import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import UserInfo from './UserInfo'
import VibeForm from './VibeForm'

function PlaylistPicker() {

  const [playlistGenerated, setPlaylistGenerated] = useState(false);
  const [playlistUrl, setPlaylistUrl] = useState(null)

  const showPlaylist = (url) => {
    setPlaylistUrl(url);
    setPlaylistGenerated(true);
  }

  const openPlaylist = () => {
    window.open(`${playlistUrl}`, '_self')
  }

   console.log(playlistGenerated);

  return (
    <div className="playlist-picker">
      <UserInfo />
      <h3>
        Enter preferences:
      </h3>
      {
        playlistGenerated ?
        <button onClick={openPlaylist}>Open Playlist in Spotify</button> 
        :
        <VibeForm onSubmitCallback={showPlaylist}/>
      }
      
    </div>
  );
}

export default PlaylistPicker;