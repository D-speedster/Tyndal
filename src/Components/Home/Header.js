import React, { useEffect } from 'react';
import { Col, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NAVIGATION, HOME_CONTENT } from '../../constants/content';
import './Home.css';

export default function Header() {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header-home');
            if (header) {
                if (window.scrollY > 50) {
                    header.classList.add('is-active');
                } else {
                    header.classList.remove('is-active');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='header-home'>
            <Container>
                <Navbar className='navbar navbar-expand-lg justify-content-between pt-3' expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Col>
                            <Nav className="me-auto">
                                {NAVIGATION.links.map((link, index) => (
                                    <Link key={index} to={link.to}>{link.label}</Link>
                                ))}
                            </Nav>
                        </Col>
                        <Col>
                            <Link to='/'>
                                <img src='img/logo.svg' alt='تیندال' />
                            </Link>
                        </Col>
                        <Col>
                            <button className='btn btn-login'>
                                {HOME_CONTENT.buttons.login}
                            </button>
                            <button className='btn btn-create-store'>
                                {HOME_CONTENT.buttons.createStore}
                            </button>
                        </Col>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
}
