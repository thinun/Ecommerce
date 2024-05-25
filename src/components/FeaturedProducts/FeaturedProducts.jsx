import React from 'react';
import './FeaturedProducts.css'
import './FeaturedProducts_data.js'
import featuredProductsData from "./FeaturedProducts_data.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faStarHalf} from "@fortawesome/free-solid-svg-icons";


const FeaturedProducts = () => {
    return (
        <section id="featured_products" className="section-p1">
            <h2>Featured Products</h2>
            <p>Summer Collections New Modern Design</p>
            <div className="product-container">
                {featuredProductsData.map(featuredProduct => (
                    <div className="product" onClick="window.location.href='sproduct.html'" key={featuredProduct.id}>

                        <img src={featuredProduct.img} alt={''}/>
                        <div className="p-description">
                            <span>{featuredProduct.brand}</span>
                            <h5>{featuredProduct.title}</h5>
                            <div className="star">
                                <i><FontAwesomeIcon icon={faStar}/></i>
                                <i><FontAwesomeIcon icon={faStar}/></i>
                                <i><FontAwesomeIcon icon={faStar}/></i>
                                <i><FontAwesomeIcon icon={faStar}/></i>
                                <i><FontAwesomeIcon icon={faStarHalf}/></i>
                            </div>
                            <h4>{featuredProduct.price}$</h4>
                            <a href="#"><i className={"cart"}><FontAwesomeIcon icon={faShoppingCart}/></i></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default FeaturedProducts;
