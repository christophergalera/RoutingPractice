import React from 'react';
import './App.css';
import {Router} from '@reach/router'
import Home from './Component/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path= "/home" />
        <Home path= "/:word" />
        <Home path= "/:word/:font/:bground" />
      </Router>
    </div>
  );
}

export default App;
