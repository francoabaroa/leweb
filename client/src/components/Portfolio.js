
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
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';

export default props => {

  return (
      <div>


                   <div>
                     <Tabs initialSelectedIndex={1} justified={true}>
                     <Tab className="mui--text-white" value="pane-1" label="Home" onActive={props.onEmailChange}></Tab>
                     <Tab className="mui--text-white" value="pane-2" label="Portfolio" onActive={props.onEmailChange}></Tab>
                     <Tab value="pane-3" label="Skills" onActive={props.onEmailChange}></Tab>
                     <Tab value="pane-4" label="Contact" onActive={props.onEmailChange}></Tab>
                   </Tabs>
                   </div>
                        <br/>
                        <div className="mui--text-center">
                        <h3 onClick={() => { props.portfolioChange('immerse'); }} className="mui--text-display1 mui--text-center"> Immerse </h3>

                        <div className="mui--text-center">
                          <em>An Instagram-like virtual reality application</em>
                        </div>

                        <h5 className="mui--text-center"> JavaScript - AFrame - React - React Router </h5> <h5> NodeJS - MariaDB - AWS S3 - Redis </h5>

                         <br/>

                         <Container fluid={true} className='centered'>
                           <span>
                             <img className='sizeDownThree' src={'../img/vr6.gif'} />
                           </span>

                        </Container>

                        <br/>

                        </div>
                        <br/>
                        <br/>
                        <div className="mui--text-center">
                        <h3 onClick={() => { props.portfolioChange('hackerwords'); }} className="mui--text-display1 mui--text-center"> HackerWords </h3>

                        <div className="mui--text-center">
                          <em>A boggle-like game application for finding words in an N x N matrix</em>
                        </div>

                        <h5 className="mui--text-center"> JavaScript - React - React Router </h5> <h5> NodeJS - MongoDB - Mongoose </h5>

                          <br/>

                         <Container fluid={true} className='centered'>
                           <span>
                             <img className='sizeDownTwo' src={'../img/hw1.gif'} />
                           </span>

                        </Container>

                        <br/>

                        </div>
                        <br/>
                        <br/>
                        <div className="mui--text-center">
                        <h3 onClick={() => { props.portfolioChange('goolp'); }} className="mui--text-display1 mui--text-center"> Goolp </h3>

                        <div className="mui--text-center">
                          <em>A restaurant review application that combines the power of Google and Yelp</em>
                        </div>

                        <h5 className="mui--text-center"> JavaScript - AngularJS - NodeJS </h5> <h5> Yelp API - Google Places API - annyang API </h5>

                          <br/>

                         <Container fluid={true} className='centered'>
                           <span>
                             <img className='sizeDownTwo' src={'../img/g3.gif'} />
                           </span>

                        </Container>

                        <br/>
                        </div>
                        <br/>
                        <br/>
                        <div className="mui--text-center">
                        <h3 onClick={() => { props.portfolioChange('goolp'); }} className="mui--text-display1 mui--text-center"> Markable </h3>

                        <div className="mui--text-center">
                          <em>A Chrome extension application that allows users to share links, markups, and comments with groups of friends</em>
                        </div>

                        <h5 className="mui--text-center"> JavaScript - AngularJS - React </h5> <h5> NodeJS - PostgreSQL - Chrome Extension API </h5>
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
