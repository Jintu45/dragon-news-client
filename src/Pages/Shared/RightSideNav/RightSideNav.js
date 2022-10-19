import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../../assets/brand/Brand1.png';
import brand2 from '../../../assets/brand/Brand2.png'

const RightSideNav = () => {
    return (
        <div>
             <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Sign in with google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> sign in via github</Button>    
            </ButtonGroup>
            <div className='mt-3'>
                <h5>social contact us</h5>
                <ListGroup className='mt-3'>
                    <ListGroup.Item className='mb-3'><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaInstagram/> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp/> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch/> Twitch</ListGroup.Item>
                </ListGroup>
            </div>

            <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={brand1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={brand2}
                    alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    );
};

export default RightSideNav;