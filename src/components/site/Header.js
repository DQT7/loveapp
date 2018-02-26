import React, { Component } from 'react';
import { Button, Fade } from 'reactstrap';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { fadeIn: true };
    this.toggle = this.toggle.bind(this);
}
  render() {
    return (
      <header>
        <Navbar className="header">
          <NavbarBrand href="">SLMN</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/yourhandle/yourrepoforthisapp">Love Track </NavLink>
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
  toggle() {
    this.setState({
        fadeIn: !this.state.fadeIn
    });
}
}
export default Header;