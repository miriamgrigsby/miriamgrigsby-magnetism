import React from 'react';
import './App.css';
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/'>
          <Home />
        </Route>
      </div>
    </Router>
  );
}

export default App;
