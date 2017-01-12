import 'aframe';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App.js';
import Home from './components/Home.js';
import Main from './components/Main.js';
import Portfolio from './components/Portfolio.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import HackerWords from './components/HackerWords.js';
import Immerse from './components/Immerse.js';
import Goolp from './components/Goolp.js';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/skills" component={Skills} />
      <Route path="/contact" component={Contact} />
      <Route path="/hackerwords" component={HackerWords} />
      <Route path="/immerse" component={Immerse} />
      <Route path="/goolp" component={Goolp} />
    </Route>
  </Router>
), document.querySelector('.scene-container'));
