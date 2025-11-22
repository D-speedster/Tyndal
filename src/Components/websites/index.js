import React from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../Home/Header";
import { Footer } from '../Home/components';
import './index.css';

export default function Websites() {
    return (
        <div>
            <Header />
            <div className="Web-Header">
                <Container>
                    <Row>
                        <Col className="web-Header-text">
                            <h1>
                                ایده شما مهم است
                                <br />
                                یک وبسایت بسازید
                            </h1>
                            <Button>شروع کنید</Button>
                        </Col>
                        <Col className="web-Header-woman">
                            <img src="img/woman.jpg" alt="Woman" />
                        </Col>
                        <Col className="web-Header-site">
                            <img src="/img/site.jpg" alt="Website" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
}