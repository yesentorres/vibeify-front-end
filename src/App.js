import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import Callback from './components/Callback';
import PlaylistPicker from './components/PlaylistPicker';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {

  return (
    <Router>
    <div className="app"> 
      <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/callback" component={Callback} />
          <Route path="/playlist_picker" component={PlaylistPicker} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;