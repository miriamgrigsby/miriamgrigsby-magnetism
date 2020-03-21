import React from 'react';
import './App.css';
import Home from './Components/Home'
import Analysis from './Components/Analysis'
import PoleReversal from './Components/PoleReversal'
import VisualDisplay from './Components/VisualDisplay'
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Redirect exact from="/" to="/home" />
        <Route exact path='/home' >
          <Home />
        </Route>
        <Route exact path='/analysis' component={Analysis} />
        <Route exact path='/pole-reversal' component={PoleReversal} />
        <Route exact path='/visual-display' component={VisualDisplay} />
        <Route exact path='/about-me' component={AboutMe} />
        <Route exact path='/contact' component={Contact} />
      </div>
    </Router>
  );
}

export default App;
