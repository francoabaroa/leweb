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
import Container from 'muicss/lib/react/container';


export default props => {

  return (
      <div>


        <Tabs initialSelectedIndex={0} justified={true}>
               <Tab className="mui--text-white" value="pane-1" label="Home" onActive={props.onEmailChange}></Tab>
               <Tab className="mui--text-white" value="pane-2" onActive={props.onEmailChange} label="Portfolio"></Tab>
               <Tab value="pane-3" label="Skills" onActive={props.onEmailChange}></Tab>
               <Tab value="pane-4" label="Contact" onActive={props.onEmailChange}></Tab>
             </Tabs>

             <br/>
             <br/>

             <Container fluid={true} className='centered'>
             <span>
              <img className='sizeDown' src={'https://avatars3.githubusercontent.com/u/18104028?v=3&u=fa7173dba5b5b7b94e2796655e4ddb8d3a851bd6&s=400'} />
                   </span>

                   </Container>

              <br/>

             <h4 className="mui--text-display1 mui--text-center">Software Engineer - UI Designer - Travel Enthusiast - Foodie - Football Lover</h4>


      </div>
  );
};
