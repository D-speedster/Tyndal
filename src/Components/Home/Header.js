import React, { useEffect } from 'react';
import { Col, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Header() {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.Header_Home');
            if (header) {
                if (window.scrollY > 50) {
                    header.classList.add('Is_Active');
                } else {
                    header.classList.remove('Is_Active');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='Header_Home'>
            <Container>
                <Navbar className='navbar navbar-expand-lg justify-content-between pt-3' expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Col>
                            <Nav className="me-auto">
                                <Link to="/websites">وبسایت ها</Link>
                                <Link to="/websites">تعرفه</Link>
                                <Link to="#blog">وبلاگ</Link>
                                <Link to="#tutorial">آموزش</Link>
                            </Nav>
                        </Col>
                        <Col>
                            <Link to='/'>
                                <img src='img/logo.svg' alt='تیندال' />
                            </Link>
                        </Col>
                        <Col>
                            <button className='btn me-3'>ورود</button>
                            <button className='btn btn_create'>ساخت فروشگاه</button>
                        </Col>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
}
