import React, { useEffect, useState } from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

// Description Component
export function Description({ title, dialog }) {
    return (
        <section className='Description'>
            <div>
                <h2>{title}</h2>
                <p>{dialog}</p>
                <div className='Description_Button'>
                    <button className='Start_btn'>شروع کنیم</button>
                    <button className='btn btn-secondary'>طرح های بیشتر</button>
                </div>
            </div>
        </section>
    );
}

// Title Season Component
export function TitleSeason({ title }) {
    return (
        <div className='Title_Season'>
            <h2>{title}</h2>
        </div>
    );
}

// Welcome Component
export function Welcome() {
    return (
        <Container>
            <div className='Dialog mx-auto mt-5'>
                <h1 className='text-center'>یک وب سایت حرفه ای بسازید که با کسب و کار شما رشد کند.</h1>
                <Button className='btn-top-head d-block mt-4' style={{ width: '210px' }} bg='dark'>
                    فروشگاه خود را بسازید
                </Button>
            </div>
        </Container>
    );
}

// Slide Welcome Component
export function SlideWelcome() {
    const pic = ['img/pic1.webp', 'img/pic2.webp'];
    const [slidImage, setSlidImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlidImage(prev => prev === 0 ? 1 : 0);
        }, 5000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='slider_Welcome'>
            <img src={pic[slidImage]} className='img-fluid' alt='Welcome slide' />
        </div>
    );
}

// Footer Component
export function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="justify-content-between">
                    <Col sm={12} md={3} lg={2}>
                        <ul>
                            <span>شرکت</span>
                            <li>درباره</li>
                            <li>مشاغل</li>
                            <li>مطبوعات</li>
                            <li>تماس</li>
                        </ul>
                    </Col>
                    <Col sm={12} md={3} lg={2}>
                        <ul>
                            <span>پشتیبانی</span>
                            <li>انجمن</li>
                            <li>پشتیبانی آنلاین</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="End-Footer">
                    <Col className="copy-right">
                        <span>تیندال 2020 - 2033</span>
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
