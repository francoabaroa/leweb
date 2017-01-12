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


                  <div className="mui--text-display1 mui--pull-right paddingAdjust" onClick={() => { props.portfolioChange('portfolio'); }}>X</div>
                   <div className="mui--text-display3 mui--text-center">Immerse</div>

                   <br/>
                   <br/>

                   <div className="mui--text-display1 mui--text-center">What Is It?</div>

                   <br/>

                   <div className="mui--text-display1 mui--text-center">What I Contributed</div>

                   <br/>

                   <div className="mui--text-display1 mui--text-center">Tech Stack</div>

                    <br/>

                    <Container fluid={true} className='centered'>
                      <span>
                        <img className='sizeDownThree' src={'../img/vr6.gif'} />
                      </span>

                   </Container>

                   <br/>

                    <Container fluid={true} className='centered'>
                      <span>
                        <img className='sizeDownThree' src={'../img/vr0.jpg'} />
                      </span>

                   </Container>

                   <br/>

                    <Container fluid={true} className='centered'>
                      <span>
                        <img className='sizeDownThree' src={'../img/vr1.jpg'} />
                      </span>

                   </Container>

                    <br/>

                    <Container fluid={true} className='centered'>
                      <span>
                        <img className='sizeDownThree' src={'../img/vr2.jpg'} />
                      </span>

                   </Container>

                   <br/>

                    <Container fluid={true} className='centered'>
                      <span>
                        <img className='sizeDownThree' src={'../img/vr3.png'} />
                      </span>

                   </Container>

                   <br/>

                    <Container fluid={true} className='centered'>
                      <span>
                        <img className='sizeDownThree' src={'../img/vr4.png'} />
                      </span>

                   </Container>
            </div>
  );
};
