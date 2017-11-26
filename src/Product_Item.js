import React, { Component } from 'react';
import { Image, Panel } from 'react-bootstrap';

import background from './Assets/item_bg.jpg';
import './Product_Item.css';

import {connect } from 'react-redux';

 class ProductItem extends Component {

    add_quantity(){
        this.props.dispatch({
            type:'ADD_QUANTITY',
            id:this.props.item.id
     })
    }
    dec_quantity(){
        this.props.dispatch({
            type:'DEC_QUANTITY',
            id:this.props.item.id
     })
    }
    render() {
        return (
            <div className="Item-container">
                <div className="Background" style={{
                    backgroundImage: "url(" + this.props.item.img + ")",
                    backgroundSize: 'cover',
                   
                }}>
                    <div  className="button_add_to_cart"><button><img src={require('./Assets/add-to-cart.png') } /> </button></div>
                    <div className="Item-name">{this.props.item.name}</div>
                    <div className="Item-price">{this.props.item.price} VNĐ/chai</div>
                    <div style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center',marginTop:20,padding:'10px'}}>
                            <div className="button_quantity" onClick={this.add_quantity.bind(this)}><img src={require('./Assets/plus.png') } /> </div>
                            <div className="quantity">{this.props.item.quantity}</div>
                            <div className="button_quantity" onClick={this.dec_quantity.bind(this)}><img src={require('./Assets/minus.png') } /> </div>
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

export default connect()(ProductItem);