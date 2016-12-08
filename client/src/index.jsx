import 'aframe';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App.js';
import Home from './components/Home.js';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >
    </Route>
  </Router>
), document.querySelector('.scene-container'));