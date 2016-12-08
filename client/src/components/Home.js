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

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


class Home extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    let self = this;
    return (
      <div>

        <MuiThemeProvider muiTheme={getMuiTheme()}>
        <RaisedButton
          label="Toggle Drawer"
          className="width"
          onTouchTap={self.props.handleToggle}
        />
        </MuiThemeProvider>

        <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Drawer open={self.props.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }
}


export default withRouter(Home, { withRef: true });