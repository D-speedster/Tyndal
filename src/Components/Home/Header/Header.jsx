import React, { useEffect, useRef } from 'react'
import '../Home.css'
import { Button, Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Header() {
    const ScrollCheck = useRef('');
    window.addEventListener('scroll', (() => {
        if (window.scrollY > 50) {
            // console.log("Nowww !")
            // console.log(ScrollCheck.current.className = 'Is_Active')
            document.querySelector('.Header_Home').classList.add('Is_Active')
        }
        else {
            document.querySelector('.Header_Home').classList.remove('Is_Active')
        }
    }))

    return (
        <div className='Header_Home'>
            <Container >

                <Navbar className='navbar navbar-expand-lg  justify-content-between pt-3' expand="lg" >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{ color: '#FFF' }}>
                        <Col>

                            <Nav className="me-auto">
                                <Link to="/websites">وبسایت ها</Link>
                                <Link to="/websites">تعرفه</Link>
                                <Link to="#link">وبلاگ</Link>
                                <Link to="#link">آموزش</Link>

                                {/* <NavDropdown title="More" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Pricing</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">More</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>

                        </Col>

                        <Col>
                           <Link to='/'>
                           <img src='img/logo.svg' />
                           </Link>
                        </Col>
                        <Col>
                            <button className='btn me-3' style={{ fontSize: '16px', fontWeight: '600px', fontFamily: 'IRANYEKANBold !important' }}>ورود </button>
                            <button className='btn btn_create'>ساخت فروشگاه</button>
                        </Col>
                    </Navbar.Collapse>

                </Navbar>
            </Container>


        </div>
    )
}
