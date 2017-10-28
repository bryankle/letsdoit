// import React, { Component } from 'react'
// import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Navbar from './Navbar';
// import Signup from './auth/Signup';
// import Signin from './auth/Signin';
// import Signout from './auth/Signout';
// import TodoContainer from './TodoContainer';
// import RequireAuth from './auth/require_auth'; // Higher Order Component to secure individual routes with authentication
// import Features from './Features';
// import Welcome from './Welcome';
// import App from './App';
// import * as actions from '../actions';
// import { connect } from 'react-redux';
// import DropdownMenu from '../components/DropdownMenu'


// class SidebarMenu extends Component {
//   state = { visible: false }

//   toggleVisibility = () => this.setState({ visible: !this.state.visible })

//   render() {

//     console.log('From SidebarMenu')
//     console.log(this.props)

//     const { visible } = this.state
//     return (
//        <Sidebar.Pushable>
//           <Sidebar as={Menu} animation='overlay' width='thin' icon='labeled' visible={this.props.sidebar.visibility} vertical inverted>
//             <Link to="/tasks">
//               <Menu.Item onClick={() => console.log('hello world')} onClickname='my-tasks'>
//                 <Icon name='user' />
//                 My Tasks
//               </Menu.Item>
//             </Link>
//             <Menu.Item name='group-tasks'>
//               <Icon name='users' />
//               Group Tasks
//             </Menu.Item>
//             <Menu.Item name='settings'>
//               <Icon name='settings' />
//               Settings
//             </Menu.Item>
//           </Sidebar>
//           <Sidebar.Pusher style={{backgroundColor: 'pink', height: '100vh'}}>
//               {this.props.routes()}
//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//     )
//   }
// }


// function mapStateToProps(state) {
//   return {
//     sidebar: state.sidebar
//   }
// }

// export default connect(mapStateToProps, null)(SidebarMenu);
