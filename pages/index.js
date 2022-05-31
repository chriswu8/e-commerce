import React from 'react'

const Home = () => {
  return (
    <>
      {/* a component */}
      HeroBanner

      <div>
        <h2> Best Selling Products</h2>
        <p> Some incredible description</p>
      </div>

      <div>
        {['Product 1', 'Product 2'].map(
          (product) => product)}
      </div>

      {/* a component */}
      Footer
    </>
  )
}

export default Home