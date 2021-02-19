import React from 'react';
import '../src/MaterialCard.css';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';

function MaterialCard() {
    return (
        <div class="card card-product">
        <div class="card-image">
            <a href="#"> <img class="img" src="https://firebasestorage.googleapis.com/v0/b/estore-5fb9b.appspot.com/o/eStore_images%2FartWrk3.jpeg?alt=media&token=136bcab1-3a3b-402d-b725-7b9b78c83b89"/> </a>
        </div>
        <div class="table">
            <h6 class="category text-rose">Clothing</h6>
            <h5 class="card-caption">Embroidery Mask
            </h5>
            <div class="card-description"></div>
            <div class="ftr">
                <div class="price">
                    <h6>$120</h6> </div>
                <div class="stats" style={{float:'right'}}>
                <AddShoppingCartOutlinedIcon/>
                </div>
            </div>
        </div>
    
    </div>



    )
}

export default MaterialCard
