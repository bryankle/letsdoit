import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import {
    Menu,
    Dropdown
  } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Clear Completed', value: 1 }
]

class Navbar extends Component {
    
    
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderUserAuth() {
    if (this.props.authenticated) {
      return (
          <Menu.Menu position='right'>
            <Link to='/tasks'>
              <Menu.Item
                name='upcomingEvents'
                onClick={this.handleItemClick}
                >
                Tasks
              </Menu.Item>
            </Link>
            
            <Dropdown text='Options' options={options} simple item />

            <Link to='/signout'>
              <Menu.Item
                name='upcomingEvents'
                onClick={this.handleItemClick}
                >
                Sign Out
              </Menu.Item>
            </Link>
        </Menu.Menu>
        )
    }
    else {
      return (
          <Menu.Menu position='right'>
            <Link to='/signin'>
              <Menu.Item
                name='upcomingEvents'
                onClick={this.handleItemClick}
                >
                Sign In
              </Menu.Item>
            </Link>
            <Link to='/signup'>
              <Menu.Item
                name='upcomingEvents'
                onClick={this.handleItemClick}
                >
                Sign Up
              </Menu.Item>
            </Link>
          </Menu.Menu>
        )
    }
  }

  render() {
    console.log("NAVBAR")
    console.log(this.props);
    return (
      <Menu style={{marginBottom: '0'}}>
          <Menu.Item
            name='editorials'
            onClick={this.props.sidebar.visibility ? this.props.hideSidebar : this.props.showSidebar}
            >
            Letsdoit
          </Menu.Item>

        {this.renderUserAuth()}
      </Menu>
    )
  }
}
// When user is not signed in, display Login and Sign Up
// When user is signed in, display only Sign Out

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    sidebar: state.sidebar
  }
}

export default connect(mapStateToProps, actions)(Navbar);