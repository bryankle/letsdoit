import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Button,
    Container,
    Divider,
    Grid,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
    Dropdown
  } from 'semantic-ui-react'

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
            <Link to='/features'>
              <Menu.Item
                name='upcomingEvents'
                onClick={this.handleItemClick}
                >
                Features
              </Menu.Item>
            </Link>

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
      <Menu>
        <Link to="/">
          <Menu.Item
            name='editorials'
            onClick={this.handleItemClick}
            >
            Letsdoit
          </Menu.Item>
        </Link>

        {this.renderUserAuth()}
      </Menu>
    )
  }
}
// When user is not signed in, display Login and Sign Up
// When user is signed in, display only Sign Out

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, null)(Navbar);