import React from 'react'
import product from '../pages/Assets/images/watch.jpg'
const ProductCard = () => {
  return (
    <div className='product-card'>
      <div className="product-image">
        <img src={product} alt="product img" />
      </div>
      <div className="product-image">
      <h6 className='product-brand'>
        Philips
      </h6>
      <p className='product-caption'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, iure voluptatibus?
      </p>
      <p>
        <strong>$100.00</strong>
      </p>
      </div>
    </div>
  )
}

export default ProductCard
