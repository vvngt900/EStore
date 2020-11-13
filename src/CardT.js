import React from 'react';
import './Card.css';

function Card() {
    return (
       <div className="main">
         <img src='https://firebasestorage.googleapis.com/v0/b/fuwutest.appspot.com/o/e-store%2FWhatsApp%20Image%202020-10-31%20at%207.47.52%20AM.jpeg?alt=media&token=824bc8b1-0bc3-4208-904d-735ec5e0dadd' alt=""/>

         <div className="line">

         </div>

         <h1>Sample</h1>
         <p className="price">
           Rs 100
         </p>

         <div className="add_to_cart">
           Add to Cart
         </div>

       </div>
    )
}

export default Card
