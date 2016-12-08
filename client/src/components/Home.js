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


import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const styles = {
  button: {
    margin: 12,
    fontFamily: 'Orbitron !important',
    backgroundColor: '#e8e8e8',
    color: 'black !important'
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  exploreButton: {
    fontFamily: 'Orbitron',
  },
};

const style = {
  margin: 12,
};

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const vex = require('vex-js');

vex.registerPlugin(require('vex-dialog'));
vex.defaultOptions.className = 'vex-theme-os';


export default props => {

  return (
    <div>

      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Toolbar >
        <ToolbarGroup>
          <Avatar src={props.profilePic} />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle className="fancyText" text={"Welcome, "} />
        </ToolbarGroup>

      </Toolbar>
      </MuiThemeProvider>

      <h1 className="centerText"> Immerse </h1>

      <div className="centerButtons">
      <Link to="/lobby">
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <RaisedButton buttonStyle={styles.exploreButton} label="Explore" primary={true}  />
      </MuiThemeProvider>
      </Link>

      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <RaisedButton
      label="Upload"
      labelPosition="before"
      style={styles.button}
      containerElement="label"
      buttonStyle={styles.exploreButton}>
      <input id="fileUp" type="file" style={styles.exampleImageInput} />
      </RaisedButton>
      </MuiThemeProvider>
      </div>

      <br/>
      <br/>
      <br/>
      <div className="centerButtons">
        <MuiThemeProvider muiTheme={getMuiTheme()}>
        <FlatButton label="Sign Out" labelStyle={styles.exploreButton}/>
        </MuiThemeProvider>
      </div>

    </div>
  );
};

/*
        <input type='file' id='profilePicUp' />
 */