import React from 'react';
import './App.css';
import Home from './Components/Home'
import Analysis from './Components/Analysis'
import Geodynamo from './Components/Geodynamo'
import VisualDisplay from './Components/VisualDisplay'
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import Resume from './Components/Resume'
import Projects from './Components/Projects'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Redirect exact from="/" to="/about-me" />
        <Route exact path='/about-me' >
          <AboutMe />
        </Route>
        <Route exact path='/analysis' component={Analysis} />
        <Route exact path='/geodynamo' component={Geodynamo} />
        <Route exact path='/visual-display' component={VisualDisplay} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/project' component={Projects} />
        <Route exact path='/contact' component={Contact} />
      </div>
    </Router>
  );
}

export default App;
