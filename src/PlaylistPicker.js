import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import UserInfo from './UserInfo'
import VibeForm from './VibeForm'

function PlaylistPicker() {

  

  return (
    <div className="playlist-picker">
      <UserInfo />
      <h3>
        Enter preferences:
      </h3>
      <VibeForm />
    </div>
  );
}

export default PlaylistPicker;