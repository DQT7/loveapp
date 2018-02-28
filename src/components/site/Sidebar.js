import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import FDJournal from '../../RTracker/FDJournal'
import RLissues from '../../RTracker/RLissues';
import {
  BrowserRouter as Router,
 Link,
 Route,
 Switch,

} from 'react-router-dom';


export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      
      <div>
        <Navbar className= "lightwork" color="faded" light >
        <Link to='/AuthModal'>
          <NavbarBrand href="/" className="mr-auto">Home </NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
              <Link to='/FDJournal'>  <NavLink>First Date Journal</NavLink></Link>
               
              </NavItem>
              <NavItem>
               <Link to='/RLissues'> <NavLink > Relatrionship Issues</NavLink> </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      
    );
  }
}