import AFRAME from 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router';
import $ from 'jquery';
import isEmail from 'validator/lib/isEmail';

import UnifiedComponent from './UnifiedComponent';

import Home from './Home.js';
import Image from './Image.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
    };
  }

  componentDidMount () {
  }

  componentDidUpdate () {
  }


  render () {
    let self = this;
    let vrView = '';

    if (this.props.router.location.pathname.indexOf('/') >= 0) {
      return (
        <Home/>
      );
    } {/*else if (this.props.router.location.pathname.indexOf('/dashboard') >= 0) {
      return (
              <Dashboard
              currentUser={this.state.currentUser}
                profilePic = {this.state.profilePic}
                shouldHide={this.state.isUploading}
                uploadBar={this.uploadBar.bind(this)}
              />
      );

    } */}
  }
}


export default withRouter(App, { withRef: true });