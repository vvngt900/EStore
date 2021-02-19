import React from 'react';
import './FlashProduct.css';
import Image from 'react-bootstrap/Image';
import { useStateValue } from './StateProvider';
import { Flip, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Slide } from '@material-ui/core';


function FlashProduct({ id, title, image, price }) {

  const [ { basket } , dispatch ] = useStateValue();
  // console.log('this is our basket >>>', basket);

  const addToBasket = (e) => {

    e.preventDefault();

    toast(`🛒 ${title} was added to your cart!! 🛍` , {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
      });
      

    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price
      }
    });

  };

  const toastId = React.useRef(null);

  const update = () => toast.update(toastId.current, { type: toast.TYPE.INFO, autoClose: 5000 });

    return (
      <div className="container page-wrapper">
      <div className="page-inner">
        <div className="row">
          <div className="el-wrapper">
            <div className="box-up">
              <Image className="img" src={image} alt="" rounded/>
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">{title}</span>
                  <span className="p-company">{price}</span>
                </div>
                <div className="a-size">Price : <span className="size">{price}</span></div>
              </div>
            </div>
        
            <div className="box-down">
            <div className="h-bg">
            <div className="h-bg-inner"></div>
            </div>

          <a className="cart" href="#">
            <span className="add-to-cart">  
            {/* <span className="price">Rs {price}</span> */}
            <span className="txt" onClick={(e)=>addToBasket(e)}>Add in cart</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default FlashProduct
