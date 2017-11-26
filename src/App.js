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
    this.state = { listItem: [], Nav_class_Name: "HeaderBar" };
    this.getListItem = this.getListItem.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    this.getListItem();
    window.removeEventListener('scroll', this.handleScroll);

  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll() {

    //Change the UI of headerBar when scroll
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      this.setState({
        Nav_class_Name: "HeaderBar-shrink"
      })
    }
    else {
      this.setState({
        Nav_class_Name: "HeaderBar"
      })
    }

  }

  handleSelect(selectedKey) {

    //Element.scrollIntoView('#Content_section', 1000);
    //document.getElementById('Content_section').scrollIntoView();
    // document.ready(function(){
    //   window.scroll(function(){
    //       if (document.scrollTop()>10){
    //         document.getElementById('Navbar').addClass('shrink')
    //       }
    //   })
    // })
  }
  getListItem() {
    /* Create reference to messages in Firebase Database */
    let listItem = firebaseConfig.database().ref('Products');
    listItem.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let Item = {id:snapshot.val().id, price: snapshot.val().price,  name: snapshot.val().name, quantity: 0 };
      this.setState({ listItem: [Item].concat(this.state.listItem) });
      this.props.dispatch({ type: 'SET_PRODUCT_LIST', product_list: this.state.listItem });
    })
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

            <Image className='logo' src={process.env.PUBLIC_URL + '/logo.png'} />
            <Button className='order-button' onClick={() => this.props.dispatch({ type: 'ADD' })}>ĐẶT NGAY</Button>

          </div>
          <section className='Section' id='Content_section'>
            <Switch style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Route exact path='/' component={null} />
              <Route exact path='/ListProduct' component={ListProduct} />
            </Switch>
          </section>
          <div className={this.state.Nav_class_Name} >
            <Navbar className="Navbar"  >
             
              <Nav >
                <NavItem eventKey={1} href="#"  ><Link className='Link' to="/ListProduct" >Sản phẩm</Link></NavItem>
                <NavItem eventKey={2} href="#"><Link className='Link' to="/ListProduct" >Khuyến mãi</Link></NavItem>
                <Navbar.Brand >
                  <a href="/" >HauyMilk </a>
                </Navbar.Brand>
                <NavItem eventKey={3} href="#"><Link className='Link' to="/ListProduct" >Thực đơn hàng ngày</Link></NavItem>
                <NavItem eventKey={2} href="#"><Link className='Link' to="/ListProduct" >Liên hệ</Link></NavItem>
               
              </Nav>
            </Navbar>

          </div>

        </div>
      </Router>
    );
  }
}

function mapState2Props(state) {
  return { num: state.num };
}

export default connect(mapState2Props)(App);