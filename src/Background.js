import ReactDOM from 'react-dom';
import React, { Component } from 'react';
class Background extends Component{
    componentWillMount(){
      var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;
      
      this.setState({x:x,y:y});
    }
    render(){
      return (<body className='bg' background='https://www.organicfacts.net/wp-content/uploads/milk.jpg' />)
    }  
  };
  
 export default Background;