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

  render () {
    let self = this;
    let vrView = '';

    if (this.props.router.location.pathname.indexOf('/') >= 0) {
      return (
        <Home handleToggle={this.handleToggle.bind(this)} open={this.state.open} />
      );
    } else if (this.props.router.location.pathname.indexOf('/main') >= 0) {
      return (
              <Main/>
      );

    }
  }
}


export default withRouter(App, { withRef: true });