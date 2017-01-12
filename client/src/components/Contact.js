import React from 'react';
import { Link, withRouter } from 'react-router';
import $ from 'jquery';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';
import FlatButton from 'material-ui/FlatButton';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';

import Drawer from 'material-ui/Drawer';

import ReactDOM from 'react-dom';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';

const vex = require('vex-js');

vex.registerPlugin(require('vex-dialog'));
vex.defaultOptions.className = 'vex-theme-os';

vex.dialog.buttons.NO.text = 'Close';
vex.dialog.buttons.YES.text = 'Close';

const emailPopUp = () => {
  vex.dialog.open({
      message: 'abaroa.franco@gmail.com',
      input: [
          '<div class="vex-custom-field-wrapper">',
              '<button class="btn" data-clipboard-text="abaroa.franco@gmail.com">',
                  'Copy to clipboard',
              '</button>',
          '</div>'
      ].join(''),
      callback: function (data) {
          if (!data) {
              return console.log('Cancelled')
          }
          console.log('Date', data.date, 'Color', data.color)
      }
  })
};


export default props => {

  return (
      <div>

              <Tabs initialSelectedIndex={3} justified={true}>
                     <Tab className="mui--text-white" value="pane-1" label="Home" onActive={props.onEmailChange}></Tab>
                     <Tab className="mui--text-white" value="pane-2" label="Portfolio" onActive={props.onEmailChange}></Tab>
                     <Tab value="pane-3" label="Skills" onActive={props.onEmailChange}></Tab>
                     <Tab value="pane-4" label="Contact" onActive={props.onEmailChange}></Tab>
                   </Tabs>

                   <br/>

                   <div className="mui--text-display1 mui--text-center">
                     <a onClick={() => { emailPopUp(); }} href="#"> Email </a>
                   </div>

                   <div className="mui--text-display1 mui--text-center">
                     <a href="https://www.github.com/francoabaroa"> Github </a>
                   </div>

                   <div className="mui--text-display1 mui--text-center">
                     <a href="https://www.linkedin.com/in/francoabaroa"> LinkedIn </a>
                   </div>

                   <div className="mui--text-display1 mui--text-center">
                     <a href="img/FrancoAbaroaResume.pdf"> Resume </a>
                   </div>

            </div>
  );
};
