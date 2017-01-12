// import React from 'react';
// import { Link, withRouter } from 'react-router';
// import $ from 'jquery';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import CircularProgress from 'material-ui/CircularProgress';
// import LinearProgress from 'material-ui/LinearProgress';
// import FlatButton from 'material-ui/FlatButton';

// import IconMenu from 'material-ui/IconMenu';
// import IconButton from 'material-ui/IconButton';
// import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
// import MenuItem from 'material-ui/MenuItem';
// import RaisedButton from 'material-ui/RaisedButton';
// import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
// import Avatar from 'material-ui/Avatar';

// import Drawer from 'material-ui/Drawer';

// import ReactDOM from 'react-dom';
// import Tabs from 'muicss/lib/react/tabs';
// import Tab from 'muicss/lib/react/tab';



// class Main extends React.Component {

//   constructor(props) {
//     super(props);
//   }

//   onChange(i, value, tab, ev) {
//     console.log(arguments);
//   }

//   onActive(tab) {
//     console.log(arguments);
//   }

//   render() {
//     let self = this;
//     return (
//       <div>


//         <Tabs onChange={this.onChange} initialSelectedIndex={1} justified={true}>
//                <Tab className="mui--text-white" value="pane-1" label="Home" onActive={this.onActive}></Tab>
//                <Tab className="mui--text-white" value="pane-2" onClick={() => {
//                   props.router.replace('/portfolio')
//                 }} label="Portfolio"></Tab>
//                <Tab value="pane-3" label="Blog"></Tab>
//                <Tab value="pane-4" label="Contact"></Tab>
//              </Tabs>

//       </div>
//     );
//   }
// }


// export default withRouter(Main, { withRef: true });