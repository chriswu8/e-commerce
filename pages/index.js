import React from 'react';
import {Product, FooterBanner, HeroBanner} from '../components';

const Home = () => {
  return (
    <>
      {/* a component */}
      <HeroBanner />

      <div className="products-heading">
        <h2> Best Selling Products</h2>
        <p> Some incredible description</p>
      </div>

      <div className="products-container">
        {['Product 1', 'Product 2'].map(
          (product) => product)}
      </div>

      {/* a component */}
      <FooterBanner />
    </>
  )
}

export default Home