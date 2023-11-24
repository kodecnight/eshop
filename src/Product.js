import React from 'react';
import './Product.css';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

function Product({id, title, price, image, rating}) {
  return (
    <div className='product'>
        <div className='product__info'>
            <p className="product__title">{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
        </div>
        <img src={image} />
        <button className="add__toBasket">Add to Basket</button>
    </div>
  )
}

export default Product