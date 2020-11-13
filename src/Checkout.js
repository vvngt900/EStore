import React from 'react';
import './Checkout.css';

function Checkout() {
    return (
        <div className='checkout'>
            <div className="checkout_left">
                {/*<img className="checkout_ad" src="" alt=""/>*/}
                <div>
                    <h2 className="checkout_title">
                        Your Shopping Cart
                    </h2>
                </div>
            </div>
            <div className="checkout_right">
                <h2>The CheckOut Figure</h2>
            </div>
        </div>
    )
}

export default Checkout
