import React, { Component } from 'react';

import ProductItem from './Product_Item.js';

class ListProduct extends Component{
    render(){
        return(
        <div style={{ display:'flex',flexDirection:'row', width:'70%', alignItems:'center',justifyContent:'center'}}>
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