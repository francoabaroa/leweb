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


export default props => {

  return (
      <div>


              <div>
              <Tabs initialSelectedIndex={2} justified={true}>
                     <Tab className="mui--text-white" value="pane-1" label="Home" onActive={props.onEmailChange}></Tab>
                     <Tab className="mui--text-white" value="pane-2" label="Portfolio" onActive={props.onEmailChange}></Tab>
                     <Tab value="pane-3" label="Skills" onActive={props.onEmailChange}></Tab>
                     <Tab value="pane-4" label="Contact" onActive={props.onEmailChange}></Tab>
                   </Tabs>
              </div>
                   <br/>
                   <br/>
                   <div className="mui--text-center">
                   <h4 className="mui--text-display1 mui--text-center"> Web Development </h4>
                   <h5 className="mui--text-center"> JavaScript - React - AFrame - NodeJS - AngularJS - D3.js  </h5> <h5> BackboneJS - AJAX - jQuery - HTML5 - CSS3 - AuthO </h5>
                   </div>
                   <br/>
                   <br/>
                   <div className="mui--text-center">
                   <h4 className="mui--text-display1 mui--text-center"> Databases and ORMs </h4>
                   <h5 className="mui--text-center"> MySQL - SQLite - PostgreSQL </h5> <h5> MongoDB - Sequelize - Mongoose </h5>
                   </div>
                   <br/>
                   <br/>
                   <div className="mui--text-center">
                   <h4 className="mui--text-display1 mui--text-center"> Build and Deployment </h4>
                   <h5 className="mui--text-center"> Docker - Amazon Web Services - Heroku </h5> <h5> Digital Ocean - Grunt - Gulp </h5>
                   </div>
                   <br/>
                   <br/>
                   <div className="mui--text-center">
                   <h4 className="mui--text-display1 mui--text-center"> TDD </h4>
                   <h5 className="mui--text-center"> Mocha - Chai - Jasmine </h5>
                   </div>


                   <br/>
                   <br/>
                   <br/>

                   <div className="mui--text-center">
                     <a className="btn" href="#"> Take me to the top </a>
                   </div>
                   <br/>
            </div>
  );
};
