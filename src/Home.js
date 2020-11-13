import React from 'react';
import FlashProduct from './FlashProduct';
import './Home.css';
import Product from './Product';
import CardT from './CardT';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Home() {
    return (
        <div className='home'>

            <div className="home_container">

                <img className="home_image" src="https://firebasestorage.googleapis.com/v0/b/fuwutest.appspot.com/o/e-store%2Fflat-lay-desk-elements-arrangement-with-copy-space.jpg?alt=media&token=a539d4fb-f77d-4705-8067-e55f9d236100" alt=""/>

                <div className="home_row">
                    <Product 
                        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard." 
                        price={100}
                        image='https://firebasestorage.googleapis.com/v0/b/fuwutest.appspot.com/o/e-store%2FWhatsApp%20Image%202020-10-31%20at%205.45.45%20AM.jpeg?alt=media&token=4aee2f96-a8c3-423a-91f9-ca3b50c247cf'
                        rating = {5}/>
                    <Product 
                        title="product 1" 
                        price={100}
                        image='https://firebasestorage.googleapis.com/v0/b/fuwutest.appspot.com/o/e-store%2FWhatsApp%20Image%202020-10-31%20at%205.45.45%20AM.jpeg?alt=media&token=4aee2f96-a8c3-423a-91f9-ca3b50c247cf'
                        rating = {5}/>
                </div>

                <div className="home_row">
                    <FlashProduct image='http://code.slicecrowd.com/labs/4/images/t-shirt.png' title="Sample Tooth" price="100"/>
                    <FlashProduct image='https://firebasestorage.googleapis.com/v0/b/fuwutest.appspot.com/o/e-store%2FWhatsApp%20Image%202020-10-31%20at%205.45.45%20AM.jpeg?alt=media&token=4aee2f96-a8c3-423a-91f9-ca3b50c247cf' title="Sample Tooth" price="100"/>
                </div>

                <div className="home_row">
                    <Product 
                        title="product 1" 
                        price={100}
                        image='https://firebasestorage.googleapis.com/v0/b/fuwutest.appspot.com/o/e-store%2FWhatsApp%20Image%202020-10-31%20at%205.45.45%20AM.jpeg?alt=media&token=4aee2f96-a8c3-423a-91f9-ca3b50c247cf'
                        rating = {5}/>
                    <Product 
                        title="product 1" 
                        price={100}
                        image='https://firebasestorage.googleapis.com/v0/b/fuwutest.appspot.com/o/e-store%2FWhatsApp%20Image%202020-10-31%20at%205.45.45%20AM.jpeg?alt=media&token=4aee2f96-a8c3-423a-91f9-ca3b50c247cf'
                        rating = {5}/>
                        <Product 
                        title="product 1" 
                        price={100}
                        image='https://firebasestorage.googleapis.com/v0/b/fuwutest.appspot.com/o/e-store%2FWhatsApp%20Image%202020-10-31%20at%205.45.45%20AM.jpeg?alt=media&token=4aee2f96-a8c3-423a-91f9-ca3b50c247cf'
                        rating = {5}/>
                </div>

                <div className="home_row">
                    <CardT/>
                </div>

                

            </div>

        </div>

         
    )
}

export default Home
