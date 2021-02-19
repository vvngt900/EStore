import React from 'react';
import { Col, Row, ListGroup } from 'react-bootstrap';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";
import CheckOutItem from './CheckOutItem';


function Checkout() {

    const [{ basket }, dispatch] = useStateValue();

    return (

        <Row>
        <Col>
            <h4 className="d-flex justify-content-between align-items-center mb-3" style={{padding:'20px'}}>
                <span class="text-muted">Your cart</span>
                <span className="badge badge-secondary badge-pill">{basket.length}</span>
            </h4>

            <ListGroup as="ul" style={{padding:"5px"}}>
            {basket.map( x => 
                <CheckOutItem item={x}/>
                )}
            <ListGroup.Item as="li" disabled>
            <Subtotal/>
            </ListGroup.Item>
            </ListGroup>

            <form className="card p-2">
                <div className="input-group" style={{padding:"10px"}}> 
                    <input type="text" className="form-control" placeholder="Enter your email"/>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-dark">Submit Your request</button>
                    </div>
                </div>
            </form>
        </Col>
        </Row>
    )
}

export default Checkout
