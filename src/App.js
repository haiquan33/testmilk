import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Image } from 'react-bootstrap';
import { Provider, connect } from 'react-redux';

import HomeInfo from './HomeInfo.js';
import ListProduct from './ListProduct.js';
import HamburgerMenu from './HamburgerMenu.js';

import './App.css';


import background from './Assets/background.jpg';
import firebaseConfig from './firebaseConfig.js';


import store from './cartRedux.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { listItem: [] };
  }
  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    let listItem = firebaseConfig.database().ref('Products');
    listItem.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let Item = { price: snapshot.val().price, name: snapshot.val().name };
      this.setState({ listItem: [Item].concat(this.state.listItem) });
      this.props.dispatch({ type: 'SET_PRODUCT_LIST', product_list: this.state.listItem });
    })
  }

  handleSelect(selectedKey) {
     
      //Element.scrollIntoView('#Content_section', 1000);
      //document.getElementById('Content_section').scrollIntoView();
  }

  render() {
    return (
      <Router>
        <div className='outer-container'>
          <HamburgerMenu className='Burger-Menu' />
          <div className="App" style={{
            backgroundImage: "url(" + background + ")",
            backgroundSize: 'cover',
          }} >
            <div >
              <Navbar className='Navbar'  >
                <Navbar.Header>
                  <Navbar.Brand >
                    <a href="/" >HauyMilk {this.props.num}</a>
                  </Navbar.Brand>
                </Navbar.Header>
                <Nav >
                  <NavItem eventKey={1} href="#"  ><Link className='Link' to="/ListProduct" >Sản phẩm</Link></NavItem>
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
            <Image className='logo' src={process.env.PUBLIC_URL + '/logo.png'} />
            <Button className='order-button' onClick={() => this.props.dispatch({ type: 'ADD' })}>ĐẶT NGAY</Button>

          </div>
          <section className='Section' id ='Content_section'>
            <Switch style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Route exact path='/' component={null} />
              <Route exact path='/ListProduct' component={ListProduct} />
            </Switch>
          </section>


        </div>
      </Router>
    );
  }
}

function mapState2Props(state) {
  return { num: state.num };
}

export default connect(mapState2Props)(App);