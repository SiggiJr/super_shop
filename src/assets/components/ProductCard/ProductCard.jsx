import React from 'react'
import './ProductCard.scss'

function ProductCard(props) {
  return (
    <>
      <div className="product">
        <img src={props.link} alt="" />
        <p className="product_name">{props.productName}</p>
        <p className='product_price'>{props.price}</p>
        <button>Buy Now</button>
      </div>
    </>
  )
}

export default ProductCard
