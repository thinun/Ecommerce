import React from 'react';
import './Navbar.css'
import logo from '../../assets/img/T_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
            <nav id="header">
                <a href="#"><img src={logo} className="logo" alt="Logo"/></a>
                <div>
                    <ul id="navbar">
                        <li><a className="active" href="../../../index.html">Home</a></li>
                        <li><a href="../../shop.html">Shop</a></li>
                        <li><a href="../../about.html">About</a></li>
                        <li><a href="../../contact.html">Contact</a></li>
                        <li id="cart-icon"><a href="../../cart.html"><i><FontAwesomeIcon icon={faShoppingCart} /></i></a></li>
                        <a href="#" id="close-ham"><i className="fa-solid fa-xmark"></i></a>

                    </ul>
                </div>
                <div id="mobile">
                    <a href="../../cart.html"> <i className="fa-solid fa-cart-shopping"></i></a>
                    <i className="fa-solid fa-bars bar"></i>
                </div>
            </nav>
    );
};

export default Navbar;
