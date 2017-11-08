import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
class HomeInfo extends Component{
    render(){
        return(
        <div style={{width:'70%', margin:20}}>
            <label style={StyleTitle}>Home</label>
            <div style={{display:'flex',flexDirection:'row'}}>
                <p style={{width:'40%'}}>
                    Bootstrap’s form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.
                </p>
                <Image src="https://cdn.davidwolfe.com/wp-content/uploads/2016/06/soy-milk-e1464882996526.jpg" style={{width:'40%',height:'40%', marginLeft:20}}/>
            </div>   
        </div>
        )
    }
}

const StyleTitle={
        fontSize:30,
        fontColor:'black',
        fontFamily:'Montserrat'
}
export default HomeInfo;