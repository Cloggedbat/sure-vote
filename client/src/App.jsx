import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Homepage from './pages/Homepage'

function App() {
  return (
    <Router>
    <Navbar/>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/profile' component={Profile} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
