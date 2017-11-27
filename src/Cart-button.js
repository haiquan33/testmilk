import React, { Component } from 'react';
import cart_ico from './Assets/cart.png';

export default class Cart_button extends Component {
    render() {
        return (
            <div className="Cart-button">
                <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: "url(" + cart_ico + ")",
                    backgroundSize: 'cover',
                }} />
                {this.props.totalQuantity > 0 &&
                <div style={{
                    width: '50%',
                    height: '50%',
                    borderRadius: '50%',
                    background: 'red',

                    position: 'absolute',
                    top: 0,
                    right: 0,
                    textAlign: 'center',
                    color: 'white',
                }}>{this.props.totalQuantity}</div>
                }
            

            </div>

        )
    }
}