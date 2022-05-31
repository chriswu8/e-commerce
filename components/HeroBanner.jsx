import React from 'react';
import Link from 'next/link';
import {urlFor} from '../lib/client';


// heroBanner used to dynamically display data
const HeroBanner = ({ heroBanner }) => {
    return (
        <div className='hero-banner-container'>
            <div>
                <p className='beats-solo'> { heroBanner.smallText } </p>
                <h3>{ heroBanner.midText }</h3>
                <img className="hero-banner-image" src={urlFor(heroBanner.image)} alt="headphones"></img>
                
                <div>
                    <link href={`/product/${heroBanner.product}`} />
                    <button type='button'>{heroBanner.buttonText}</button>
                    <div className='desc'>
                        <h5>Description</h5>
                        <p>{heroBanner.desc}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroBanner