import React, { Component } from 'react';
import HomeInfo from './HomeInfo.js';
import HamburgerMenu from './HamburgerMenu.js';
import './App.css';
import background from './Assets/background.jpg';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Image } from 'react-bootstrap';

class App extends Component {

  render() {
    return (
      <div className='outer-container'>
        <HamburgerMenu className='Burger-Menu' />
        <div className="App" style={{
          display: 'flex',
          backgroundImage:"url("+background+")",
          backgroundSize: 'cover',
          flexDirection: 'column',
          height:'90vh',
          alignItems: 'center',
         
        }} >
          <div >
            <Navbar className='Navbar'  >
              <Navbar.Header>
                <Navbar.Brand >
                  <a href="#" >HauyMilk</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav >
                <NavItem eventKey={1} href="#" >Products</NavItem>
                <NavItem eventKey={2} href="#">Promotions</NavItem>
                <NavDropdown eventKey={3} title="More" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Daily Set</MenuItem>
                  <MenuItem eventKey={3.2}>Contact</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.4}>Contact</MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar>
          
          </div>
          <Image src={process.env.PUBLIC_URL + '/logo.png'} style={{ width: '10vw', height: this.width, marginTop:'20vh' }} />
          <Button className='order-button'>ORDER</Button>

        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <HomeInfo />
        </div>
      </div>
    );
  }
}

export default App;
