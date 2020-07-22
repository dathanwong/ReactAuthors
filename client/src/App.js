import React from 'react';
import './App.css';
import Home from './views/Home';
import Edit from './views/Edit';
import { Router } from '@reach/router';
import Create from './views/Create';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/"/>
        <Edit path="/edit/:id"/>
        <Create path="/new"/>
      </Router>
      
    </div>
  );
}

export default App;
