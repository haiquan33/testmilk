import React, { Component } from 'react';
import HomeInfo from './HomeInfo.js';
import HamburgerMenu from './HamburgerMenu.js';
import './App.css';
import background from './Assets/background.jpg';
import firebaseConfig from './firebaseConfig.js';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Image } from 'react-bootstrap';

class App extends Component {

  constructor(props){
    super(props);
    this.state={listItem:[]};
  }
  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let listItem = firebaseConfig.database().ref('Products');
    listItem.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let Item = { price: snapshot.val().price, id: snapshot.key };
      this.setState({ listItem: [Item].concat(this.state.listItem) });
    })
  }

  render() {
    return (
      <div className='outer-container'>
        <HamburgerMenu className='Burger-Menu' />
        <div className="App" style={{
          
          backgroundImage:"url("+background+")",
          backgroundSize: 'cover',
          
         
        }} >
          <div >
            <Navbar className='Navbar'  >
              <Navbar.Header>
                <Navbar.Brand >
                  <a href="#" >HauyMilk</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav >
                <NavItem eventKey={1} href="#"  >Sản phẩm</NavItem>
                <NavItem eventKey={2} href="#">Khuyến mãi</NavItem>
                <NavDropdown eventKey={3} title="Khác" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Thực đơn hàng ngày</MenuItem>
                  <MenuItem eventKey={3.2}>Liên hệ</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.4}>Contact</MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar>
          
          </div>
          <Image className='logo' src={process.env.PUBLIC_URL + '/logo.png'}  />
          <Button className='order-button'>ĐẶT NGAY</Button>

        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <HomeInfo />

        </div>
        <ul>
          { /* Render the list of messages */
            this.state.listItem.map( Item => <li key={Item.id}>{Item.price}</li> )
          }
        </ul>
      </div>
    );
  }
}

export default App;
