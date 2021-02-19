import React from 'react';
import '../src/MaterialCard.css';

function ProductCard() {
    return (
        <div class="card">
        <div class="table">
            <h6 class="category text-danger">
                        <i class="fa fa-globe"></i> Embroidery Work
                    </h6>
            <div class="ftr">
                <div class="author">
                    <a href="#"> <img src="https://firebasestorage.googleapis.com/v0/b/estore-5fb9b.appspot.com/o/eStore_images%2Fmask1.jpeg?alt=media&token=2377aea9-a0ea-4805-9b93-cca0299dde11"/> <span>Embroidery Mask</span>
                        <div class="ripple-cont">
                            <div class="ripple ripple-on ripple-out"></div>
                        </div>
                    </a>
                </div>
                <div class="stats"><button type="button" rel="tooltip" title="" class="btn btn-just-icon btn-simple btn-default" data-original-title="Saved to Wishlist"> <i class="fa fa-shopping-cart"/> </button></div>
            </div>
        </div>
    </div>
    )
}

export default ProductCard
