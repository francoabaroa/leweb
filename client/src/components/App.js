import AFRAME from 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router';
import $ from 'jquery';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import Home from './Home.js';
import Main from './Main.js';
import Portfolio from './Portfolio.js';
import Skills from './Skills.js';
import Contact from './Contact.js';
import HackerWords from './HackerWords.js';
import Immerse from './Immerse.js';
import Goolp from './Goolp.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      open: false
    };
  }

  componentDidMount () {
  }

  componentDidUpdate () {
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }

  onEmailChange() {
    let route = arguments[0].props.label.toLowerCase();
    console.log(route, 'called');
    if (route === 'home') {
      this.props.router.replace('/');
    } else {
      this.props.router.replace('/' + route);
    }
  }

  portfolioChange(route) {
    if (route === 'immerse') {
      window.location = 'https://www.github.com/francoabaroa/escape-reality';
    } else {
      window.location = 'https://www.github.com/francoabaroa/' + route;
    }
  }


  render () {
    let self = this;
    let vrView = '';

    if (this.props.router.location.pathname.indexOf('/portfolio') >= 0) {
      console.log('this is rerendering PORT');
      return (
              <Portfolio onEmailChange={this.onEmailChange.bind(this)} portfolioChange={this.portfolioChange.bind(this)} router={self.props.router}/>
      );

    } else if (this.props.router.location.pathname.indexOf('/skills') >= 0) {
      console.log('this is rerendering SKILLS');
      return (
              <Skills onEmailChange={this.onEmailChange.bind(this)} router={this.props.router}/>
      );

    } else if (this.props.router.location.pathname.indexOf('/contact') >= 0) {
      console.log('this is rerendering CONTACT');
      return (
              <Contact onEmailChange={this.onEmailChange.bind(this)} router={this.props.router}/>
      );

    } else if (this.props.router.location.pathname.indexOf('/hackerwords') >= 0) {
      console.log('this is rerendering CONTACT');
      return (
              <HackerWords onEmailChange={this.onEmailChange.bind(this)} portfolioChange={this.portfolioChange.bind(this)} router={this.props.router}/>
      );

    } else if (this.props.router.location.pathname.indexOf('/immerse') >= 0) {
      console.log('this is rerendering CONTACT');
      return (
              <Immerse onEmailChange={this.onEmailChange.bind(this)} portfolioChange={this.portfolioChange.bind(this)} router={this.props.router}/>
      );

    } else if (this.props.router.location.pathname.indexOf('/goolp') >= 0) {
      console.log('this is rerendering CONTACT');
      return (
              <Goolp onEmailChange={this.onEmailChange.bind(this)} portfolioChange={this.portfolioChange.bind(this)} router={this.props.router}/>
      );

    } else if (this.props.router.location.pathname.indexOf('/') >= 0) {
      console.log('this is rerendering home');
      return (
              <Home onEmailChange={this.onEmailChange.bind(this)} router={this.props.router} />
      );

    }
  }
}


export default withRouter(App, { withRef: true });