import React, { Component } from 'react';
import { Image, Panel } from 'react-bootstrap';

import background from './Assets/item_bg.jpg';
import './Product_Item.css';
export default class ProductItem extends Component {
    render() {
        return (
            <div className="Item-container">
                <div className="Background" style={{
                    backgroundImage: "url(" + background + ")",
                    backgroundSize: 'cover',
                   
                }}>
                    <div  className="button_add_to_cart"><button><img src={require('./Assets/add-to-cart.png') } /> </button></div>
                    <div className="Item-name">Sữa đậu nành</div>
                    <div className="Item-price">5000 VNĐ/chai</div>
                    <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center',marginTop:20}}>
                            <div className="button_quantity"><img src={require('./Assets/plus.png') } /> </div>
                            <div className="quantity">10</div>
                            <div className="button_quantity"><img src={require('./Assets/minus.png') } /> </div>
                    </div>
                </div>
            </div>
        )
    }
}

const StyleTitle = {
    fontSize: 30,
    fontColor: 'black',
    fontFamily: 'Montserrat'
}

