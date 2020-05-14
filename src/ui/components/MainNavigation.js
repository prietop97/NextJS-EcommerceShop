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
                <svg className="navi-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 24 24"><path fill="#fff" d="M1 4a2 2 0 0 0 2 2h18a2 2 0 1 0 0-4H3a2 2 0 0 0-2 2z"/><path fill="#fff" d="M3 14h18a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4z"/><path fill="#fff" d="M3 22h18a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4z"/><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-0.2697735" y1="6.2785058" x2="24.2697678" y2="17.7214813"><stop offset="0" stop-color="#FFF" stop-opacity="0.2"/><stop offset="1" stop-color="#FFF" stop-opacity="0"/></linearGradient><path fill="url(#SVGID_1_)" d="M3 6h18a2 2 0 0 0 0-4H3a2 2 0 1 0 0 4zm18 4H3a2 2 0 1 0 0 4h18a2 2 0 0 0 0-4zm0 8H3a2 2 0 1 0 0 4h18a2 2 0 0 0 0-4z"/></svg>
                <h3>Menu</h3>
            </div>
            <div className={`${props.hidden && 'toggle-off'} sm-logo`}>
                Record
            </div>
            <div className="right-icons">
                <div className="social-media-icons">
                    <svg className="navi-icon" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#fff" d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"/></svg>
                    <svg className="navi-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 16 16"><path d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z" fill="#fff"/><path fill="#fff" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z" fill="#fff"/><circle fill="#fff" cx="12.3" cy="3.7" r="0.533"/></svg>
                    <svg className="navi-icon" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#fff" d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"/></svg>
                </div>
                <div className="cart-icon">
                    <p>0</p>
                    <svg className="navi-icon cart-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><circle cx="12" cy="23" r="2" fill="#fff"/><circle cx="21" cy="23" r="2" fill="#fff"/><path fill="#fff" d="M26.29,11.79l-1.77,5.32A3.5,3.5,0,0,1,21.2,19.5H12a3.49,3.49,0,0,1-3.39-2.65L6.5,8.64A1.49,1.49,0,0,0,5.05,7.5H3a1,1,0,0,1,0-2H5A3.53,3.53,0,0,1,8.44,8.15h0a.46.46,0,0,0,.45.35h15a2.5,2.5,0,0,1,2.37,3.29Z"/></svg>
                </div>
            </div>
        </div>
    )
}


