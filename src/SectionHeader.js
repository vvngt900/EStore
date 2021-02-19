import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Carousel } from 'react-bootstrap';

function SectionHeader() {
    return (

        <Carousel>
            <Carousel.Item>
                <Jumbotron className='jumbo'>
                <div className='overlay'></div>
                <Container>
                    <h3><strong>Fuwu</strong></h3>
                    <p>We provide all - in - one application for ease of use to cater to business to business to costumer transactions</p>
                </Container>
                </Jumbotron>
            </Carousel.Item>

            <Carousel.Item>
                <Jumbotron className='jumbo'>
                <div className='overlay'></div>
                <Container>
                <h3><strong>Fuwu</strong></h3>
                <p>We provide all - in - one application for ease of use to cater to business to business to costumer transactions</p>
                </Container>
                </Jumbotron>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Jumbotron className='jumbo'>
                <div className='overlay'></div>
                <Container>
                <h3><strong>Fuwu</strong></h3>
                <p>We provide all - in - one application for ease of use to cater to business to business to costumer transactions</p>
                </Container>
                </Jumbotron>
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

</Carousel>

        
    )
}

export default SectionHeader
