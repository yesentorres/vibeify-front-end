import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Home from './Home';
import Callback from './Callback';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PlaylistPicker from './PlaylistPicker';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';



function App() {

  return (
    <Router>
    <div className="app">
      <h1>~ Vibeify ~</h1>

      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/callback" component={Callback} />
          <Route path="/playlist_picker" component={PlaylistPicker} />
      </Switch>
    </div>
    </Router>

  );
}

export default App;
