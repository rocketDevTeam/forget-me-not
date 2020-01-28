import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'


import Home from './components/home'
import Registration from './components/registration';


const routing = (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/registration" component={Registration} />
        <Route component={Home} />
      </Switch>
  </Router>
  )

  ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
