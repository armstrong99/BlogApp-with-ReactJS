import React from 'react';
import { Switch, Router, Route } from 'react-router-dom'
import history from './history'
import Home from './Views/Home';
import './App.css'

function App() {
  return (
    <Router history={history}>
      <Switch>
      <Route exact path={'/'} component={Home} />

      </Switch>
    </Router> 
  );
}

export default App;
