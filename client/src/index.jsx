import 'aframe';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App.js';
import Home from './components/Home.js';
import Main from './components/Main.js';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >
    </Route>
    <Route path="/main" component={Main} >
    </Route>
  </Router>
), document.querySelector('.scene-container'));