import React from 'react'

import cart from '../../assets/icons/cart.svg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'
import hamburgerMenu from '../../assets/icons/hamburger-menu.svg'


export default function MainNavigation(props) {
    
    return (
        <div className="main-menu">
            <div className="left-menu">
                <img src={hamburgerMenu} alt="menu" className="navi-icon"/>
                <h3>Menu</h3>
            </div>
            <div className={`${props.hidden && 'toggle-off'} sm-logo`}>
                Record
            </div>
            <div className="right-icons">
                <div className="social-media-icons">
                    <img src={facebook} alt="Facebook Icon" className="navi-icon"/>

                    <img src={instagram} alt="Instagram Icon" className="navi-icon"/>
                    <img src={twitter} alt="Twitter Icon" className="navi-icon"/>
                </div>
                <div className="cart-icon">
                    <p>0</p>
                    <img src={cart} alt="Cart Icon" className="navi-icon cart-svg"/>
                </div>
            </div>
        </div>
    )
}


