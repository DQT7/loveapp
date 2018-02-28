import React, { Component } from 'react';
import { Button, Fade } from 'reactstrap';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import authService from '../../services/auth-service';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { fadeIn: true };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn,
    });
  }

  render() {
    return (
      <header>
        <Navbar className="header">
          <NavbarBrand >
            {authService.isLoggedIn() && <Button type="submit" color="primary" onClick={this.props.logout}>Log Out</Button>}
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/DQT7/loveapp">Love Track</NavLink>
            </NavItem>
            {/* <div>
              <Button color="primary" onClick={this.toggle}>Click For Love Quote</Button>
              <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
              Love
              </Fade>
          </div> */}

          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default Header;
