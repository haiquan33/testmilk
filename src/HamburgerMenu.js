import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './HamburgerMenu.css';


class MenuWrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false
        };
    }

    componentWillReceiveProps(nextProps) {
        const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

        if (sideChanged) {
            this.setState({ hidden: true });

            setTimeout(() => {
                this.show();
            }, this.props.wait);
        }
    }

    show() {
        this.setState({ hidden: false });
    }

    render() {
        let style;

        if (this.state.hidden) {
            style = { display: 'none' };
        }

        return (
            <div style={style} className={this.props.side}>
                {this.props.children}
            </div>
        );
    }
}

class HamburgerMenu extends Component {
    render() {
        return (
           <div>
            <MenuWrap wait={20} side={'left'}>
                <Menu left  className='bm-burger-button' left id={'slide'} pageWrapId={'App'} outerContainerId={'outer-container'} >
                    <a key="0" href=""><i className="fa fa-fw fa-star-o" /><span>Products</span></a>
                    <a key="1" href=""><i className="fa fa-fw fa-bell-o" /><span>Promotions</span></a>
                    <a key="2" href=""><i className="fa fa-fw fa-envelope-o" /><span>Daily Meal</span></a>
                    <a key="3" href=""><i className="fa fa-fw fa-comment-o" /><span>Subscribe</span></a>
                    <a key="4" href=""><i className="fa fa-fw fa-bar-chart-o" /><span>Contact</span></a>
                 
                </Menu>
            </MenuWrap>
            </div>
        )
    }
}

export default HamburgerMenu;