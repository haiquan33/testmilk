import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductItem from './Product_Item.js';


import './ListProduct.css';
class ListProduct extends Component{
 
   
    render(){
        return(
        
        <div className='List-container'  >
          {
              this.props.product_list.map((item)=>
                <ProductItem item={item}/>
              )
          }
        </div>
     
        )
    }
}


function mapState2Props(state) {
    return { product_list: state.product_list };
  }

const StyleTitle={
        fontSize:30,
        fontColor:'black',
        fontFamily:'Montserrat'
}
export default connect(mapState2Props)(ListProduct);