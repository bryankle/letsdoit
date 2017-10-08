import React, { Component } from 'react';
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

class Header extends Component {
    
    state = {}
    
      handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
      render() {
        const { activeItem } = this.state
    
        return (
          <Menu>
            <Menu.Item
              name='editorials'
              active={activeItem === 'editorials'}
              onClick={this.handleItemClick}
            >
              Editorials
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item
                name='upcomingEvents'
                active={activeItem === 'upcomingEvents'}
                onClick={this.handleItemClick}
                >
                Sign Up
                </Menu.Item>
                <Menu.Item
                name='upcomingEvents'
                active={activeItem === 'upcomingEvents'}
                onClick={this.handleItemClick}
                >
                Sign In
                </Menu.Item>
            </Menu.Menu>
          </Menu>
        )
      }
}
// When user is not signed in, display Login and Sign Up
// When user is signed in, display only Sign Out
export default Header;