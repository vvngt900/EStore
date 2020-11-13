import React from 'react';
import './Product.css';

function Product({title, image, price, rating}) {
    return (
        <div className="product" key={title}>
                <div className="product_info">
                    <p>{title}</p>
                    <p className="product_price">
                        <small>Rs</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product_rating">
                        {Array(rating).fill().map((_,i)=>(<p>⭐️</p>))}
                    </div>
                </div>
                <img src='https://firebasestorage.googleapis.com/v0/b/fuwutest.appspot.com/o/e-store%2FWhatsApp%20Image%202020-10-31%20at%207.47.52%20AM.jpeg?alt=media&token=824bc8b1-0bc3-4208-904d-735ec5e0dadd' alt=""/>
                
                <button>Add to basket</button>
        </div>
    )
}

export default Product
