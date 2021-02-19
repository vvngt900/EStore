import React from 'react';
import FlashProduct from './FlashProduct';
import './Home.css';
import Container from "react-bootstrap/Container";
import { Col, Row } from 'react-bootstrap';
import MaterialCard from './MaterialCard';
import ProductCard from './ProductCard';



function Home() {
    return (
    <Container fluid>

                <Row>
                    <Col>
                    <FlashProduct id='12321341' 
                                  image='https://firebasestorage.googleapis.com/v0/b/estore-5fb9b.appspot.com/o/eStore_images%2FartWrk1.jpeg?alt=media&token=578af563-55e1-40b9-b965-a6c57d7facc6' 
                                  title="Sample Tooth 1" 
                                  price={100}/>
                    </Col>
                    <Col>
                    <FlashProduct id='12321342' 
                                  image="https://firebasestorage.googleapis.com/v0/b/estore-5fb9b.appspot.com/o/eStore_images%2Fmask2.jpeg?alt=media&token=b1ac4063-ff3e-45c3-b108-033c514067f4" 
                                  title="Sample Tooth 2" 
                                  price={100}/>
                    </Col>
                    <Col>
                    <MaterialCard/>
                    {/* <FlashProduct id='12321343' 
                                  image="https://firebasestorage.googleapis.com/v0/b/estore-5fb9b.appspot.com/o/eStore_images%2FartWrk3.jpeg?alt=media&token=136bcab1-3a3b-402d-b725-7b9b78c83b89" 
                                  title="Sample Tooth 3" 
                                  price={100}/> */}
                    </Col>
                    <Col>
                    <MaterialCard/>
                    </Col>
                    {/* <Col>
                    <ProductCard/>
                    </Col> */}
                </Row>

    </Container>
    )
}

export default Home
