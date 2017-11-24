import React, { Component } from 'react';

import ProductItem from './Product_Item.js';
import './ListProduct.css';
class ListProduct extends Component{
    render(){
        return(
        <div className='List-container' >
           <ProductItem />
           <ProductItem />
           <ProductItem />
        </div>
        )
    }
}

const StyleTitle={
        fontSize:30,
        fontColor:'black',
        fontFamily:'Montserrat'
}
export default ListProduct;