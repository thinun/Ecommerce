import React from 'react';
import './Features.css'
import featuresData from './Features_data.js'


const Features = () => {
        return (
            <section id="feature" className="section-p1">
                {featuresData.map(feature => (
                    <div className="feature-box" key={feature.id}>
                        <img src={feature.img} alt={"Feature-1"}/>
                        <h6>{feature.title}</h6>
                    </div>
                ))}
            </section>
        );
    }
;

export default Features;
