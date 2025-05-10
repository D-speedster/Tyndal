import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import '../Home.css'
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
let names = ['amir', 'ali', 'mmd', 'amir'];
let ssc = new Set(names)
console.log(ssc)

export default function Footer() {
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

    )
}
