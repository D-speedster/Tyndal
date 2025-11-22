import React, { useEffect, useState } from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { HOME_CONTENT, FOOTER_CONTENT } from '../../constants/content';

// Description Component
export function Description({ title, description }) {
    return (
        <section className='description'>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className='description-buttons'>
                    <button className='btn-start'>{HOME_CONTENT.buttons.start}</button>
                    <button className='btn-secondary'>{HOME_CONTENT.buttons.morePlans}</button>
                </div>
            </div>
        </section>
    );
}

// Title Season Component
export function TitleSeason({ title }) {
    return (
        <div className='title-season'>
            <h2>{title}</h2>
        </div>
    );
}

// Welcome Component
export function Welcome() {
    const { title, buttonText } = HOME_CONTENT.hero;
    
    return (
        <Container>
            <div className='dialog mx-auto mt-5'>
                <h1 className='text-center'>{title}</h1>
                <Button className='btn-top-head d-block mt-4' bg='dark'>
                    {buttonText}
                </Button>
            </div>
        </Container>
    );
}

// Slide Welcome Component
export function SlideWelcome() {
    const images = ['img/pic1.webp', 'img/pic2.webp'];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % images.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className='slider-welcome'>
            <img 
                src={images[currentImage]} 
                className='img-fluid' 
                alt={`Slide ${currentImage + 1}`} 
            />
        </div>
    );
}

// Footer Component
export function Footer() {
    const { company, support, copyright } = FOOTER_CONTENT;
    
    return (
        <footer className="footer">
            <Container>
                <Row className="justify-content-between">
                    <Col sm={12} md={3} lg={2}>
                        <ul>
                            <span>{company.title}</span>
                            {company.links.map((link, index) => (
                                <li key={index}>{link}</li>
                            ))}
                        </ul>
                    </Col>
                    <Col sm={12} md={3} lg={2}>
                        <ul>
                            <span>{support.title}</span>
                            {support.links.map((link, index) => (
                                <li key={index}>{link}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <Row className="end-footer">
                    <Col className="copy-right">
                        <span>{copyright}</span>
                    </Col>
                    <Col className="social-media">
                        <div><BsFacebook /></div>
                        <div><BsTwitter /></div>
                        <div><BsInstagram /></div>
                        <div><BsYoutube /></div>
                        <div><FcGoogle /></div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
