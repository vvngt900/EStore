import React from 'react'
import { Col, Image, ListGroup, Row } from 'react-bootstrap';
import { useStateValue } from "./StateProvider";
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import './Checkout.css';
import { red } from '@material-ui/core/colors';

function CheckOutItem({item}) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: item.id,
        })
    }

    return (
        <div>
            <ListGroup.Item as="li" style={{padding:"5px"}}>
                <Row  style={{alignItems:"center", justifyContent:"center"}}>
                    <Col style={{maxWidth:"90px"}}>
                        <Image className='item_Image' src={item.image} rounded/>
                    </Col>
                    <Col>
                        <h6 className="my-0">{item.id}</h6>
                        <small className="text-muted">{item.title}</small>
                    </Col>
                    <Col style={{textAlign:"right"}}>
                    <span className="text-muted">Rs {item.price}</span>
                    </Col>
                    <DeleteForeverOutlinedIcon style={{color:red, marginRight:"30px"}} onClick={removeFromBasket}/>
                </Row>
            </ListGroup.Item>
        </div>
    )
}

export default CheckOutItem
