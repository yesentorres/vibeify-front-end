import React, { useState } from 'react';
import './App.css';

import Home from './Home';
import Callback from './Callback';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  

  return (
    <Router>
    <div className="app">
      <h1>~ Vibeify ~</h1>

      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/callback" component={Callback} />
      </Switch>
    </div>
    </Router>

  );
}

export default App;
